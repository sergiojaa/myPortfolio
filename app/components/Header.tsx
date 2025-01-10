'use client';
import Link from 'next/link';
import React, { useState } from 'react';

type HeaderProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  hamburgerOpen: () => void;
};

export default function Header({ open, setOpen, hamburgerOpen }: HeaderProps) {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const getLinkStyle = (link: string) => ({
    color: activeLink === link ? '#c5f82a' : 'white',
    borderBottom: activeLink === link ? '2px solid #c5f82a' : 'none',
    transition: 'color 0.3s',
  });

  return (
    <div>
      {/* Header Section */}
      <div className="flex  lg:w-[1150px] mx-auto   justify-between   py-6  items-center">
        <div>
          <h1 className="text-[30px] text-white font-semibold">
            Sergi<span className="text-[#c5f82a]">.</span>
          </h1>
        </div>

        {/* Hamburger Menu Icon */}
        <div
          onClick={hamburgerOpen}
          className="flex flex-col lg:mr-[100px] items-end lg:hidden gap-[10px] cursor-pointer"
        >
          <div className="w-[32px] bg-[#c5f82a] h-[2px]"></div>
          <div className="w-[22px] bg-[#c5f82a] h-[2px]"></div>
          <div className="w-[32px] bg-[#c5f82a] h-[2px]"></div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8 text-white">
          <Link href={'/'}>
          Home
          </Link>
            
         <Link href={'/services'}>
         Services

         </Link>
          {/* <a
            href="#resume"
            style={getLinkStyle('Resume')}
            onClick={() => handleLinkClick('Resume')}
          > */}
          <Link href={'/resume'}>
          Resume
          </Link>
          {/* </a> */}
          <Link href={'/work'}>
          Work
          </Link>
            
          <Link href={'/contact'}>
            Contact
          </Link>
          <a
            href="#contact"
            // style={getLinkStyle('Contact')}
            onClick={() => handleLinkClick('Contact')}
            className='border border-[#c5f82a] text-gray-500 bg-[#c5f82a] py-2 px-10 rounded-3xl  '
          >
            Hire me
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="fixed  inset-0 z-10 w-full h-screen">
          <div
            className="w-full h-full bg-black opacity-30"
            onClick={hamburgerOpen}
          ></div>
          <div className="flex flex-col gap-4 bg-[#1c1c22] w-[70%] h-full absolute right-0 top-0 items-center text-white z-20 p-4">
            <div className="flex justify-end w-full">
              <button
                onClick={hamburgerOpen}
                className="text-2xl text-[#c5f82a] m-3"
              >
                X
              </button>
            </div>
            <h1 className="text-[30px]  mb-14 mt-7 font-semibold">
              Sergi<span className="text-[#c5f82a]">.</span>
            </h1>
            
            <a
              href="#home"
              style={getLinkStyle('Home')}
              onClick={() => handleLinkClick('Home')}
            >
              Home
            </a>
            <a
              href="#services"
              style={getLinkStyle('Services')}
              onClick={() => handleLinkClick('Services')}
            >
              Services
            </a>
            <a
              href="#resume"
              style={getLinkStyle('Resume')}
              onClick={() => handleLinkClick('Resume')}
            >
              Resume
            </a>
            <a
              href="#work"
              style={getLinkStyle('Work')}
              onClick={() => handleLinkClick('Work')}
            >
              Work
            </a>
            <Link 
            onClick={() => handleLinkClick('Contact')}
            style={getLinkStyle('Contact')}
            href={'Contact'}>Contact</Link>
           
          </div>
        </div>
      )}
    </div>
  );
}
