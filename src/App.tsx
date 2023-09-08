import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home-view';
import About from './pages/About/about-view';
import Rooms from './pages/Rooms/rooms-view';
import Contact from './pages/Contact/contact-view';
import { Provider } from 'react-redux';
import { store } from './redux/store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/rooms/:id' element={<Rooms />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
