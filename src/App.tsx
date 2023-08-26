import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home-view';
import About from './pages/About/about-view';
import Rooms from './pages/Rooms/rooms-view';
import Contact from './pages/Contact/contact-view';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
