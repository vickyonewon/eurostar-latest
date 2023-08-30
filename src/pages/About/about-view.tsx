import React from 'react';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import BedIcon from '@mui/icons-material/Bed';
import ParkIcon from '@mui/icons-material/Park';
import PoolIcon from '@mui/icons-material/Pool';
import CheckIcon from '@mui/icons-material/Check';
import Navbar from '../../components/navbar/navbar-view';


  const enjoyList=[
    {
      id: 1,
      image: <FastfoodIcon style={{fontSize: '4rem'}} />,
      title: 'Delicious Foods',
      content: `Indulge in Culinary Excellence: Savor Every Bite at Our Hotel's Delectable Dining Destinations.`,
    },
    {
      id: 2,
      image: <PoolIcon style={{fontSize: '4rem'}} />,
      title: 'Swimming Pool',
      content: `Dive into Tranquility: Refresh and Recharge at Our Inviting Hotel Swimming Pool.`,
    },
    {
      id: 3,
      image: <BedIcon style={{fontSize: '4rem'}} />,
      title: 'Double Beds',
      content: `Double the Comfort: Experience a Relaxing Stay in our Spacious Rooms with Cozy Double Beds.`,
    },
    {
      id: 4,
      image: <ParkIcon style={{fontSize: '4rem'}} />,
      title: 'Playing Park',
      content: `Unleash Fun and Adventure: Enjoy Boundless Joy in Our Exciting and Safe Playing Park.`,
    },
  ];
  
  const facilities=[
    "Choice of elegantly furnished air-conditioned and air-cooled rooms.",
    "Wifi Facility available.",
    "Attached bath with running hot and cold water.",
    "Telephone and LCD TV with cable in each room.",
    "24-hours room service.",
    "Laundry and dry cleaning service.",
    "Doctor on call.",
    "Ample car parking facility.",
    "Airport transfers.",
    "Tour and Travels Information.",
    "Rent A Car.",
    "International & Domestic ticketing.",
    "Package tours.",
    "Foreign exchange facility.",
    "Reconfirmation of tickets.",
    "Hotel booking throughout India.",
    "Cable LCD T.V.",
    "Airport/Taxi assistance facility.",
    "Morning yoga classes and massage facility.",
    "Wake up call services, fax and Xerox.",
    "Conference room.",
    "Reception 24/7.",
    "Free parking."
  ];
  
  const About: React.FC = () => {
    return (
      <div>
        <Navbar bgColor='#f4f2f1' textColor='black' />
      <div className="bg-gray-100">
        
        <div className="text-center bg-cover bg-center bg-no-repeat h-96 flex md:flex-col flex-row justify-center items-center text-gray-800" style={{ backgroundImage: `url('/assets/gold_bg.webp')` }}>
          <h1 className="text-6xl font-semibold mb-4 relative">About Us</h1>
        </div>
        <div className="sm:flex p-8">
          <div className="flex-1">
            <p className="text-2xl pl-5 font-semibold mb-4">BEST AMENITIES</p>
            <h1 className="text-6xl p-3 font-semibold mb-8 leading-relaxed">
              Enjoy Your Vacation In{' '}
              <span className="text-[#9b804e]">Our</span> Hotel And Get Lots Of Fun, Happiness{' '}
              <span className="text-[#9b804e]">And</span> Great{' '}
              <span className="text-[#9b804e]">Pleasure</span>
            </h1>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-8">
          {enjoyList.map((enj) => (
            <div key={enj.id} className="flex flex-col items-center">
              <div className="text-7xl mb-4 ">{enj.image}</div>
              <div className="text-2xl font-semibold mb-2">{enj.title}</div>
              <div className="text-base">{enj.content}</div>
            </div>
          ))}
        </div>
        </div>
        <div className="text-center p-8">
          <h1 className="text-4xl font-semibold mb-4">HOTEL FACILITIES</h1>
          <div className="w-1/5 h-2 bg-brown mx-auto mb-6"></div>
          <div className="w-1/2 mx-auto text-left space-y-4">
            {facilities.map((fac) => (
              <div key={fac} className="flex items-center">
                <CheckIcon className="w-6 h-6 text-brown mr-2" />
                <span className="text-lg">{fac}</span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    );
  };
  
  export default About;
