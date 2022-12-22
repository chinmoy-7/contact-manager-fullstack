const router = require("express").Router();
const Contacts=require("../Models/contacts");
const auth = require ("../Middlewear/authentication")


router.get("/",async(req,res)=>{
    try{
        const existing_contacts=await Contacts.find();
        if(existing_contacts){
            res.status(200).json(existing_contacts)
        }
    }catch{
        res.status(404).json("contacts not found")
    }
})

module.exports= router;