const express = require("express");
const app = express();

const port = 3000;

//Adding Middleware
app.use(express.json());

//get request
app.get("/",(req,res) => {
    res.send(`<h1>This is h1 Heading</h1>`)
})
app.listen(port, ()=>{
    console.log("App chal gya")
})