'use client';
import React, { useState } from 'react';
import data from '../data.json';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';

interface Content {
  title: string;
  text?: string;
  personal_info?: {
    name: string;
    experience: string;
    nationality: string;
    freelance_available: boolean;
    phone: string;
    github: string;
    email: string;
    languages: string;
  };
  images?: { url: string }[];
}

const Page: React.FC = () => {
  const [info] = useState<Content[]>(data);
  const [selectedSection, setSelectedSection] = useState<string>('About me');

  // Handle button click to update the selected section
  const handleButtonClick = (title: string) => {
    setSelectedSection(title);
  };

  const selectedContent = info.find((information) => information.title === selectedSection);

  return (
    <div className="flex mt-5   lg:flex-row flex-col  items-center gap-10 justify-center md:items-start">
      <div className="flex mx-auto lg:mx-0 flex-col gap-5 justify-center items-center">
        <button
          className="bg-[#27272c] h-[40px] text-white w-[292px] py-1 px-20 rounded-lg"
          onClick={() => handleButtonClick('About me')}
        >
          About Me
        </button>
        <button
          className="bg-[#27272c] w-[292px] h-[40px] text-white py-1 px-20 rounded-lg"
          onClick={() => handleButtonClick('Experience')}
        >
          Experience
        </button>
        <button
          className="bg-[#27272c] w-[292px] h-[40px] text-white py-1 px-20 rounded-lg"
          onClick={() => handleButtonClick('Education')}
        >
          Education
        </button>
        <button
          className="bg-[#27272c] w-[292px] h-[40px] text-white py-1 px-20 rounded-lg"
          onClick={() => handleButtonClick('Skills')}
        >
          Skills
        </button>
      </div>

      {/* Content section */}
      <div className="w-[500px] mx-auto lg:mx-0 ">
        {selectedSection === 'About me' && selectedContent && (
          <About content={selectedContent} />
        )}
        {selectedSection === 'Education' && <Education />}
        {selectedSection === 'Experience' && <Experience />}
        {selectedSection === 'Skills' && <Skills />}
      </div>
    </div>
  );
};

export default Page;
