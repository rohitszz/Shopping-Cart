import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import Product from '../components/Product'
import { FaSearchLocation } from 'react-icons/fa'
import { RiDropdownList } from 'react-icons/ri'

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [category, setCategory] = useState("All");
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [trimCategory, setTrimCategory] = useState("");

    async function fetchProductData() {
        setLoading(true);
        try{
            const res = await fetch(API_URL);
            const data = await res.json();
            setPosts(data);
            setFilteredPosts(data);
        }
        catch(error){
            setPosts([]);
        }
        setLoading(false);
    }

    useEffect( () => {
        fetchProductData();
    }, [])

      useEffect(() => {
    let filtered = posts;

    if (category !== "All") {
      filtered = filtered.filter((item) => item.category === category);
    }

    if (trimCategory.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(trimCategory.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [category, trimCategory]);

  return (
    <div>
    <div className='flex items-center justify-center my-[2px] '>
    <div className='flex justify-start'>
    <select value={category} onChange={(e) => setCategory(e.target.value)} className='p-2 -translate-x-[33.5rem] rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white outline-none cursor-pointer w-full'>
        <option value="All">All Products</option>
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
        <option value="electronics">electronics</option>
        <option value="jewelery">jewelery</option>
    </select>
    </div>

    <div className='flex items-center justify-center'>
         <FaSearchLocation className='translate-x-[-1.2rem] text-[#171616] text-[1.2rem]'/>
    <input onChange={(e) => setTrimCategory(e.target.value)} placeholder='select category' className='h-[2rem] rounded-full content-center px-[2rem] bg-[#3c3939] text-[white]'></input>
    
    </div>

    </div>
    {
        loading ?  <div className=' w-full h-[80vh] flex justify-center items-center'>
          <Spinner/>
        </div> : 
        posts.length > 0 ?
        ( <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
            {filteredPosts.map( (post) => (
                <Product key = {post.id} post={post}></Product>
            ))
            }
            </div>
        ) :
        <div className=' w-full h-[80vh] flex justify-center items-center'>
          No Data Found
        </div>
    }


    </div>
  )
}

export default Home
