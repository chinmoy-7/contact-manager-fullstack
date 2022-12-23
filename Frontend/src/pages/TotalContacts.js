import "./totalContact.css";
import { useEffect, useState } from "react";
import Buttons from "../components/button";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Vector from "../assests/images/Vector.jpg";
import dashboard from "../assests/images/dashboard.png";
import line from "../assests/images/line.png";
import logout from "../assests/images/logout.png";
import profile from "../assests/images/profile.png";
import search from "../assests/images/search.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Edit from '../assests/images/Layer 42.png'
import Delete from '../assests/images/Layer 17.png'
import "./totalContact.css";
const TotalContact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [state,setState]=useState(false);
  const [reload,setReload]=useState(false);
  const [dim,setDim]=useState(false)
  const [contact,setContact]=useState([]);
  const [admin,setAdmin]=useState();

  if (!localStorage.getItem("token")) {
    console.log(555);
    navigate("/");
  }
  if (location.pathname == "/") {
    navigate("/TotalContacts");
  }

  const [users,setUsers]=useState();

 useEffect(()=>{
     getData();
     getAdmin()
     setDim(false)
   
 },[])

 
 
      
      const getData=async ()=>{
        const headers = {"Authorization": localStorage.getItem("token") }
        const user = await axios.get("http://localhost:3004/getContacts",{headers})
        setUsers(user.data)
        
        if(user.data.length!=0)
        setState(true)
        console.log(users)
    }

const handleContact = (e)=>{
        const {value,checked}=e.target;
        console.log(checked)
        if(checked){
            setContact([...contact,value])
        }else{
            setContact(contact.filter(e=>e!==value))
        }
    }
    const handleLogout=()=>{
        window.localStorage.clear();
        navigate('/');
   }
   const handleButton=()=>{
      setDim(!dim);
   }

   const handleSearch = async(email,e)=>{
    // console.log(email)
    const headers = {"Authorization": localStorage.getItem("token") }
    if(e.key=="Enter"){
      const user = await axios.get(`http://localhost:3004/search/${email}`,{headers})
      console.log(user.data)
      setUsers(user.data)
      // console.log(users[0])
    }
   }
   const handleResetSearch = (e)=>{
      if(e==""){
        getData();
      }
   }
   const getAdmin = async ()=>{
    const headers = {"Authorization": localStorage.getItem("token") }
    const admins = await axios.get(`http://localhost:3004/getAdmin`,{headers})
    setAdmin(admins)
    // console.log(admins.data)
   }

  return (
    <>
      <div className={`total-container ${dim&&"dim"}`}>
        <div id="container-left">
          <div id="total-sidebar">
            <div id="sidebar-left" className="gap">
              <h2 style={{ color: "#2DA5FC", fontSize: "34px" }}>Logo</h2>
              <div id="dashboard" className="gap">
                <img src={Vector} alt="dashboard"></img>
                <p style={{"margin":"10px","fontSize":"20px"}}>DashBoard</p>
              </div>
              <div id="total-contacts" className="gap">
                <img src={dashboard}></img>
                <p style={{"marginTop":"14px","fontSize":"20px"}}>TotalContact</p>
                <img src={line} alt="TotalContact"></img>
              </div>
            </div>
            <div id="sidebar-right">
              <div id="logout" className="gap" onClick={handleLogout} style={{"cursor":"pointer"}}>
                <img src={logout} alt="Logout"></img>
                <p style={{"margin":"10px"}}>Logout</p>
              </div>
            </div>
          </div>
        </div>
        <div id="container-right">
          <div id="header">
            <div id="header-left">
              <h2>Total Contact</h2>
              <div id="search-container">
                <img src={search}></img>
                <input
                  id="search"
                  type="text"
                  placeholder="Search by email...."
                  onChange={(e)=>{handleResetSearch(e.target.value)}}
                  onKeyDown={(e)=>{handleSearch(e.target.value,e)}}
                ></input>
              </div>
            </div>
            <div id="header-right">
              <div id="logo-left">
                <img src={profile}></img>
              </div>
              <div id="logo-right">
                <h2>{admin?.data}</h2>
                <p>Super Admin</p>
              </div>
            </div>
          </div>

          <div id="main-table">
            <table className="table ">
              <thead className="table-primary">
                <tr>
                  <th scope="col">#</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Company</th>
                  <th>Industry</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Country</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {state && users.map((item,id)=>{
                    return(
                        <tr key={id}>
                            <td><input type="checkbox" value={item?._id} onClick={handleContact}/></td>
                            <td>{state&&item?.name}</td>
                            <td>{state&&item?.designation}</td>
                            <td>{state&&item?.company}</td>
                            <td>{state&&item?.industry}</td>
                            
                            
                            <td id="tooltip "data-toggle="tooltip" data-placement="top" title={state&&item?.email} >{state&&item?.email}</td>
                            <td>{state&&item?.phone}</td>
                            <td>{state&&item?.country}</td>
                            <td>
                              <img src={Delete}style={{"marginRight":"20px"}} alt="delete"/>
                              <img src={Edit}  alt="edit"/>
                            </td>
                      
                        </tr>
                    )
                })}

              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div onClick={()=>{handleButton()}}>
      <Buttons contact={contact}/>
      </div>
    </>
  );
};
export default TotalContact;
