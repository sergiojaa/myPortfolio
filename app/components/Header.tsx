'use client'
import React, { SetStateAction, useState } from 'react'
type HeaderProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  hamburgerOpen: () => void; 
};
export default function Header({hamburgerOpen,open,setOpen}:HeaderProps) {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link: SetStateAction<string>) => {
    setActiveLink(link);
  };

  const getLinkStyle = (link: string) => ({
    color: activeLink === link ? '#c5f82a' : 'white',
    borderBottom: activeLink === link ? '2px solid #c5f82a' : 'none',
    transition: 'color 0.3s',
  });
  return (
    <div>
       <div className="flex lg:ml-60 justify-between py-6 px-4 items-center">
      <div>
        <h1 className="text-[30px] text-white  font-semibold">Sergi
           <span className="text-[#c5f82a]">.</span></h1>
      </div>
     
      <div className="flex justify-between py-6 px-4 items-center">
     
      

      
      <div
        onClick={hamburgerOpen}
        className="flex flex-col items-end lg:hidden gap-[10px] cursor-pointer"
      >
        <div className="w-[32px] bg-[#c5f82a] h-[2px]"></div>
        <div className="w-[22px] bg-[#c5f82a] h-[2px]"></div>
        <div className="w-[32px] bg-[#c5f82a] h-[2px]"></div>
      </div>

     
     
    </div>
      </div>
    </div>
  )
}
