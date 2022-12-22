const router = require("express").Router();
const Contacts=require("../Models/contacts")
const auth=require("../Middlewear/authentication")

router.get("/:email",auth,async(req,res)=>{
    try{ 
      var email = req.params.email;
      var name = email.substring(0, email.lastIndexOf("@"));
      console.log(name);
        const Contact=await Contacts.findOne({email:{$regex:name,$options:'i'}});
        
          
            res.status(200).json(Contact);
        
    }catch(e){
            res.status(404).json(e.message);
    }
})

module.exports= router;