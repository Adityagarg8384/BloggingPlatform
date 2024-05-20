import React, { useState } from 'react';
import empty from "../assets/empty.png"
import{Link} from "react-router-dom";
const LikedBlog = ({data}) => {
  console.log("in",data)
  return (
    <div className='bg-[#121317] flex flex-col min-h-48 '>
      <div className='bg-[rgb(25,118,210)] text-white p-3 text-center text-lg'>
        <h1>Liked Blogs</h1>
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
          <div className='flex flex-col gap-2 justify-center items-center w-full min-h-32'>
            <img src={empty} className='bg-transparent w-[15%] aspect-square' />
            <h1 className='text-white text-lg'>No Liked blogs</h1>
          </div>
      }
    </div>
  );
};

export default LikedBlog;

{/* <div className='text-white text-center hover:bg-[#303135] p-2 mt-2 mb-2'>
  <h>Title</h>
</div>
<div className='text-white text-center hover:bg-[#303135] p-2 mt-2 mb-2'>
  <h>newTitle</h>
</div> */} 