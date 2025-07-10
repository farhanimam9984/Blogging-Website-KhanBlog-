import React, { useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const {user, blogs} = useAuth();
  const [show, setShow] = useState(false);
  console.log(blogs);
  return (
   <>
   
    <nav className=' shadow-xl h-16 overflow-hidden py-3 px-4 fixed w-full top-0  z-50 bg-white'>

      <div className='flex justify-between items-center container mx-auto '>

      <div className='font-semibold text-xl text-green-500'> Khan <span className='text-blue-500'>Blog</span></div>
      {/* Desktop */}
      <div className='mx-6'>
        <ul className=' hidden md:flex space-x-6'>
       <Link to="/" className='hover:text-blue-500 text-black font-semibold'>HOME</Link>
        <Link to="/blogs" className='hover:text-blue-500 text-black font-semibold'>BLOGS</Link>
         <Link to="/creators" className='hover:text-blue-500 text-black font-semibold'>CREATORS</Link>
          <Link to="/about" className='hover:text-blue-500 text-black font-semibold'>ABOUT</Link>
           <Link to="/contact" className='hover:text-blue-500 text-black font-semibold'>CONTACT</Link>
            
        </ul>
        <div className='md:hidden' onClick={() => 
          setShow(!show)
        }>{show? <IoCloseSharp size = {24}/>:< AiOutlineMenu size={24} />  }</div>
      </div>
      <div className=' hidden md:flex space-x-2'>
        <Link to="/dashboard" className='bg-green-500  font-semibold text-black hover:bg-blue-500 px-3 py-2  duration-300 rounded-md'> DASHBOARD</Link>
        <Link to="/login" className='bg-orange-500 px-4 py-2  text-black font-semibold hover:bg-green-500  rounded-md'>LOGIN</Link>
      </div>
    </div>
    {/* Mobile navbar */}
    {show && (
      <div className='bg-white'>
        <ul className='flex flex-col items-center justify-center space-y-3  md:hidden text-xl'>
       <Link to="/" onClick={()=> setShow(!show)} smooth="true" duration={500} offset={-70} activeClass="active" className='hover:text-green-600'>HOME</Link>
        <Link to="/blogs" onClick={()=> setShow(!show)} smooth="true" duration={500} offset={-70} activeClass="active" className='hover:text-green-600'>BLOGS</Link>
         <Link to="/creators" onClick={()=> setShow(!show)} smooth="true" duration={500} offset={-70} activeClass="active" className='hover:text-green-600'>CREATORS</Link>
          <Link to="/about" onClick={()=> setShow(!show)} smooth="true" duration={500} offset={-70} activeClass="active" className='hover:text-green-600'>ABOUT</Link>
           <Link to="/contact" onClick={()=> setShow(!show)} smooth="true" duration={500} offset={-70} activeClass="active" className='hover:text-green-600'>CONTACT</Link>
            
        </ul>
      </div>
    )}
    </nav>
   </>
  )
}

export default Navbar








