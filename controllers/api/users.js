const User= require('../../models/user')
const jwt = require("jsonwebtoken")

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

/*-- Helper Functions --*/

function createJWT(user){
    console.log(jwt.sign({user},process.env.SECRET,{expiresIn:'24h'}));
    return jwt.sign({user},process.env.SECRET,{expiresIn:'24h'})
}

module.exports = {create}