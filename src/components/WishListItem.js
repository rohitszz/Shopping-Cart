import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/Slices/WishlistSlice';
import { toast } from 'react-toastify';
import "./CartItem.css"
import { add } from '../redux/Slices/CartSlice';
import { useState, useEffect } from 'react';

const WishListItem = ({item, itemIndex}) => {

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

    const removeFromWishList = () =>{
        dispatch(removeFromWishlist(item.id));
        toast.success("Item Removed");
    }

    const removeFromWishListAddToCart = () => {
      dispatch(removeFromWishlist(item.id));
      dispatch(add(item));
    }
    
    

  return (
    <div className=' '>
   <div className= { ` ${ theme === "dark" ? "shadow-lg shadow-white": "shadow-lg " } flex flex-row gap-10 m-5 p-5  rounded-lg w-[45rem]` }>
    
      
      <div className=''><div className=' h-[13rem] w-[11.5rem] '>
        <img className='image ' src={item.image}/>
      </div>
      </div>
      <div className=''>
        <h1 className={ `${ theme === "dark" ? "text-[#ffffff]" : "text-gray-700"} text-lg font-bold` }>{item.title}</h1>
        <h1 className= { ` ${ theme === "dark" ? "text-[#ffffffa7]" : "text-gray-700"} mt-[2rem] ` }>{item.description.split(" ").slice(0,40).join(" ")+"..."}</h1>
        <div className='flex flex-row justify-between mt-10 items-center'>
           <div className=' '>
            <p className='text-[#1dac1d] font-extrabold '>${item.price}</p>
        </div>
        <div >
          <button onClick={removeFromWishListAddToCart} className='flex text-[0.75rem] items-center text-center justify-center text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'>
            Add to Cart
          </button>
        </div>
        <div className=' ' onClick={removeFromWishList}>
            <MdDelete className='text-[2.3rem] p-2.5 text-red-800 bg-red-200 hover:bg-red-400 hover:text-white cursor-pointer rounded-full'/>
        </div>
        </div>
       
      </div>

    </div>
      
    </div>
  )
}

export default WishListItem
