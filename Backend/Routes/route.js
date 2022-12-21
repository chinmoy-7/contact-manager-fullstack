const router = require("express").Router();
const csvtojson =require("csvtojson");
const upload = require("../Middlewear/middle")
const contact= require("../Models/contacts")

const fs = require("fs");

// router.get("/",(req,res)=>{
//     res.send("Working");
// })

//Inserting the csv
router.post("/upload",upload.single("contact"),(req,res)=>{
    try{
       
        csvtojson().fromFile("public/contact.csv")
        .then( (csvData)=>{
            // console.log(csvData)
            contact.insertMany(csvData)
            .then( ()=>{
                 fs.unlink("public/contact.csv",(err)=>{console.log(err)})
                res.json({
                    message:"sucessfully inserted"
                })
            }).catch((e)=>{
                res.json({
                    message:e.message
                })
            })
        })
    }catch(e){
        res.status(400).json({
            message:e.message
        })
    }
})

router.get("/get",async (req,res)=>{
    try{
        const users =await  contact.find();
        res.status(200).json(users);
    }catch(e){
        res.status(400).json({
            message:e.message
        })
    }
})

router.delete("/del/:id",async (req,res)=>{
    try{
        let {id}=req.params;
        id=id.split(",")
        await contact.deleteMany({_id: {$in: id}})
        res.status(200).json({
            message:"successfully deleted"
        })
    }catch(e){
        res.status(400).json({
            message:e.message
        })
    }
})

//Deleting from csv

module.exports= router;