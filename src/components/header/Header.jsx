import React, { useState,memo } from 'react'
import "./Header.css"
import { IoIosArrowDown } from "react-icons/io";
import navlogo from "../../assets/Header.svg"
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaSun } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { LuDelete } from "react-icons/lu";



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  const toggleDarkMode = () => {
    window.document.body.classList.toggle("dark");
    console.log(1);
    
  };

  return (
    <div className="header mb-32 py-1">
      <div className=' container mx-auto px-5'>
        <nav className="navbar 
         flex items-center justify-between">
          <div className="navbar__logo">
           <NavLink to={""}><img className='navbar__logo' src={navlogo} alt="foto" /></NavLink> 
          </div>
          <div className='border-emerald-300 border-2 bg-white rounded-md search__bag dark:bg-black

	 flex items-center px-5 py-2'>
            <div className='flex gap-1 items-center px-2 text-black	  '>
            <p className='w-28 text-xs text-dark dark:text-white dark:bg-black'>All Categories</p>
            <IoIosArrowDown  className='text-xs'/>
            </div>
            <input className='w-64 text-xl text-black	 dark:text-white dark:bg-black' type="text"  placeholder='Search for items...' />
            <button>
              <FiSearch className='text-4xl' />
            </button>
          </div>
          <div className='flex gap-1 p-2 border h_map  items-center rounded-md bg-white dark:text-white dark:bg-black 

'>
          <FaMapMarkerAlt className=' text-black dark:text-white dark:bg-black  ' />

            <select className='outline-none	 dark:text-white dark:bg-black ' name="" id="">
              <option value="">Your Location</option>
              <option value="">Toshkent</option>
              <option value="">Samarqand</option>
              <option value="">Qashqadaryo</option>
              <option value="">Jizzah</option>
            </select>
            
          </div>
          <div className={`nav__collect ${isMenuOpen ? "show" : ""}  dark:bg-black dark:text-white`}>
            <div onClick={toggleMenu} className="navbar__menu  cursor-pointer text-2xl text-white">
          <LuDelete  className='text-4xl text-right'/>
          </div>
            <ul className="navbar__collection flex gap-4   dark:text-white dark:bg-black p-3 	">
              <NavLink className={" text-black dark:text-white  flex gap-1 items-center"} to={"/wishlist"}>
              <FaRegHeart  className='text-2xl'/><sup className='px-1 py-2 rounded-full mb-3 text-white bg-lime-600'>0</sup>
             <p className='text-xs'> Wishlist</p>
              </NavLink>

              <NavLink className={" text-black dark:text-white  flex gap-0 items-center"} to={"/wishlist"}>
              <IoCartOutline  className='text-2xl'/>
<sup className='px-1 py-2 rounded-full
 mb-3
 text-white bg-lime-600'>0</sup>
     <p className='text-xs'> Card</p>   </NavLink>

              <NavLink className={" text-black dark:text-white  flex gap-1 items-center"} to={"/login"}>
              <FaRegUser className='text-2xl'/>
              <p className='text-xs'> Account</p></NavLink>
            </ul>
          </div>
         
    <div className='flex gap-2 items-center'>
      <button
        onClick={toggleDarkMode}
        className="p-2  text-dark rounded-lg"
      >
<FaSun className='text-dark text-3xl'/>
</button>
          <div onClick={toggleMenu} className="navbar__menu cursor-pointer text-2xl">
          <IoMenu className='text-4xl'/>
          </div>
</div>
        </nav>
      </div>
    </div>
  )
}

export default memo(Header)