import Export from "./components/Export";
import TotalContact from "./pages/TotalContacts";
import Signin from './pages/signInPage/signin';
import Signup from "./pages/signUpPage/signup";
function App() {
  return (
    <div className="App">
      {/* <Export/>
      <TotalContact/> */}
      {/* <Login/> */}
      {/* <Signin /> */}
    <Signup/>
    </div>
import Sidebar from "./components/Sidebar";
import Navbar from "./components/NavBar";
import styled from "styled-components";
function App() {
  return (
    <Container>
      <Sidebar/>
      <Navbar/>
      <TotalContact/>
     
    </Container>
  );
}

export default App;
const Container=styled.div`
  margin-top:0px;
`