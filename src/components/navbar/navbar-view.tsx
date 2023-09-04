import React, { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import 'aos/dist/aos.css';
import NavbarController from './navbar-controller';

interface props{
  textColor: string,
  bgColor: '#1d1b1a' | '#f4f2f1' ,
}

const Navbar = ({textColor, bgColor}: props) => {
  const useNavbarController=NavbarController();

  return (
    <nav className={`sticky top-0 z-[1000] bg-[${bgColor}]`}>
      <div className="container mx-auto">
        <div className="flex items-center py-3">
          <Link className="navbar-brand mr-10" to="/">
            <img src="/assets/eurostar-logo.gif" alt="logo" className="w-36" data-aos='fade-right' />
          </Link>
          <button
            className="lg:hidden mx-4 text-white absolute right-2"
            onClick={useNavbarController.toggleMenu}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {useNavbarController.isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
          <div className={`lg:flex justify-between lg:space-x-8 ${useNavbarController.isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col lg:flex-row space-x-10 justify-center items-center">
              <Link
                className={`nav-link text-[1.3rem] hover:text-[#a45c32] ${
                  useNavbarController.isRouteActive('/') ? 'text-[#a45c32]' : `text-${textColor}`
                }`}
                to="/"
              >
                Home
              </Link>
              <Link
                className={`nav-link text-[1.3rem] m-2 hover:text-[#a45c32] ${
                  useNavbarController.isRouteActive('/about') ? 'text-[#a45c32]' : `text-${textColor}`
                }`}
                to="/about"
              >
                About
              </Link>
              <div className="relative group">
                <Link
                  className={`nav-link text-[1.3rem] hover:text-[#a45c32] ${
                    useNavbarController.isRouteActive('/rooms') ? 'text-[#a45c32]' : `text-${textColor}`
                  }`}
                  to="#"
                >
                  Rooms
                </Link>
              <ul className="group dropdown-menu border justify-center items-center text-center bg-white border-gray-800 w-[15rem] hidden rounded rounded-1xl absolute z-[1000] py-4 mt-0 space-y-2 group-hover:block">
                <li>
                  <Link className="dropdown-item hover:bg-blue-200 px-10 py-2" to="/executive-rooms">
                    Executive Rooms
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item hover:bg-blue-200 px-10 py-2" to="/deluxe-rooms">
                    Deluxe Rooms
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item hover:bg-blue-200 px-10 py-2" to="/luxury-rooms">
                    Luxury Rooms
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item hover:bg-blue-200 px-10 py-2" to="/standard-rooms">
                    Standard Rooms
                  </Link>
                </li>
              </ul>
            </div>
            <Link className={`nav-link text-[1.3rem] m-2 hover:text-[#a45c32] ${useNavbarController.isRouteActive('/reviews') ? 'text-[#a45c32]' : `text-${textColor}`}`} target='_blank' to="https://www.tripadvisor.in/Hotel_Review-g297647-d2041217-Reviews-EuroStar_Inn-Khajuraho_Chhatarpur_District_Madhya_Pradesh.html">
              Review Us
            </Link>
            <Link className={`nav-link text-[1.3rem] m-2 hover:text-[#a45c32]  ${useNavbarController.isRouteActive('/contact-us') ? 'text-[#a45c32]' : `text-${textColor}`}`} to="/contact-us">
              Contact
            </Link>
            <button className='border-none bg-[#ab6034] lg:hidden m-2 text-[1.1rem] text-white w-40 h-12 p-2 hover:bg-[#1f1c1b] border-[4px] hover:border-white'>Book Now {' >'}</button>
          </div>
          <div className='absolute right-10 top-3'>
            <button className='border-none bg-[#ab6034] text-[1.1rem] hidden lg:block text-white w-40 h-14 p-2 hover:bg-[#1f1c1b] border-[4px] hover:border-white'>Book Now {' >'}</button>
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

