'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { useState } from "react";
import Link from "next/link";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [open,setOpen] = useState(false)
    const hamburgerOpen: () => void = () => {
      setOpen(!open);
    };
    
  return (
    <html lang="en">
      <body
        className={` bg-[#1c1c22] relative`}
      >
        <Header open={open} setOpen={setOpen} hamburgerOpen={hamburgerOpen} />
        {open && (
  <div className="w-full h-screen fixed inset-0 z-10">
   
    <div
      className="w-full h-full bg-black opacity-30"
      onClick={hamburgerOpen} 
    ></div>
   
    <div className="flex flex-col  gap-2 bg-[#1c1c22] lg:w-[40%] md:w-[50%] w-[70%] h-full justify-self-end absolute right-0 top-0 items-center text-white z-20">
    <div className="flex flex-col items-center w-full px-4 pt-4">
  <div className="flex justify-between items-center w-full">
    <div className="flex justify-start w-full">
      {/* Empty div to align "X" to the right */}
    </div>
    <h2
      onClick={hamburgerOpen}
      className="text-2xl text-[#c5f82a] m-5 cursor-pointer"
    >
      X
    </h2>
  </div>
  
  <h1 className="text-[30px] mb-14 mt-7 text-white font-semibold text-center">
    Sergi<span className="text-[#c5f82a]">.</span>
  </h1>
</div>


      <div className="flex flex-col gap-4 items-center mt-4">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/work">Work</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  </div>
)}

        {children}
      </body>
    </html>
  );
}
