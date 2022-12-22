import styled from "styled-components";
import profile from '../assests/images/profile.png';
import search from '../assests/images/search.png'
function Navbar() {
  return (
    <Container className="flex j-between">
      <div className="totalContactstext flex a-center j-center">Total Contacts</div>
      <div className="flex">
            <div className="flex gap search">
                <div><img src={search} alt='search'></img></div>
                <div><input id="search" type="text" placeholder="Search by email...."></input></div>
            </div>
            <div className="flex gap profile">
                <div><img src={profile} alt="profile"></img></div>
                <div className="flex column ">
                    <div className="profilename"><p>Ram Darvin</p></div>
                    <div className="admin"><p>Super Admin</p></div>
                </div>
            </div>
      </div>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
position: absolute;
width: 85%;
height:12%;
left: 16%;
top: 0px;
background: #FFFFFF;
border-bottom: 2px solid #EAEAEA;
.totalContactstext{
    // position: absolute;
    // width:50%;
    // height:61px;;
    margin-left:2%;
    top: 25px;
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 600;
    font-size:25px;
    line-height: 49px;
    color: #454545;
    opacity: 0.8
}
.search{
    position: absolute;
    width:35%;
    height: 50px;
    left:40%;
    top:15%;

    background: #F2F2F2;
    border-radius: 6px
}
.profile{
    position: absolute;
    left:85%;
    top:15%;
    width:20%;
   

}
.profilename{
    
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    color: #000000;

    opacity: 0.8
}
.admin{
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;

    color: #000000;

    opacity: 0.7;
}
#search{
    border: none;
    background-color: transparent;
    resize: none;
    outline: none;
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;

    color: rgba(0, 0, 0, 0.8);
}
.search{
    padding:1rem;
}
.search>input{
    


}


`;
