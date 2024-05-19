import React, { useState } from 'react';
import empty from "../assets/empty.png"

const SavedBlog = () => {
    const [data, setData] = useState(null);

    return (
      <div className='bg-[#121317] flex flex-col min-h-28 rounded-lg'>
        <div className='bg-[rgb(25,118,210)] text-white p-3 text-center text-lg'>
          <h1>Saved Blogs</h1>
        </div>
        {
        data && data.length > 0 ?
            <div className='flex flex-col '>
            {
              data.map((item, index) => (
                  <div key={index} className='text-white text-center hover:bg-[#303135] p-2 py-4'>
                      {item.title}
                  </div>
              ))
            }
          </div> 
          :
          <div className='flex flex-col gap-2 justify-center items-center w-full min-h-32'>
            <img src={empty} className='bg-transparent w-[15%] aspect-square' />
            <h1 className='text-white text-lg'>No Saved blogs</h1>
          </div>
      }
      </div>
    );
}

export default SavedBlog

{/* <div className='text-white text-center hover:bg-[#303135] p-2 mt-2 mb-2'>
                <h>Title</h>
              </div>
              <div className='text-white text-center hover:bg-[#303135] p-2 mt-2 mb-2'>
                <h>newTitle</h>
              </div>
              <div className='text-white text-center hover:bg-[#303135] p-2 mt-2 mb-2'>
                <h>newTitle</h>
              </div>
              <div className='text-white text-center hover:bg-[#303135] p-2 mt-2 mb-2'>
                <h>newTitle</h>
              </div>
              <div className='text-white text-center hover:bg-[#303135] p-2 mt-2 mb-2'>
                <h>newTitle</h>
              </div>
              <div className='text-white text-center hover:bg-[#303135] p-2 mt-2 mb-2'>
                <h>newTitle</h>
              </div>
              <div className='text-white text-center hover:bg-[#303135] p-2 mt-2 mb-2'>
                <h>newTitle</h>
              </div>
              <div className='text-white text-center hover:bg-[#303135] p-2 mt-2 mb-2'>
                <h>newTitle</h>
              </div>
              <div className='text-white text-center hover:bg-[#303135] p-2 mt-2 mb-2'>
                <h>newTitle</h>
              </div>
              <div className='text-white text-center hover:bg-[#303135] p-2 mt-2 mb-2'>
                <h>newTitle</h>
              </div> */}