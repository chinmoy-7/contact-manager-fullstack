//Imports
const express = require("express");
const dotenv = require("dotenv")
const cors= require("cors")
const route  = require("./Routes/route")
//Use and config
const app=express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/",route)


app.listen(process.env.PORT,()=>{
    console.log(`Ther server is up at ${process.env.PORT}`)
})