
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './Footer';
import Home from './components/Home';




function App() {

 
  
  return (
    <div className='body'>
    <div className='nav1'>
      <Navbar/>
    </div>
    <div className='cont'>
      <Home/>
    </div>
    <div className='footer'>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
