import Importicon from '../assests/images/import.png'
import styled from "styled-components";
import Contacts from './contacts';
import TotalContact from '../pages/TotalContacts';
import Background from './backgound';
import { useState } from 'react';
function Import() {
  const [state,setState]=useState(true);
  const handleState=()=>{
      setState(!state);
      console.log(1)
  }
  return (
    <>
    <Container className="flex  a-center j-center gap" onClick={handleState}>
     <div><img src={Importicon} alt='icon'></img></div>
     <div>Import</div>
    </Container>
    {console.log(state)}
    
    <Container2>
      {state && <Dialog>
       fhdjfjkdfjk
       
      </Dialog>}
    </Container2>
    </>
  );
}

export default Import;
const Container=styled.div`
position: absolute;
width: 169px;
height: 40px;
left:66%;
top:2%;

background: #FFFFFF;
box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
border-radius: 10px;

`
const Container2=styled.div`

`
const Dialog=styled.div`
position: absolute;
width: 300px;
height: 250px;
left: 35%;
top: 30%;
background: #FFFFFF;
border-radius: 10px;
border:2px solid black;

`