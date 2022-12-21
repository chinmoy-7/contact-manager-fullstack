const router = require("express").Router();
const Contacts=require("../Models/contacts")

router.get("/:email",async(req,res)=>{
    try{
        const Contact=await Contacts.findOne(req.params.email);
        if(Contact){
          if(Contact[0].user==req.user){
            res.status(200).json(Contact);
          }
        }
        
    }catch{
            res.status(404).json("email not found");
    }
})

module.exports= router;