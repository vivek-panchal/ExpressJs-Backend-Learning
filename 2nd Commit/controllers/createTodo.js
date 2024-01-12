// Import th model
const Todo = require("../models/Todo");

//Define route handler

exports.createTodo = async(req,res) => {
    try{
        //Extract title and discription from request body
        const {title,description} = req.body;
        //create a new Todo Obj and insert in DB
        const response = await Todo.create({title, description});
        //send a json response with a success flag
        res.status(200).json(
            {
                success : true,
                data : response,
                message : 'Entry Created Successfully'
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success : false,
            data: "Internal server error",
            message :err.message,
        })
    }
}