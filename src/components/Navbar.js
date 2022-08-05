import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import Politics from './Politics';
import Home from './Home';
import Automobile from './Automobile';
import Business from './Business';
import Entertainment from './Entertainment';
import Miscellaneous from './Miscellaneous';
import National from './National';
import Science from './Science';
import Sports from './Sports';
import Startup from './Startup';
import Technology from './Tecnology';
import Unconventional from './Unconventional';
import World from './World';


export default function navbar() {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    maxHeight: '100px' 
  };

  return (
    
    <div>
      
    <BrowserRouter>
      
       <Navbar bg="light" expand="lg">
        <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{mystyle}}
            navbarScroll
          >
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/">Politics</Nav.Link>
            <NavDropdown title="More News" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Automobile">Automobile</NavDropdown.Item>
              <NavDropdown.Item href="/Business">Business</NavDropdown.Item>
              <NavDropdown.Item href="/Entertainment">Entertainment</NavDropdown.Item>
              <NavDropdown.Item href="/Miscellaneous">Miscellaneous</NavDropdown.Item>
              <NavDropdown.Item href="/National">National</NavDropdown.Item>
              <NavDropdown.Item href="/Politics">Politics</NavDropdown.Item>
              <NavDropdown.Item href="/Science">Science</NavDropdown.Item>
              <NavDropdown.Item href="/Sports">Sports</NavDropdown.Item>
              <NavDropdown.Item href="/Startup">Startups</NavDropdown.Item>
              <NavDropdown.Item href="/Technology">Technology</NavDropdown.Item>
              <NavDropdown.Item href="/Unconventional">Unconventional</NavDropdown.Item>
              <NavDropdown.Item href="/World">World</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
       </Container>
       </Navbar>

       <Routes>
          <Route path="/" element={<Home/>} />
       </Routes>
       <Routes>
          <Route path="/Politics" element={<Politics/>} />
       </Routes>
       <Routes>
          <Route path="/Automobile" element={<Automobile/>} />
       </Routes>
       <Routes>
          <Route path="/Business" element={<Business/>} />
       </Routes>
       <Routes>
          <Route path="/Entertainment" element={<Entertainment/>} />
       </Routes>
       <Routes>
          <Route path="/Miscellaneous" element={<Miscellaneous/>} />
       </Routes>
       <Routes>
          <Route path="/National" element={<National/>} />
       </Routes>
       <Routes>
          <Route path="/Science" element={<Science/>} />
       </Routes>
       <Routes>
          <Route path="/Sports" element={<Sports/>} />
       </Routes>
       <Routes>
          <Route path="/Startup" element={<Startup/>} />
       </Routes>
       <Routes>
          <Route path="/Technology" element={<Technology/>} />
       </Routes>
       <Routes>
          <Route path="/Unconventional" element={<Unconventional/>} />
       </Routes>
       <Routes>
          <Route path="/World" element={<World/>} />
       </Routes>
    
    

   
    </BrowserRouter> 

    
    </div>
  )
}
