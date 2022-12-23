const mongoose = require("mongoose");

const connectDB=()=>{
    mongoose.set("strictQuery",false);
    mongoose.connect("mongodb+srv://root:root123@cluster0.yfnqkmr.mongodb.net/?retryWrites=true&w=majority").then((res)=>{
            console.log("Connected to DB")
    });
}

module.exports=connectDB