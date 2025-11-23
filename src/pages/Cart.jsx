import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';


const Cart = () => {

  const cart  = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);
     const [theme, setTheme] = useState(() => {
            return sessionStorage.getItem("theme") || "light";});
      
          useEffect(() => {
        function updateTheme() {
          setTheme(sessionStorage.getItem("theme"));
        }
      
        window.addEventListener("theme-changed", updateTheme);
      
        return () => window.removeEventListener("theme-changed", updateTheme);
      }, []);

  useEffect(() =>{
    setTotalAmount( cart.reduce( (acc,curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div className={`${ theme === "dark" ? "bg-black" : ""} -translate-y-[2.5rem] h-full w-screen`}>
       <div className= { ` ${ theme === "dark" ? "bg-black" : ""} translate-y-[2.5rem] flex flex-col max-w-6xl mx-auto mt-10 mb-10 ` }>
      {
        cart.length > 0 ? (<div className=' flex flex-col md:flex-row gap-10 justify-center '>
        <div className=''>
          {
            cart.map( (item,index) => {
              return <CartItem key={item.id} item={item} itemIndex={index}>
              </CartItem>
            })
          }
        </div>
        <div className='mt-[6rem] p-5 rounded-lg h-[12rem] w-[20rem] flex flex-col justify-between '>
          <div>
            <div className='text-[#096109] font-bold uppercase text-[1.2rem]'>Your Cart</div>
            <div className='text-[green] mt-[-0.7rem] text-[3rem] uppercase font-bold'>Summary</div>
            <p className=''>
              <span className='font-bold text-gray-700 text-[1.3rem] font-sans'>Total Items: {cart.length}</span>
            </p>
          </div>
          
          <div className='text-gray-700 font-semibold text-lg '>
            <p className=' text-[green] text-[1/1rem] '>Total Amount: {totalAmount}</p>
          </div>

        </div>
        </div>) :
        (<div className=' content-center text-center mt-60 '>
          <h1 className=' text-2xl text-gray-700 font-bold'>Your cart is empty!</h1>
          <Link to={"/"}>
            <button className='mt-[2rem] bg-green-600 rounded px-8 py-3 uppercase font-bold text-white'> Shop Now</button>
          </Link>
        </div>) 
      }
    </div>
    </div>
   
  );
};

export default Cart
