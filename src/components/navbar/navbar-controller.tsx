import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function NavbarController(){
    const [isOpen, setIsOpen] = useState(false);
    const location=useLocation();
  
    const toggleMenu = () => {
      setIsOpen((prev)=> !prev);
    };
    const isRouteActive = (path: any) => {
      return location.pathname === path;
    }
    useEffect(()=>{
      AOS.init({duration: 3000});
    })

    return {isRouteActive, isOpen, toggleMenu};
}

export default NavbarController;
