"use client";
import React, { useRef } from 'react'
import { HiMiniBars3BottomRight } from "react-icons/hi2";

interface HeaderProps {
  scrollToAbout: () => void;
  scrollToHome: () => void;
  scrollToService: () => void;
  scrollToContact: () => void;
}


const Header: React.FC<HeaderProps> = ({ scrollToAbout, scrollToHome, scrollToService, scrollToContact }) => {
  return (
    <>
      <div className='hidden xs:flex justify-between items-center z-50'>
        <h1 className='text-white text-xl font-semibold cursor-pointer'>Bitewi</h1>
        <div className=''>
          <nav className='flex items-center list-none space-x-3'>
            <li onClick={scrollToHome} className="nav tracking-[3px]">Home</li>
            <li onClick={scrollToAbout} className="nav tracking-[3px]">About</li>
            <li onClick={scrollToService} className="nav tracking-[3px]">Services</li>
            <li onClick={scrollToContact} className=" text-sm cursor-pointer ml-10 text-[#070F2B] font-bold tracking-[1px] border-r border-b rounded-full px-3 py-1 hover:border-r-0 hover:border-l hover:border-b-0 hover:border-t hover:transition hover:delay-75 hover:duration-75 border-inner bg-[#EEF5FF] hover:text-[#11009E] ">Contact</li>
          </nav>
        </div>
      </div>

      <div className='flex justify-center xs:hidden '>
        <div className='bg-white fixed bottom-0 my-3 z-30 rounded-full overflow-hidden'>
          <nav className='flex list-none space-x-3 px-3 py-2 justify-between items-center z-20'>
            <li onClick={scrollToService} className='bg-[#001732] rounded-full text-white px-2 py-1 cursor-pointer'>Services</li>
            <li onClick={scrollToAbout} className='px-2 py-1 cursor-pointer'>About</li>
            <li onClick={scrollToHome} className='px-2 py-1 cursor-pointer'>Home</li>
            <li onClick={scrollToContact} className='px-2 py-1 cursor-pointer'>Contact</li>
            <div className="animation start-home"></div>
          </nav>
          <div className='w-[100px] h-[50px] absolute bg-[#9F70FD] text-center blur-[70px] z-10'></div>
          <div className='w-[100px] h-[50px] absolute bg-[#D63484] translate-x-48 text-center blur-[70px] z-10'></div>
        </div>
      </div>
    </>
  )
}

export default Header