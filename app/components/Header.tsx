'use client'
import React, { useState } from 'react'
type HeaderProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  hamburgerOpen: () => void; 
};
export default function Header({hamburgerOpen,open,setOpen}:HeaderProps) {
  
  return (
    <div>
       <div className="flex justify-between py-6 px-4 items-center">
      <div>
        <h1 className="text-[30px] text-white  font-semibold">Sergi
           <span className="text-[#c5f82a]">.</span></h1>
      </div>
      <div
      onClick={hamburgerOpen}
      className="flex flex-col items-end  gap-[10px]" >
        <div className="w-[32px]  bg-[#c5f82a] h-[2px]"></div>
        <div className="w-[22px] bg-[#c5f82a] h-[2px]"></div>
        <div className="w-[32px] bg-[#c5f82a] h-[2px]"></div>
      </div>
      </div>
    </div>
  )
}
