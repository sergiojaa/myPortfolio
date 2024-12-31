'use client'
import type { Metadata } from "next";
import { SetStateAction, useState } from "react";
import Header from "./components/Header";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link: SetStateAction<string>) => {
    setActiveLink(link);
  };

  const getLinkStyle = (link: string) => ({
    color: activeLink === link ? '#c5f82a' : 'white',
    borderBottom: activeLink === link ? '2px solid #c5f82a' : 'none',
    transition: 'color 0.3s',
  });

  const hamburgerOpen: () => void = () => {
    setOpen(!open);
  };

  return (
    <html lang="en">
      <body className={`bg-[#1c1c22] relative`}>
        <Header open={open} setOpen={setOpen} hamburgerOpen={hamburgerOpen} />
        
        {open && (
          <div className="w-full h-screen fixed inset-0 z-10">
            <div className="w-full h-full bg-black opacity-30" onClick={hamburgerOpen}></div>
            <div className="flex flex-col gap-2 bg-[#1c1c22] lg:w-[40%] md:w-[50%] w-[70%] h-full justify-self-end absolute right-0 top-0 items-center text-white z-20">
              <div className="flex flex-col items-center w-full px-4 pt-4">
                <div className="flex justify-end items-center w-full">
                  <div>
                     <h2 onClick={hamburgerOpen} className="text-2xl text-[#c5f82a] m-3 cursor-pointer">
                    X
                  </h2>
                  </div>
                 
                </div>
                <h1 className=" text-[30px] mb-14 mt-7 text-white font-semibold text-center">
                  Sergi<span className="text-[#c5f82a]">.</span>
                </h1>
              </div>
              <div className="flex flex-col gap-4 items-center mt-4 text-[18px]">
                <a href="#" style={getLinkStyle('Home')} onClick={() => handleLinkClick('Home')}>Home</a>
                <a href="#" style={getLinkStyle('Services')} onClick={() => handleLinkClick('Services')}>Services</a>
                <a href="#" style={getLinkStyle('Resume')} onClick={() => handleLinkClick('Resume')}>Resume</a>
                <a href="#" style={getLinkStyle('Work')} onClick={() => handleLinkClick('Work')}>Work</a>
                <a href="#" style={getLinkStyle('Contact')} onClick={() => handleLinkClick('Contact')}>Contact</a>
              </div>
            </div>
          </div>
        )}

        {children}
      </body>
    </html>
  );
}
