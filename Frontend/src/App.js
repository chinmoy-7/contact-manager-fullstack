import Export from "./components/Export";
import styled from "styled-components";
import Signin from './pages/signInPage/signin';
import Signup from "./pages/signUpPage/signup";
import Sidebar from "./components/Sidebar";
import Navbar  from './components/NavBar';
import TotalContact from "./pages/TotalContacts";
import { BrowserRouter,Routes,Route } from "react-router-dom";

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

`

{/* */}