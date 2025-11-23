import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaBookSkull } from 'react-icons/fa6';
import { FaCertificate } from 'react-icons/fa6';
import { useEffect } from 'react';

const Navbar = ({theme, setTheme}) => {
    const cart = useSelector( (state) => state.cart);
    const wishlist = useSelector( (state) => state.wishlist);

    function changeHandler(){
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        sessionStorage.setItem("theme", newTheme);
        window.dispatchEvent(new Event("theme-changed"));
    }
  return (
    <div>
    <div className='flex flex-row justify-between items-center h-20 max-w-6xl mx-auto '>
    <NavLink to="/">
    <div className='ml-5 '>
        <img src='https://codehelp-shopping-cart.netlify.app/logo.png' className='h-14'/>
    </div>
    </NavLink>

    <NavLink to="/wishlist">
      <FaBookSkull className='text-[white] text-2xl -translate-x-2'/>
      {
        wishlist.length > 0  && <span  className='absolute top-4 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{wishlist.length}</span>
      }
    </NavLink>
    <FaCertificate onClick={changeHandler} className='text-[white] text-2xl '/>
    <div className='text-white flex items-center font-medium mr-5 space-x-6'>
    <NavLink to="/">
         <p>Home</p>
    </NavLink>
    <NavLink to="/cart">
    <div className='relative '>
         <FaShoppingCart className='text-2xl'/>
         {
            cart.length > 0  && <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>  
         }
         
    </div>
    </NavLink>
       
    </div>
    </div>
    </div>
  )
}

export default Navbar
