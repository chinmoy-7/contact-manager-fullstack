const mongoose = require("mongoose");

const connectDB=()=>{
    mongoose.set("strictQuery",false);
    mongoose.connect("mongodb://127.0.0.1:27017/contact").then((res)=>{
            console.log("Connected to DB")
    });
}

module.exports=connectDB