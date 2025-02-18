import React from 'react'

export default function Experience() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className="group">
                <a href="https://andersenlab.com/" target='_blank'>
                    <div className="bg-[#232329] w-[206px] h-[160px] mx-auto flex flex-col gap-3 p-4 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:shadow-lime-400/10 group-hover:-translate-y-1">
                        <h4 className="text-lime-400 font-medium">Feb 2025 - present</h4>
                        <h3 className="text-white font-bold text-[19px]">Frontend Apprenticeship</h3>
                        <p className="text-gray-400">• Andersen Lab</p>
                    </div>
                </a>
            </div>
            <div className="group">
                <a href="https://www.freecodecamp.org/certification/sergikaliashvili/javascript-algorithms-and-data-structures" target='_blank'>
                    <div className="bg-[#232329] h-[160px] w-[206px] mx-auto flex flex-col gap-3 p-4 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:shadow-lime-400/10 group-hover:-translate-y-1">
                        <h4 className="text-lime-400 font-medium">Jan 2025 - Present</h4>
                        <h3 className="text-white font-bold text-[19px]">Software Developer</h3>
                        <p className="text-gray-400">• Dealin</p>

                    </div>

                </a>
            </div>
        </div>
    )
}
