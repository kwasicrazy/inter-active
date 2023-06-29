import React from 'react';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import Nav from './Nav';
import Demo from './Demo'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='Demo' element={<Demo/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
