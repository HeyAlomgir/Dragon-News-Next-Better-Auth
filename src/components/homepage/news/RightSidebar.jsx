import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div>
          
            <div className='flex flex-col gap-2 my-7'>
                <button className='btn border-blue-500 text-blue-500' >
                    <FaGoogle/>
                    Loging with google</button>


                <button className='btn'>
                    <FaGithub/>
                    Loging with github</button>
            </div>
        </div>
    );
};

export default RightSidebar;