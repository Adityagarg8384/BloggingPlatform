import React, { useState } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoIosSend } from "react-icons/io";

const Assistant = ({ state, setState }) => {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(''); // State to manage error messages
    const pyth_url  = import.meta.env.VITE_REACT_APP_PYTHON_URL;
    const handleSubmit = async () => {
        if (message.trim() !== '') {
            let arr = data;
            arr.splice(0,0,{message,sentBy:"user"})
            // console.log(arr);    
            setData(arr);
            setMessage('');
            try {
                
                const response = await fetch(`${pyth_url}/blog_assistant`, {
                    method: "POST",
                    headers: {
                        Authorization: "Bearer your-jwt-token", // include JWT in the request header
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ query : message }), // Make sure to wrap message in an object
                });

                // if (!response.ok) {
                //     throw new Error('Network response was not ok');
                // }

                const res = await response.json();
                console.log(res)
                let arr2 = data;
                arr2.splice(0,0,{message:res.response,sentBy:"ai"})
                setData(arr2); 
                console.log(data)  
                setError(''); // Clear any previous error
            } catch (err) {
                console.error('Fetch error:', err);
                setError('Failed to send the message. Please try again.'); // Set error message
                setTimeout(()=>{
                    setError('');
                }, 5000);
            }
        }
    };

    return (
        <div>
            <div className={`bg-red-400 text-xl fixed right-10 bottom-10 rounded-lg duration-200 ease-in-out flex justify-between items-start z-15 ${state ? "w-[30%] h-[80%]" : 'w-[0%] h-[0%]'}`}>
                {state && (
                    <div className='flex flex-col h-full w-full'>
                        <div className='flex flex-row justify-between items-center text-lg bg-[#1d1e20] text-white w-full p-4'>
                            <div>Assistant</div>
                            <button onClick={() => setState(!state)}><IoMdCloseCircleOutline size={25} /></button>
                        </div>
                        <div className='flex-grow bg-[#121317] overflow-auto flex flex-col-reverse justify-start p-2 gap-y-2'>
                            {data.length > 0 ? (
                                data.map((msg, index) => (
                                    <div key={index} className={`flex flex-row ${msg.sentBy === "user" ? "justify-end" : "justify-start"}`}>
                                        <div className='text-white bg-[#303135] px-4 py-2 rounded-3xl'>
                                            {msg.message}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className='flex flex-row justify-center '>
                                    <div className='text-white bg-[#303135] px-4 py-2 rounded-3xl'>
                                        No messages yet
                                    </div>
                                </div>
                            )}
                        </div>
                        {error && (
                            <div className='text-red-500 text-center p-2'>
                                {error}
                            </div>
                        )}
                        <div className='flex flex-row justify-between w-full bg-[#1d1e20] p-2 px-4'>
                            <input
                                placeholder='Type Something'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className='bg-[#303135] py-4 px-2 h-10 w-11/12 rounded-lg text-white'
                            />
                            <button className='top-0 right-0 mt-2 hover:bg-[#303135]' onClick={handleSubmit}>
                                <IoIosSend className='text-white w-6 h-6' />
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <button className={`rounded-full bg-blue-300 fixed right-10 bottom-10 duration-200 ease-in-out ${!state ? "w-14 h-14" : "w-0 h-0"}`} onClick={() => setState(!state)}>
                {/* Optional: Add an icon inside this button */}
            </button>
        </div>
    );
};

export default Assistant;
