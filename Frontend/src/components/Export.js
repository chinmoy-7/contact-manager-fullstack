import {useState} from 'react'
import axios from 'axios';
const Export = ()=>{
    const [file,setFile]=useState()
    const handleSubmit=async (e)=>{
        e.preventDefault();
        let data = new FormData();
        data.append('contact',file[0])
        const res=axios.post("http://localhost:3004/upload",data)
        console.log(file)
        // setFile(null);
    }
    return(
        <>
        <form method="POST" >
            <input type="file" onChange={(e)=>{setFile(e.target.files)}}/>
            <button onClick={(e)=>handleSubmit(e)}>Submit</button>
        </form>
        </>
    )
}
export default Export