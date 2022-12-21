const router = require("express").Router();
const Contacts=require("../Models/contacts")
const Auth=require("../Middlewear/authentication")

router.get("/:email",async(req,res)=>{
    try{
        const Contact=await Contacts.findOne({email:req.params.email});
        
          
            res.status(200).json(Contact);
        
    }catch{
            res.status(404).json("email not found");
    }
})

module.exports= router;