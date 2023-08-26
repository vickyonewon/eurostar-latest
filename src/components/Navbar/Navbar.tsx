import React, { useState } from 'react';
import { Link, } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location=useLocation();

  const toggleMenu = () => {
    setIsOpen((prev)=> !prev);
  };
  const isRouteActive = (path: any) => {
    console.log('location', location);
    return location.pathname === path;
  }

  return (
    <nav className="shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 border-b-2 border-[#9b804e]">
          <Link className="navbar-brand" to="/">
            <img src="/assets/eurostar-logo.gif" alt="logo" className="w-36" />
          </Link>
          <button
            className="md:hidden mx-4"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
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
          <div className={`md:flex md:space-x-8 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col md:flex-row  space-x-8 mx-4">
              <Link
                className={`nav-link ${
                  isRouteActive("/") ? 'text-[#9b804e] text-2xl underline underline-offset-8' : ''
                }`}
                to="/"
              >
                Home
              </Link>
              <Link
                className={`nav-link ${
                  isRouteActive('/about') ? 'text-[#9b804e] text-2xl underline underline-offset-8' : ''
                }`}
                to="/about"
              >
                {/* About */}
              </Link>
              <div className="relative group">
                <Link
                  className={`nav-link ${
                    isRouteActive('/rooms') ? 'text-[#9b804e] text-2xl underline underline-offset-8' : ''
                  }`}
                  to="/rooms"
                >
                  Rooms
                </Link>
              <ul className="group dropdown-menu border border-gray-800 w-50 px-10 hidden rounded rounded-2xl absolute py-2 mt-2 space-y-2 bg- group-hover:block">
                <li>
                  <Link className="dropdown-item" to="/rooms/executive-rooms">
                    Executive Rooms
                  </Link>
                </li>
                <hr className="dropdown-divider border border-stone-950 w-[100%]" />
                <li>
                  <Link className="dropdown-item" to="/rooms/deluxe-rooms">
                    Deluxe Rooms
                  </Link>
                </li>
                <hr className="dropdown-divider border border-stone-950 w-[100%]" />
                <li>
                  <Link className="dropdown-item" to="/rooms/luxury-rooms">
                    Luxury Rooms
                  </Link>
                </li>
                <hr className="dropdown-divider border border-stone-950 w-[100%]" />
                <li>
                  <Link className="dropdown-item" to="/rooms/standard-rooms">
                    Standard Rooms
                  </Link>
                </li>
              </ul>
            </div>
            <Link className={`nav-link ${isRouteActive('/reviews') ? 'text-[#9b804e] text-2xl underline underline-offset-8' : 'inherit'}`} target='_blank' to="https://www.tripadvisor.in/Hotel_Review-g297647-d2041217-Reviews-EuroStar_Inn-Khajuraho_Chhatarpur_District_Madhya_Pradesh.html">
              Review Us
            </Link>
            <Link className={`nav-link ${isRouteActive('/contact-us') ? 'text-[#9b804e] text-2xl underline underline-offset-8' : 'inherit'}`} to="/contact-us">
              Contact Us
            </Link>
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

