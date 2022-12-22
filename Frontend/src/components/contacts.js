import styled from "styled-components";
function Contacts({email,name,designation,company,industry,phone,country}) {
  return (
    <div>
        <Table className="flex a-center">
         
          <Header className="flex gap">
            <th>Name</th>
            <th>Designation</th>
            <th>Company</th>
            <th>Industry</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Country</th>
            <th>Action</th>
          </Header>
        </Table>
    </div>
  );
}

export default Contacts;
const Table=styled.div`
position: absolute;
width:86%;
height: 60px;
left:16%;
top:25%;

background: #B3DFFF;
box-shadow: inset -1px -1px 20px rgba(254, 134, 39, 0.1), inset 1px 1px 20px rgba(254, 134, 39, 0.1);
border-radius: 10px;
`
const Header=styled.tr`
position: absolute;
width:90%;
height: 30px;
left:5%;
// top: 222px;
font-family: 'Titillium Web';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px;
color: #38322C;
opacity: 0.8;
`