import { createContext, useState } from "react";
import axios from "axios";
const ContactContext=createContext()
export const ContactContextProvider=({children})=>{

    function compare( a, b ) {
        if ( a.email < b.email ){
          return -1;
        }
        if ( a.email > b.email ){
          return 1;
        }
        return 0;
      }

    const [contact,setContact]=useState([]);
    const [tick,settick]=useState(false);

    const getData=async ()=>{
        const headers = {"Authorization": localStorage.getItem("token") }
        let user = await axios.get("https://contact-manager-0ahz.onrender.com/getContacts",{headers})
        user.data.sort(compare)
        // console.log(user.data)
        setContact(user?.data)
    }

    const deleteUser=async (selectContact)=>{
        console.log(selectContact)
        const headers = {"Authorization": localStorage.getItem("token") }
        const user = await axios.delete(`https://contact-manager-0ahz.onrender.com/del/${selectContact}`,{headers})
        
        settick(false)
        getData();
        // console.log(contact)
       
    }
    return (
        <ContactContext.Provider value={{contact,getData,deleteUser,tick,settick,setContact}}>
            {children}
        </ContactContext.Provider>
    )
}
export default ContactContext;