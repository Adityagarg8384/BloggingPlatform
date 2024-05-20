import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faStarHalfAlt, faStar as regularStar, faEdit } from '@fortawesome/free-solid-svg-icons';

const UserData = ({data}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
     // Replace with the actual rating value



    return (
        <div className="flex flex-col h-52 w-full">
            <div className={`hover:bg-[#303135] mt-2 relative ${isHovered ? 'ml-2' : 'ml-2'}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <h2 className='text-white text-2xl mt-2 p-4'>{data && data.username ? data.username : "Username"}</h2>
                {isHovered && <button className="absolute top-0 right-0 mr-2 mt-2"><FontAwesomeIcon icon={faEdit} className="text-white" /></button>}
            </div>
            <div className={`hover:bg-[#303135] mt-2 relative ${isHovered1 ? 'ml-4' : 'ml-4'}`} onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)}>
                <h2 className='text-white mt-2 p-2'>{data && data.emailid ? data.emailid : "Email"}</h2>
                {isHovered1 && <button className="absolute top-0 right-0 mr-2 mt-2"><FontAwesomeIcon icon={faEdit} className="text-white" /></button>}
            </div>
            <div className={`hover:bg-[#303135] mt-2 relative ${isHovered2 ? 'ml-4' : 'ml-4'}`} onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}>
                <h2 className='text-white mt-2 p-2'>{data && data.age ? data.age : "Age"}</h2>
                {isHovered2 && <button className="absolute top-0 right-0 mr-2 mt-2"><FontAwesomeIcon icon={faEdit} className="text-white" /></button>}
            </div>
            <div className='ml-2 mt-2'>
                <h2 className='text-white ml-4 mt-2 mb-2'>Rated</h2>
                <div className="flex gap-1 ml-4">{renderStars()}</div>
            </div>
        </div>
    );
};

export default UserData;
