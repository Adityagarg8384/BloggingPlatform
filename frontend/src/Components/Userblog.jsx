import React, { useState } from 'react';


const Userblog = () => {
    const [data, setData] = useState(null);

    return (
      <div className='bg-[#121317] flex flex-col min-h-96'>
        <div className='bg-[rgb(25,118,210)] text-white p-3 text-center text-lg'>
          <h1>User Blogs</h1>
        </div>
        {
          data !== null ?
            <div className='flex justify-center items-center'>
              <h1 className='text-white text-lg'>Error in loading Liked blogs</h1>
            </div> :
            <div className='flex flex-col '>
              {/* {data.map((item, index) => ( */}
              {/* <div key={index}> */}
              {/* Render data here */}
              {/* </div> */}
              {/* ))} */}
              <div className='text-white text-center hover:bg-[#303135] p-2 mt-2 mb-2'>
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
              </div>
            </div>
        }
      </div>
    );
}

export default Userblog;