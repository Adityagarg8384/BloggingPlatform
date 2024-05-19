import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import UserData from '../Components/UserData';
import LikedBlog from '../Components/LikedBlog';
import Userblog from '../Components/Userblog';
import SavedBlog from '../Components/SavedBlog';

const Profile = () => {
    const { username } = useParams();
    const [loaded, setLoaded] = useState(null);

    return (
        <div className='flex flex-col bg-[#1d1e20] h-grow'>
            {loaded !== null ? (
                <div className='flex justify-start items-start text-white h-full text-2xl '>Error in loading Profile page</div>
            ) : (
                <div className='flex flex-col justify-start item:start h-full'>
                    <div className='flex flex-row justify-start mt-16 ml-24'>
                        <div className='UserProfile flex justify-center items-start'>
                            <div className="w-80 h-80 rounded-full overflow-hidden">
                                <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Placeholder Image" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className='UserData flex justify-between items-start ml-36 w-2/4 h-72 bg-[#121317] rounded-lg'>
                            <UserData />
                        </div>
                    </div>
                    <div className='Blogdetails flex flex-row justify-start mt-10 width-full'>
                        <div className='flex flex-col items-center'>
                            <div className='Userblog ml-20 w-96 mr-64 h-48 overflow-auto mb-12'>
                                <LikedBlog />
                            </div>
                            <div className='Savedblog ml-20 mb-12 w-96 mr-64 h-48 overflow-auto'>
                                <SavedBlog />
                            </div>
                        </div>
                        <div className='Likedblog w-11/12 mr-64 h-96 overflow-auto'>
                            <Userblog />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
