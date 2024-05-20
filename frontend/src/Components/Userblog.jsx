import React, { useState } from 'react';
import empty from "../assets/empty.png"
import{Link} from "react-router-dom";

const Userblog = ({data}) => {
    
    return (
      <div className='bg-[#121317] flex flex-col min-h-96 w-3/4 m-10 rounded-lg'>
        <div className='bg-[rgb(25,118,210)] text-white p-3 text-center text-lg rounded-t-lg'>
          <h1>User Blogs</h1>
        </div>
        {
        data && data.length > 0 ?
          <div className='flex flex-col '>
            {
              data.map((item, index) => (
                  <Link to={`/blog/${item._id}`} key={index} className='text-white text-center hover:bg-[#303135] p-2 py-4'>
                      {item.title}
                  </Link>
              ))
            }
          </div> 
          :
          <div className='flex flex-col gap-10 justify-center items-center w-full min-h-96'>
            <img src={empty} className='bg-transparent w-[40%] aspect-square' />
            <h1 className='text-white text-lg'>No User blogs</h1>
          </div>
      }
      </div>
    );
}

export default Userblog;