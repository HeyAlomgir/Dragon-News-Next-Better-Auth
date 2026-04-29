import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        id:"1",
        title:"Alomgir",
    },{
        id:"2",
        title:"Shariful",
    },{
        id:"3",
        title:"Abid"
    },
    {
        id:"4",
        title:"Talha"
    },
    {
        id:"5",
        title:"Shihab"
    },
    {
        id:"6",
        title:"Rohan"
    },
    {
        id:"7",
        title:"Emon"
    },
    {
        id:"8",
        title:"Sadi"
    },

]

const MainLayout = ({ children }) => {
    return (
        <div className='m-4'>
            <Header></Header>

          <div  className='container mx-auto bg-gray-200 py-5 px-2 flex rounded-md shadow-2xl m-4 my-10'>
            <button className='btn bg-[#d72050] text-white'>Latest</button>
              <Marquee pauseOnHover={true} speed={100} >
                {news.map(n => <p key={n.id} className='gap-1 px-16'>{n.title}</p>)}
            </Marquee>
          </div>

            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default MainLayout;