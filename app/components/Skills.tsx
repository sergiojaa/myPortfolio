'use client'
import React, { useState } from 'react'
import data from '../data.json'
import htmlLogo from '../assets/htmllogo.svg'
import jsLogo from '../assets/jslogo.svg'
import cssLogo from '../assets/csslogo.svg'
import reactLogo from '../assets/reactlogo.svg'
import Image from 'next/image'
import { SiNextdotjs } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";

export default function Skills() {
    const [info, setInfo] = useState(data)
    return (
        <div>
            <div className='flex flex-col  items-center lg:items-start justify-center'>
                <div>
                    <h2 className='text-white text-[30px] font-bold'>My <span className='ml-2'>Skills</span></h2>
                    <p className='w-[300px] md:w-[500px] text-[#ffffff99]'>Proficient in HTML, CSS, JavaScript, Next.js, React.js, Tailwind CSS, TypeScript, React, with a focus on building responsive and dynamic web applications.</p>
                </div>

                <div className='flex mt-5 flex-col gap-5'>
                    <div className='flex flex-col items-center md:flex-row gap-4     w-[550px]   '>
                        <div className='flex gap-5'>
                            <div className='bg-[#232329] w-[120px] rounded-xl h-[100px] flex  items-center justify-center'>
                                <Image className='max-w-max cursor-pointer' src={htmlLogo} width={40} height={10} alt='logo' />
                            </div>
                            <div className='bg-[#232329] w-[120px] rounded-xl h-[100px] flex  items-center justify-center'>
                                <Image className='cursor-pointer' src={cssLogo} width={40} height={10} alt='logo' />
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className='bg-[#232329] w-[120px] rounded-xl h-[100px] flex  items-center justify-center'>
                                <Image className='cursor-pointer' src={jsLogo} width={40} height={10} alt='logo' />
                            </div>
                            <div className='bg-[#232329] w-[120px] rounded-xl h-[100px] flex  items-center justify-center'>
                                <Image className='cursor-pointer' src={reactLogo} width={40} height={10} alt='logo' />
                            </div>
                        </div>


                    </div>
                    <div className='flex items-center flex-col md:flex-row gap-4 w-[550px]   '>
                        <div className='flex gap-5'>
                            <div className='bg-[#232329] w-[120px] rounded-xl h-[100px] flex  items-center justify-center'>
                                <SiNextdotjs className='w-[100px] max-w-max cursor-pointer' size={44} color="white" />
                            </div>
                            <div className='bg-[#232329] w-[120px] rounded-xl h-[100px] flex  items-center justify-center'>
                                <SiTypescript className='w-[100px] max-w-max cursor-pointer' size={44} color="white" />
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className='bg-[#232329] w-[120px] rounded-xl h-[100px] flex  items-center justify-center'>
                                <FaGithub className='w-[100px] max-w-max cursor-pointer' size={44} color="white" />
                            </div>
                            <div className='bg-[#232329] w-[120px] rounded-xl h-[100px] flex  items-center justify-center'>
                                <FaGitSquare className='w-[100px] max-w-max cursor-pointer ' size={44} color="white" />
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div >
    )
}
