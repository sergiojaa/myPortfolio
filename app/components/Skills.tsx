'use client'
import React from 'react'
import Image from 'next/image'
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { FaGithub, FaGitSquare } from "react-icons/fa";

import htmlLogo from '../assets/htmllogo.svg'
import jsLogo from '../assets/jslogo.svg'
import cssLogo from '../assets/csslogo.svg'
import reactLogo from '../assets/reactlogo.svg'

export default function Skills() {
    return (
        <div className="w-full max-w-[800px] px-5 mx-auto text-center lg:text-left">
            {/* Title & Description */}
            <h2 className="text-white text-3xl font-bold mb-3">
                My <span className="ml-2">Skills</span>
            </h2>
            <p className="text-[#ffffff99] w-[320px] sm:w-auto min-w-[320px] max-w-[600px] mx-auto lg:mx-0">
                Proficient in HTML, CSS, JavaScript, Next.js, React.js, Tailwind CSS, TypeScript, with a focus on building responsive and dynamic web applications.
            </p>

            <div className="grid  grid-cols-2 md:grid-cols-4 gap-5 mt-6">
                {[
                    { logo: htmlLogo, alt: "HTML" },
                    { logo: cssLogo, alt: "CSS" },
                    { logo: jsLogo, alt: "JavaScript" },
                    { logo: reactLogo, alt: "React" },
                    { icon: <SiNextdotjs size={44} color="white" />, alt: "Next.js" },
                    { icon: <SiTypescript size={44} color="white" />, alt: "TypeScript" },
                    { icon: <FaGithub size={44} color="white" />, alt: "GitHub" },
                    { icon: <FaGitSquare size={44} color="white" />, alt: "Git" },
                ].map((skill, index) => (
                    <div
                        key={index}
                        className="bg-[#232329]  rounded-xl h-[100px] flex flex-col items-center justify-center relative group cursor-pointer transition-all duration-300"
                    >
                        {skill.logo ? (
                            <Image
                                src={skill.logo}
                                width={40}
                                height={40}
                                alt={skill.alt}
                                className="transition-opacity duration-300 group-hover:opacity-0"
                            />
                        ) : (
                            <div className="transition-opacity duration-300 group-hover:opacity-0">
                                {skill.icon}
                            </div>
                        )}

                        {/* Skill Name (Shown on Hover) */}
                        <p className="absolute text-[#c5f82a] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {skill.alt}
                        </p>
                    </div>
                ))}
            </div>
        </div>

    );
}
