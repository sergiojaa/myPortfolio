import React from 'react'

export default function Education() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="https://www.linkedin.com/company/algounigeorgia/posts/?feedView=all" target='_blank'>
                <div className="bg-[#232329] w-[206px] mx-auto flex flex-col gap-3 p-4 rounded-lg shadow-md">
                    <h4 className="text-lime-400 font-medium">2024 - Present</h4>
                    <h3 className="text-white font-bold text-md">Front End Development</h3>
                    <p className="text-gray-400">• Algouni</p>
                </div>
            </a>
            <a href="https://www.udemy.com/certificate/UC-7c8ee98c-7571-445f-9ace-79908780748f/" target='_blank'>
                <div className="bg-[#232329] w-[206px] mx-auto flex flex-col gap-3 p-4 rounded-lg shadow-md">
                    <h4 className="text-lime-400 font-medium">2024 - 2025</h4>
                    <h3 className="text-white font-bold text-md">Data Structures and Algorithms</h3>
                    <p className="text-gray-400">• Udemy</p>
                </div>
            </a>
            <a href="https://www.freecodecamp.org/certification/sergikaliashvili/javascript-algorithms-and-data-structures" target='_blank'>
                <div className="bg-[#232329] w-[206px] mx-auto flex flex-col gap-3 p-4 rounded-lg shadow-md">
                    <h4 className="text-lime-400 font-medium">2024 - 2024</h4>
                    <h3 className="text-white font-bold text-md">Legacy JavaScript Algorithms and Data Structures</h3>
                    <p className="text-gray-400">• FreeCodeCamp</p>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/sergi-qaliashvili/overlay/1706886982591/single-media-viewer/?profileId=ACoAAEc_rGoBBVg6xs0mMn7a2xVkiAaybQpZQ44" target='_blank'>
                <div className="bg-[#232329] w-[206px] mx-auto flex flex-col gap-6 p-4 rounded-lg shadow-md">
                    <h4 className="text-lime-400 font-medium">2023 - 2024</h4>
                    <h3 className="text-white font-bold text-md">Front End development course</h3>
                    <p className="text-gray-400">• Skilwill</p>
                </div>
            </a>
        </div>



    )
}
