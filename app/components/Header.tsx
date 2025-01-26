'use client';
import Link from 'next/link';
import React, { useState } from 'react';

type HeaderProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  hamburgerOpen: () => void;
};

export default function Header({ open, hamburgerOpen }: HeaderProps) {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const getLinkClass = (link: string) =>
    `transition-colors duration-300 ${activeLink === link
      ? 'text-[#c5f82a] border-b-2 border-[#c5f82a]'
      : 'text-white hover:text-[#c5f82a]  hover:border-[#c5f82a]'
    }`;

  return (
    <div>
      {/* Header Section */}
      <div className="flex lg:w-[825px] mx-5 lg:mx-auto  justify-between py-6 items-center">
        <div>
          <Link href={'/'}>
            <h1 className="text-[30px] text-white font-semibold">
              Sergi<span className="text-[#c5f82a]">.</span>
            </h1>
          </Link>

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
        <div className="hidden lg:flex items-center gap-8 text-white">
          <Link href="/" className={getLinkClass('Home')} onClick={() => handleLinkClick('Home')}>
            Home
          </Link>

          <Link href="/resume" className={getLinkClass('Resume')} onClick={() => handleLinkClick('Resume')}>
            Resume
          </Link>
          <Link href="/work" className={getLinkClass('Work')} onClick={() => handleLinkClick('Work')}>
            Work
          </Link>
          <Link href="/contact" className={getLinkClass('Contact')} onClick={() => handleLinkClick('Contact')}>
            Contact
          </Link>
          <Link href="/contact">
            <button
              onClick={() => handleLinkClick('Contact')}
              className="border border-[#c5f82a] text-black bg-[#c5f82a] py-2 px-4 hover:bg-customGreen transition duration-300 ease-in-out rounded-3xl"
            >
              Hire me
            </button>
          </Link>

        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="fixed inset-0 z-10 w-full h-screen">
          <div className="w-full h-full bg-black opacity-30" onClick={hamburgerOpen}></div>
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


            <Link href="/" className={getLinkClass('Home')} onClick={() => handleLinkClick('Home')}>
              Home
            </Link>
            <Link href="/services" className={getLinkClass('Services')} onClick={() => handleLinkClick('Services')}>
              Services
            </Link>
            <Link href="/resume" className={getLinkClass('Resume')} onClick={() => handleLinkClick('Resume')}>
              Resume
            </Link>
            <Link href="/work" className={getLinkClass('Work')} onClick={() => handleLinkClick('Work')}>
              Work
            </Link>
            <Link href="/contact" className={getLinkClass('Contact')} onClick={() => handleLinkClick('Contact')}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
