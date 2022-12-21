//Imports
const express = require("express");
const dotenv = require("dotenv")
const cors= require("cors")
const route  = require("./Routes/route")
const connectDB=require("./connectDB/connect");
const login = require("./Routes/login")



//Use and config
const app=express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/",route);
app.use("/",login)


app.listen(process.env.PORT,async ()=>{
    await connectDB();
    console.log(`Ther server is up at ${process.env.PORT}`)
})