import styled from "styled-components";
import Vector from "../assests/images/Vector.jpg";
import dashboard from "../assests/images/dashboard.png";
import line from "../assests/images/line.png";
import logout from "../assests/images/logout.png";
function Sidebar() {
  return (
    <Container className="flex column j-between">
      <div >
          
                <div className="logo">
                    <p>Logo</p>
                </div>
                <div>
                    <div className="flex gap dashboard">
                        <div className="gap">
                            <img src={Vector} alt="vector"></img>
                        </div>
                        <div >
                            <p>Dashboard</p>
                        </div>
                    </div>

                    <div className=" flex a-center j-center gap totalContacts">
                        <div >
                            <img src={dashboard} alt="dash"></img>
                        </div>
                        <div className="contacts">Total Contacts</div>
                        <div>
                        <img src={line} alt="line"></img>
                        </div>
                    </div>
              </div>  
         
      </div>
      <div className="flex gap logout">
            <div>
                {" "}
                <img src={logout} alt="logout"></img>
            </div>
            <div>
                <p>Logout</p>
            </div>
      </div>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  position: absolute;
  width: 16%;
  height: 100vh;
  left: 0px;
  top: 0;
  background-color: #cef3ff;
  border: 1px solid #cef3ff;
  padding:1.5%;
   .logo{
    position: absolute;
    width: 83px;
    height: 61px;
    left: 50px;
    top: 13px;
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    line-height: 61px;
    color: #0884FF;

   }

  .dashboard {
    position: absolute;
    // border:1px solid black;
    width: 50%px;
    height: 10%px;
    padding:1rem;
    top: 17%;
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #181818;

  }
  

  .totalContacts{
    position: absolute;
    width: 183px;
    height: 65px;
    top: 28%;
    background: #2DA5FC;
    border-radius: 6px;
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 600;
    font-size:17px;
    line-height: 27px;
    color: #FFFFFF;
    opacity: 0.8
   

  }
  .logout{
    margin-left:0.5rem;
  }
  
 
`;
