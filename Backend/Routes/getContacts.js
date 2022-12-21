const router = require("express").Router();
const Contacts=require("../Models/contacts")

router.get("/",async(req,res)=>{
    try{
        const existing_contacts=await Contacts.find(req.user);
        if(existing_contacts){
            res.status(200).json(existing_contacts)
        }
    }catch{
        res.status(404).json("contacts not found")
    }
})

module.exports= router;