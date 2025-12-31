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

 <div className="font-extrabold text-4xl bg-gradient-to-r  from-purple-600 via-rose-400 to-purple-400 bg-clip-text text-transparent  items-center text-center ">
              Knowledge<span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text ">Nest</span>
            </div>
      {/* Desktop */}
      <div className='mx-6'>
        <ul className=' hidden md:flex space-x-6 '>
       <Link to="/" className='hover:text-blue-500 text-black font-serif'>HOME</Link>
        <Link to="/blogs" className='hover:text-blue-500 text-black font-serif'>BLOGS</Link>
         <Link to="/creators" className='hover:text-blue-500 text-black font-serif'>CREATORS</Link>
          <Link to="/about" className='hover:text-blue-500 text-black font-serif'>ABOUT</Link>
           <Link to="/contact" className='hover:text-blue-500 text-black font-serif'>CONTACT</Link>
            
        </ul>
        <div className='md:hidden' onClick={() => 
          setShow(!show)
        }>{show? <IoCloseSharp size = {24}/>:< AiOutlineMenu size={24} />  }</div>
      </div>
      <div className=' hidden md:flex space-x-2'>
        <Link to="/dashboard" className='bg-purple-500 font-serif text-white hover:bg-purple-900 px-3 py-2  duration-300 rounded-md'> DASHBOARD</Link>
        <Link to="/login" className='bg-indigo-500 px-4 py-2  text-white font-serif hover:bg-indigo-900 focus:text-white  rounded-md'>LOGIN</Link>
      </div>
    </div>
    {/* Mobile navbar */}
    {show && (
      <div className=' p-4 fixed top-14 left-0 w-full bg-gray-900 text-white z-50 shadow-lg'>
        <ul className='flex flex-col items-center justify-center space-y-3  md:hidden text-xl'>
       <Link to="/" onClick={()=> setShow(!show)} smooth="true" duration={500} offset={-70} activeClass="active" className='hover:text-purple-600'>HOME</Link>
        <Link to="/blogs" onClick={()=> setShow(!show)} smooth="true" duration={500} offset={-70} activeClass="active" className='hover:text-indigo-600'>BLOGS</Link>
         <Link to="/creators" onClick={()=> setShow(!show)} smooth="true" duration={500} offset={-70} activeClass="active" className='hover:text-green-600'>CREATORS</Link>
          <Link to="/about" onClick={()=> setShow(!show)} smooth="true" duration={500} offset={-70} activeClass="active" className='hover:text-yellow-600'>ABOUT</Link>
           <Link to="/contact" onClick={()=> setShow(!show)} smooth="true" duration={500} offset={-70} activeClass="active" className='hover:text-red-600'>CONTACT</Link>
            
        </ul>
      </div>
    )}
    </nav>
   </>
  )
}

export default Navbar








