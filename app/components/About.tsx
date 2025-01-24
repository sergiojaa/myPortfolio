'use client';
import React from 'react';

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

interface AboutProps {
    content: Content;
}

const About: React.FC<AboutProps> = ({ content }) => {
    const { title, text, personal_info, images } = content;

    return (
        <div>
            <h1 className="text-3xl text-white">{title}</h1>
            {text && <p className="text-[#FFFFFF99]">{text}</p>}
            {personal_info && (
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="flex flex-col gap-2 mt-5 text-[#FFFFFF99]">
                        <p>
                            Name: <span className="text-white">{personal_info.name}</span>
                        </p>
                        <p>
                            Experience: <span className="text-white">{personal_info.experience}</span>
                        </p>
                        <p>
                            Nationality: <span className="text-white">{personal_info.nationality}</span>
                        </p>
                        <p>
                            Freelance Available:{' '}
                            <span className="text-white">{personal_info.freelance_available ? 'Yes' : 'No'}</span>
                        </p>
                    </div>
                    <div className="flex flex-col mt-3 gap-2 text-[#FFFFFF99]">
                        <p>
                            Phone: <span className="text-white">{personal_info.phone}</span>
                        </p>
                        <p>
                            GitHub: <span className="text-white">{personal_info.github}</span>
                        </p>
                        <p>
                            Email: <span className="text-white">{personal_info.email}</span>
                        </p>
                        <p>
                            Languages: <span className="text-white">{personal_info.languages}</span>
                        </p>
                    </div>
                </div>
            )}
            {images && (
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {images.map((image, index) => (
                        <img key={index} src={image.url} alt={`Skill ${index + 1}`} className="w-full rounded-lg" />
                    ))}
                </div>
            )}
        </div>
    );
};

export default About;
