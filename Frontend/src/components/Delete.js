import Deleteicon from '../assests/images/delete.png';
import Downarrow from '../assests/images/downarrow.png'
import styled from 'styled-components';

function Delete() {
  return (
    <Container className='flex a-center j-center gap'>
      <div><img src={Deleteicon} alt='delete'></img></div>
      <div>Delete</div>
    </Container>
  );
}

export default Delete;
const Container=styled.div`
position: absolute;
width: 169px;
height: 40px;
left:50%;
top:2%;

background: #FFFFFF;
box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
border-radius: 10px;

`