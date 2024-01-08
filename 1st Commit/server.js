/**************Steps*****************/

//Step1: Open a folder in Vs Code
//Step2: run npm init -y in terminal
//Step3: npm i express
//Step4: create server.js file

//Initiate Server
const express = require('express');
const app = express();

//use to parse request.body in express -> PUT or POST
const bodyParser = require('body-parser');

//Specifically parse JSON data & add it to the request.body object
app.use(bodyParser.json());
//Activate Server on 3000 port
app.listen(3000,() => {
    console.log("server started at port number 3000")
});

//Create Routes
app.get('/',(req,res) => {
    res.send("Ram Ram , kya hal chal!!")
})

app.post('/api/cars', (request,response)=>{
    const {name,brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully")
})


/***********************{MONGO DB}**********************/
// -> No SQL data base
// -> Can store data in the form of doc. , Key-value , Graph etc

/**********************{Mongoose}*********************/
// -> ODM {Object Data Modeling} Liabrary
// -> Link MongoDB with Express server

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("Connection Successful")})
.catch((error) => {console.log(error)});