import React from 'react'
<<<<<<< HEAD
// import {FaSearch} from "react-icons/fa";
import {Link} from 'react-router-dom';
function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
    <Link to="/">
    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
      <spam className="text-slate-500">Mayank</spam>
      <span className='text-slate-700'>Estate</span>
    </h1>
    </Link>
    <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
      <input type='text' placeholder='Search...' 
      className='bg-transparent focus:outline-none w-24 sm:w-64 '/>
       {/* <FaSearch className="text-slate-600"/>  */}
    </form>
    <ul className='text gap-4'>
    <Link to="/">
      <li className='hidden sm:inline text-state-700 hover:underline'>Home</li>
      </Link>
      <Link to="/about">
      <li className='hidden sm:inline text-state-700 hover:underline'>About</li>
      </Link>
      <Link to="/sign-in">
      <li className=' text-state-700 hover:underline'>Sign in</li>
      </Link>
    </ul>
    </div>
    </header>
  )
}

export default Header
=======
import {Link} from "react-router-dom";
function Header() {
  return (
    <div
      className="bg-slate-200">
      <div className='flex justify-between items-center
      max-w-6xl mx-auto p-3'>
        <Link to="/">
        <h1 className='font-bold'>Auth App</h1>
        </Link>
        <ul className='flex gap-4'>
            <Link>
            <li>Home</li>
            </Link>
            <Link to ="/about">
            <li>About</li>
            </Link>
            <Link to ="/about">
            <li>Sign In</li>
            </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header
>>>>>>> 99d6c343f3f8357fd5d93e6e9431463143a9d330
