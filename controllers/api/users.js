const User= require('../../models/user');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

// function create(req, res){
//     res.json({ user :{
//             name:req.body.name,
//             email: req.body.email,
//         }}
//     );
// }

async function create(req , res){
    console.log(req.body);
    try{
        //Add the user to the database
        const user = await User.create(req.body)
        console.log(user);
        //Create JWT Token
        const token = createJWT(user)
        // send token to client
        res.json(token)
    } catch(err){
        res.status(400).json(err)
    }
}


function checkToken(req , res){
    //req.user will always be there for you when a token is sent
    console.log('req.user', req.user);
    res.json(req.exp);
}




async function login(req , res){
    try{
        const user = await User.findOne({email:req.body.email});
        if(!user) throw new Error();
        const match = await bcrypt.compare(req.body.password);
        if(!match) throw new Error();
        res.json(createJWT(user));
    }catch{
        res.status(400).json('Bad Credentials');
    }
}


/*-- Helper Functions --*/

function createJWT(user){
    console.log(jwt.sign({user},process.env.SECRET,{expiresIn:'24h'}));
    return jwt.sign({user},process.env.SECRET,{expiresIn:'24h'})
}

module.exports = { 
                   create,
                   login,
                   checkToken
                };