import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserData from '../Components/UserData';
import LikedBlog from '../Components/LikedBlog';
import Userblog from '../Components/Userblog';
import SavedBlog from '../Components/SavedBlog';
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import fakelogo from '../assets/bulb-idea.png'
import "../index.css";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faStarHalfAlt, faStar as regularStar, faEdit } from '@fortawesome/free-solid-svg-icons';
import { ThumbsUp } from 'lucide-react';

const Profile = () => {
    const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;
    const [profile, setProfile] = useState(
        {
            username: "Aryan Satija",
            email : "aryansatija2003@gmail.com",
            password: "smile",
            profilepic: "",
            age: 18,
            blog: [{
                username: "Aryan Satija",
                title: "The Final Frontier: Exploring the Wonders of Space",
                subtitle: "Space, the final frontier. This vast, seemingly infinite expanse has fascinated humankind for centuries, inspiring countless stories, theories, and scientific discoveries. ", 
                data: "Space is an awe-inspiring place, filled with celestial bodies that spark our imagination and curiosity. From the fiery glow of distant stars to the majestic rings of Saturn, the cosmos is a treasure trove of wonders. Here are a few highlights:",
                tags: ["space", "cosmos"],
                likes: 5
            },
            {
                username: "Aryan Satija",
                title: "The Final Frontier: Exploring the Wonders of Space",
                subtitle: "Space, the final frontier. This vast, seemingly infinite expanse has fascinated humankind for centuries, inspiring countless stories, theories, and scientific discoveries. ", 
                data: "Space is an awe-inspiring place, filled with celestial bodies that spark our imagination and curiosity. From the fiery glow of distant stars to the majestic rings of Saturn, the cosmos is a treasure trove of wonders. Here are a few highlights:",
                tags: ["space", "cosmos"],
                likes: 5
            },
            {
                username: "Aryan Satija",
                title: "The Final Frontier: Exploring the Wonders of Space",
                subtitle: "Space, the final frontier. This vast, seemingly infinite expanse has fascinated humankind for centuries, inspiring countless stories, theories, and scientific discoveries. ", 
                data: "Space is an awe-inspiring place, filled with celestial bodies that spark our imagination and curiosity. From the fiery glow of distant stars to the majestic rings of Saturn, the cosmos is a treasure trove of wonders. Here are a few highlights:",
                tags: ["space", "cosmos"],
                likes: 5
            },
            {
                username: "Aryan Satija",
                title: "The Final Frontier: Exploring the Wonders of Space",
                subtitle: "Space, the final frontier. This vast, seemingly infinite expanse has fascinated humankind for centuries, inspiring countless stories, theories, and scientific discoveries. ", 
                data: "Space is an awe-inspiring place, filled with celestial bodies that spark our imagination and curiosity. From the fiery glow of distant stars to the majestic rings of Saturn, the cosmos is a treasure trove of wonders. Here are a few highlights:",
                tags: ["space", "cosmos"],
                likes: 5
            },{
                username: "Aryan Satija",
                title: "The Final Frontier: Exploring the Wonders of Space",
                subtitle: "Space, the final frontier. This vast, seemingly infinite expanse has fascinated humankind for centuries, inspiring countless stories, theories, and scientific discoveries. ", 
                data: "Space is an awe-inspiring place, filled with celestial bodies that spark our imagination and curiosity. From the fiery glow of distant stars to the majestic rings of Saturn, the cosmos is a treasure trove of wonders. Here are a few highlights:",
                tags: ["space", "cosmos"],
                likes: 5
            }

        ],
            saveblog: [],
            likedblog: []
        }
    );
    const [rating, setRating] = useState(4)
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(<FontAwesomeIcon key={i} icon={solidStar} className="text-yellow-400" />);
            } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
                stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} className="text-yellow-400" />);
            } else {
                stars.push(<FontAwesomeIcon key={i} icon={regularStar}  />);
            }
        }
        return stars;
    };
    // const token = window.localStorage.getItem("token");
    // useEffect(() =>{
    //     axios.get(`${SERVER_URL}/getuser`,{
    //         headers : {
    //             "Authorization" : token
    //         }
    //     }).then(data => {
    //         setProfile(data.data.data)
    //         console.log(data.data)
    //     }).catch(err => {
    //         alert("Error occured while getting profile!")
    //     })
    // },[])
    return (
        <div className='flex flex-col bg-[#1d1e20] h-grow'>
            <ResponsiveAppBar/>
            {!profile ? (
                <div className='flex justify-start items-start text-white h-full text-2xl '>Error in loading Profile page</div>
            ) : (
                <div className='w-full flex flex-col justify-center h-full bg-white p-6'>
                    <div className='bg-slate-50/10 shadow-sm shadow-slate-500 w-full min-h-[50vh] p-16 flex flex-col items-center justify-center'>
                        <div className='flex flex-row w-full items-center justify-between gap-4'>
                            <div className='flex flex-col items-center justify-center gap-4'>
                                <div>
                                    <img src={fakelogo} width={200} height={200} className='rounded-full shadow-md shadow-slate-500'/>
                                </div>
                                <div className='flex flex-row items-center justify-between gap-4'>
                                    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Add New</button>
                                    <button className='text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Delete</button>
                                </div>
                                <div className='flex flex-col items-center justify-center gap-2'>
                                    <p className='text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-400 bg-clip-text text-transparent inline-block'>
                                        {profile.username}
                                    </p>
                                    <p className='text-md font-bold bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent inline-block'>
                                        {
                                            profile.institution ?? "Netaji Subhas University Of Technology" // add institution name in the backend
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center gap-4'>
                                <div className='flex flex-row items-center gap-4 justify-between'>
                                    <div className='bg-blue-500 shadow-lg shadow-slate-500 p-4 backdrop-blur-md w-[10rem] text-white rounded-md flex flex-col item-center gap-4 justify-center'>
                                        <p className='text-center text-xl font-bold'>
                                            Total Blogs
                                        </p>
                                        <p className='text-center'>
                                            {
                                                profile?.blog.length ?? 0
                                            }
                                        </p>
                                    </div>
                                    <div className='bg-blue-500 p-4 w-[10rem] shadow-lg shadow-slate-500 backdrop-blur-md text-white rounded-md flex flex-col item-center gap-4 justify-center'>
                                        <p className='text-center text-xl font-bold'>
                                            Saved Blogs
                                        </p>
                                        <p className='text-center'>
                                            {
                                                profile?.saveblog.length ?? 0
                                            }
                                        </p>
                                    </div>
                                    <div className='bg-blue-500 shadow-lg shadow-slate-500 p-4 w-[10rem] backdrop-blur-md text-white rounded-md flex flex-col item-center gap-4 justify-center'>
                                        <p className='text-center text-xl font-bold'>
                                            Liked Blogs
                                        </p>
                                        <p className='text-center'>
                                            {
                                                profile?.likedblog.length ?? 0
                                            }
                                        </p>
                                    </div>
                                    <div className='bg-blue-500 shadow-lg shadow-slate-500 p-4 w-[10rem] backdrop-blur-md text-white rounded-md flex flex-col item-center justify-center'>
                                        <p className='text-center text-xl font-bold'>
                                            Rating
                                        </p>
                                        <p className='text-center'>
                                            {
                                                rating 
                                            }
                                            <div className="flex gap-1 ml-4">{renderStars()}</div>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full">Create New Blog</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className='flex flex-col items-center'>
                        <div className='text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-400 bg-clip-text text-transparent inline-block'>User Blogs:</div>
                    </div>
                    <div className='mt-4 flex flex-row flex-wrap gap-4 items-center justify-center'>
                    {
                        profile?.blog.map((user_blog)=>{
                            return (
                                <div className='w-[380px] flex flex-col gap-4 border-2 border-slate-300 p-4 rounded-md shadow-md shadow-slate-400'>
                                    <div className='font-bold bg-gradient-to-r from-slate-800 to-slate-400 bg-clip-text text-transparent inline-block'>
                                        {
                                            user_blog.title
                                        }
                                    </div>
                                    <div className='font-semibold text-slate-600'>
                                        {
                                            user_blog.subtitle
                                        }
                                    </div>
                                    <div className='flex flex-col md:flex-row  flex-wrap w-full gap-2 items-center'>
                                        {
                                            user_blog.tags.map((tag)=>{
                                                return (<span className='bg-blue-500 border-2 border-blue-700 cursor-pointer hover:scale-105 duration-200 p-2 rounded-full w-[5rem] flex items-center justify-center text-slate-200'>{
                                                    tag
                                                }</span>)
                                            })
                                        }
                                    </div>
                                    <div className='flex flex-row items-center justify-start gap-2 '>
                                        <p className='font-bold text-slate-600'>
                                        {
                                            user_blog.likes
                                        }
                                        </p>
                                        <ThumbsUp className='text-blue-600'/>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
