
import styled from "styled-components";
import Selectdate from './SelectDate';
import Filter from "./Filter";
import Delete from "./Delete";
import Import from "./Import";
import Export from "./Export";

function Buttons() {
  return (
    <Container className="flex j-between">
      <div className="flex gap j-center a-center">
        <div><Selectdate/></div>
        <div><Filter/></div>
      </div>
      <div className="flex gap j-center center">
        <div><Delete/></div>
        <div><Import/></div>
        <div><Export/></div>
      </div>
    </Container>
  );
}

export default Buttons;
const Container=styled.div`
position: absolute;
width: 85%;
height:80%;
left: 16%;
top:13%;
padding:1rem;
background: #FFFFFF;
// border: 2px solid #EAEAEA;
`