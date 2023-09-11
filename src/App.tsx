import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Rooms from './pages/Rooms/index';
import RoomDetails from './pages/RoomDetails/index';
import Contact from './pages/Contact/index';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/rooms/:roomId' element={<RoomDetails />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
