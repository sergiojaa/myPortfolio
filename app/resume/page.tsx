'use client';
import React, { useState } from 'react';
import data from '../data.json';

interface PersonalInfo {
  name: string;
  experience: string;
  nationality: string;
  freelance_available: boolean;
  phone: string;
  github: string;
  email: string;
  languages: string;
}

interface Content {
  title: string;
  text?: string;
  personal_info?: PersonalInfo;
  images?: { url: string }[]; 
}

interface ContentDisplayProps {
  title: string;
  text?: string;
  personalInfo?: PersonalInfo;
  images?: { url: string }[]; 
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({ title, text, personalInfo, images }) => {
  if (!text && !personalInfo && !images) return null;

  return (
    <div >
      <h1 className='text-3xl text-white'>{title}</h1>
      {text && <p className='text-[#FFFFFF99] '>{text}</p>}
      {personalInfo && (
        <div className='flex flex-col  lg:flex-row justify-between'>
          <div className='flex flex-col gap-2 mt-5 text-[#FFFFFF99]'>
            <p>Name: <span className='text-white'>{personalInfo.name}</span></p>
            <p>Experience: <span className='text-white'>{personalInfo.experience}</span></p>
            <p>Nationality: <span className='text-white'>{personalInfo.nationality}</span></p>
            <p>Freelance Available: <span className='text-white'>{personalInfo.freelance_available ? 'Yes' : 'No'}</span></p>
          </div>
          <div className='flex flex-col mt-3 gap-2 text-[#FFFFFF99]'>
            <p>Phone: <span className='text-white'>{personalInfo.phone}</span></p>
            <p>GitHub: <span className='text-white'>{personalInfo.github}</span></p>
            <p>Email: <span className='text-white'>{personalInfo.email}</span></p>
            <p>Languages: <span className='text-white'>{personalInfo.languages}</span></p>
          </div>
        </div>
      )}
      {images && (
        <div className='grid grid-cols-2 gap-4 mt-4'>
          {images.map((image, index) => (
            <img key={index} src={image.url} alt={`Skill ${index + 1}`} className='w-full rounded-lg' />
          ))}
        </div>
      )}
    </div>
  );
};

const Page: React.FC = () => {
  const [info, setInfo] = useState<Content[]>(data);
  const [selectedSection, setSelectedSection] = useState<string>('About me');

  // Handle button click to update the selected section
  const handleButtonClick = (title: string) => {
    setSelectedSection(title);
  };

  // Find the content that matches the selected section
  const selectedContent = info.find(information => information.title === selectedSection);

  return (
    <div className='flex  mt-5 lg:flex-row flex-col gap-10 justify-center items-center'>
      <div className='flex     flex-col gap-5 justify-center items-center'>
        <button
          className='bg-[#27272c] h-[40px] text-white w-[292px] py-1 px-20 rounded-lg'
          onClick={() => handleButtonClick('About me')}
        >
          About Me
        </button>
        <button
          className='bg-[#27272c] w-[292px] h-[40px] text-white py-1 px-20 rounded-lg'
          onClick={() => handleButtonClick('Experience')}
        >
          Experience
        </button>
        <button
          className='bg-[#27272c] w-[292px] h-[40px] text-white py-1 px-20 rounded-lg'
          onClick={() => handleButtonClick('Education')}
        >
          Education
        </button>
        <button
          className='bg-[#27272c] w-[292px] h-[40px] text-white py-1 px-20 rounded-lg'
          onClick={() => handleButtonClick('Skills')}
        >
          Skills
        </button>
      </div>

      <div className='w-[500px]'>
        {/* Render the selected content */}
        {selectedContent && (
          <ContentDisplay
            title={selectedContent.title}
            text={selectedContent.text}
            personalInfo={selectedContent.personal_info}
            images={selectedContent.images} // Pass images here
          />
        )}
      </div>
    </div>
  );
};

export default Page;
