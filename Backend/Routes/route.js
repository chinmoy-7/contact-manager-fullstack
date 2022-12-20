const router = require("express").Router();
const csvtojson =require("csvtojson");
const upload = require("../Middlewear/middle")
const contact= require("../Models/contacts")
const fs = require("fs");

router.get("/",(req,res)=>{
    res.send("Working");
})

//Inserting the csv
router.post("/upload",upload.single("contact"),(req,res)=>{
    try{
       
        csvtojson().fromFile("public/contact.csv")
        .then(async (csvData)=>{
            // console.log(csvData)
            await contact.insertMany(csvData)
            .then(async ()=>{
                await fs.unlink("public/contact.csv",(err)=>{console.log(err)})
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

//Deleting from csv

module.exports= router;