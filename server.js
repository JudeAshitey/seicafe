const express = require('express');

const morgan = require('morgan');

const favicon = require('serve-favicon');

const path = require('path');

// const logger = require('morgan');

require('dotenv').config();

require('./config/database');

const app = express();
const PORT = process.env.PORT || 3001;

//middleware

app.use(morgan('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname,'build','favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/checkToken'));



app.use('/api/users', require('./routes/api/users'));

//Catch All to serve the production app
app.get('/*',(req,res)=>{
    res.send(path.join(__dirname,'build', 'index.html'))
})





app.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`);
})




/*
const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3001;

// middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

// API Routes
app.get('/api/orders', (req, res) => {

})


// Catch All to serve the production app
app.get('/*', (req, res) => {
    res.send(path.join(__dirname, 'build', 'index.html'))
})


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})
*/
