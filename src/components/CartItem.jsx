import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-toastify';
import "./CartItem.css"
import { useState, useEffect } from 'react';

const CartItem = ({item, itemIndex}) => {

    const dispatch = useDispatch();
    const [theme, setTheme] = useState(() => {
          return sessionStorage.getItem("theme") || "light";});
    
        useEffect(() => {
      function updateTheme() {
        setTheme(sessionStorage.getItem("theme"));
      }
    
      window.addEventListener("theme-changed", updateTheme);
    
      return () => window.removeEventListener("theme-changed", updateTheme);
    }, []);

    const removeFromCart = () =>{
        dispatch(remove(item.id));
        toast.success("Item Removed");
    }

  return (
    <div className= ""> 
    <div className= { ` ${ theme === "dark" ? "shadow-lg shadow-white": "shadow-lg " } flex flex-row gap-10 m-5 p-5  rounded-lg w-[45rem]` }>
      
      <div className=''><div className=' h-[13rem] w-[11.5rem] '>
        <img className='image ' src={item.image}/>
      </div>
      </div>
      <div className=''>
        <h1 className={ `${ theme === "dark" ? "text-[#ffffff]" : "text-gray-700"} text-lg font-bold` }>{item.title}</h1>
        <h1 className= { ` ${ theme === "dark" ? "text-[#ffffffa7]" : "text-gray-700"} mt-[2rem] ` }>{item.description.split(" ").slice(0,40).join(" ")+"..."}</h1>
        <div className={ ` flex flex-row justify-between mt-10 items-center` }>
           <div className=' '>
            <p className='text-[#1dac1d] font-extrabold '>${item.price}</p>
        </div>
        <div className=' ' onClick={removeFromCart}>
            <MdDelete className='text-[2.3rem] p-2.5 text-red-800 bg-red-200 hover:bg-red-400 hover:text-white cursor-pointer rounded-full'/>
        </div>
        </div>
       
      </div>

    </div>
      
    </div>
  )
}

export default CartItem
