//Imports
const express = require("express");
const dotenv = require("dotenv")
const cors= require("cors")
const route  = require("./Routes/route")
const connectDB=require("./connectDB/connect");
<<<<<<< HEAD
const login = require("./Routes/login")


=======
const getContacts=require("./Routes/getContacts")
const searchContacts=require("./Routes/search")
>>>>>>> c0697d5a24e195d699f04c75d41c9dcbe6f29543

//Use and config
const app=express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
<<<<<<< HEAD
app.use("/",route);
app.use("/",login)
=======
app.use("/",route)
app.use("/getContacts",getContacts);
app.use("/search",searchContacts);
>>>>>>> c0697d5a24e195d699f04c75d41c9dcbe6f29543


app.listen(process.env.PORT,async ()=>{
    await connectDB();
    console.log(`Ther server is up at ${process.env.PORT}`)
})