import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserData from '../Components/UserData';
import LikedBlog from '../Components/LikedBlog';
import Userblog from '../Components/Userblog';
import SavedBlog from '../Components/SavedBlog';
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import "../index.css";
import axios from "axios";
const Profile = () => {
    const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL;
    const [profile, setProfile] = useState(null);
    const token = window.localStorage.getItem("token");
    useEffect(() =>{
        axios.get(`${SERVER_URL}/getuser`,{
            headers : {
                "Authorization" : token
            }
        }).then(data => {
            setProfile(data.data.data)
            console.log(data.data)
        }).catch(err => {
            alert("Error occured while getting profile!")
        })
    },[])
    return (
        <div className='flex flex-col bg-[#1d1e20] h-grow'>
            <ResponsiveAppBar/>
            {!profile ? (
                <div className='flex justify-start items-start text-white h-full text-2xl '>Error in loading Profile page</div>
            ) : (
                <div className='w-full flex flex-col justify-center h-full'>
                    <div className='w-full flex flex-row justify-center mt-16 max-sm:flex-col max-sm:items-center max-sm:justify-around'>
                        <div className='UserProfile flex justify-center items-start w-1/2 '>
                            <div className="max-lg:text-center lg:w-80 lg:h-80 w-40 h-40 rounded-full overflow-hidden">
                                {
                                    profile.profilepic ? 
                                    <img src={profile.profilepic} alt="User Image" className="w-full h-full object-cover" />
                                    : <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Placeholder Image" className="w-full h-full object-cover" />
                                }
                            </div>
                        </div>
                        <div className='UserData min-w-[200px] scrollbar flex items-start w-1/3 h-72 bg-[#121317] rounded-lg'>
                            <UserData data={profile} />
                        </div>
                    </div>
                    <div className='Blogdetails flex max-lg:flex-col justify-center mt-10 w-full'>
                        <div className='w-1/2 gap-10 max-lg:w-full flex flex-col items-center justify-center'>
                            <div className='w-3/4 Userblog scrollbar h-48 overflow-auto rounded-lg'>
                                <LikedBlog data={profile.likedblog}/>
                            </div>
                            <div className='Savedblog w-3/4 scrollbar h-48 overflow-auto rounded-lg'>
                                <SavedBlog data={profile.saveblog} />
                            </div>
                        </div>
                        <div className='scrollbar w-1/2 gap-10 max-lg:w-full flex flex-col items-center justify-center rounded-lg'>
                            <Userblog data={profile.blog} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
