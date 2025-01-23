'use client'
import React, { useState } from 'react'
import data from '../data.json'
export default function Skills() {
    const [info, setInfo] = useState(data)
    return (
        <div>
            <div>
                <h2>My Skills</h2>
                <p>Proficient in HTML, CSS, JavaScript, Next.js, React.js, Tailwind CSS, TypeScript, React, with a focus on building responsive and dynamic web applications.</p>
            </div>
        </div>
    )
}
