import './totalContact.css';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import Buttons from '../components/button'
import axios from 'axios'
const TotalContact = ()=>{
    const [users,setUsers] = useState();
    const [reload,setReload]=useState(false);
    const [contact,setContact]=useState([]);

    useEffect(()=>{
        getData()
    },[reload])

    const handleContact = (e)=>{
        const {value,checked}=e.target;
        console.log(checked)
        if(checked){
            setContact([...contact,value])
        }else{
            setContact(contact.filter(e=>e!==value))
        }
    }



    //Fetching data
    const getData=async ()=>{
        const user = await axios.get("http://localhost:3004/getContacts").then((res)=>{
          return res
        });
        setUsers(user);
        console.log(users)
    }

    //deleting the user  
           const deleteUser=async ()=>{
            const user = await axios.delete(`http://localhost:3004/del/${contact}`)
            window.location.reload()
            setReload(!reload)
           
        }
    return (    
        <> 
          <Container className='parent'>
            <Buttons/>
            
            <button onClick={getData}>Users</button>
            <button onClick={deleteUser}>Delete</button>
            {users?.data.map((ele,id)=>{
                return(
                    <div className="contact-container" key={id}>
                    <input type="checkbox" value={ele._id}  onChange={(e)=>{handleContact(e)}}/>
                    <p>{ele.name}</p>
                    <p>{ele.designation}</p>
                    <p>{ele.company}</p>
                    <p>{ele.industry}</p>
                    <p>{ele.email}</p>
                    <p>{ele.phone}</p>
                    <p>{ele.country}</p>
    
                </div>
                )
            })}
         </Container>  
        </>
    )
}
export default TotalContact;

const Container=styled.div`
   .parent{
    position: relative;
    width: 100vw;
    height: 100vh;
    border:1px solid black;
    background: #FFFFFF;
   }

`