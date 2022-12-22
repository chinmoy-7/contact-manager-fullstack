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
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/TotalContacts" element={<TotalContact/>}/>
      </Routes>
      </BrowserRouter>
     
    </Container>
  );
}

export default App;
const Container=styled.div`

`

{/*<Sidebar/>
      <Navbar/>
      <TotalContact/> */}