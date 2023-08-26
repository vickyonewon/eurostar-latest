import React from 'react'
import { useSelector } from 'react-redux';


const Contact = () => {
  const count=useSelector((state: any)=> state.counter.value);
  return (
    <div>Contact: {count}</div>
  )
}

export default Contact;
