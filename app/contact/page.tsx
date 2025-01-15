'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function page() {
    const [input, setInput] = useState({
        name: '',
        email: '',
        text: ''
    })
    console.log(input)
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Conttent-Type':
                    'application/json',
            },
            body: JSON.stringify(input)
        })
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = event.target as HTMLInputElement;
        setInput({
            ...input,
            [target.name]: target.value
        })
    }
    return (
        <div >
            <div className='lg:flex mt-7  lg:mt-0 lg:flex-row-reverse justify-center items-center'>
                <div className='flex flex-col md:ml-5  gap-11'>
                    <div className='flex items-center ml-4'>
                        <div className='bg-[#27272c] rounded-md flex justify-center items-center h-[56px] w-[52px]'>
                            <FontAwesomeIcon className='w-[22px] my-3 ' icon={faPhone} style={{ color: "#c5f82a" }} />
                        </div>
                        <div className='ml-3'>
                            <h2 className='text-[#ffffff99]'>Phone</h2>
                            <h3 className='text-[#fff] text-[17px]'>+(995) 555 25 92 94</h3>
                        </div>

                    </div>
                    <div className='flex items-center ml-4'>
                        <div className='bg-[#27272c] rounded-md flex justify-center items-center h-[56px] w-[52px]'>
                            <FontAwesomeIcon className='w-[22px] my-3 ' icon={faEnvelope} style={{ color: "#c5f82a" }} />
                        </div>
                        <div className='ml-3'>
                            <h2 className='text-[#ffffff99]'>Email</h2>
                            <h3 className='text-[#fff] text-[17px]'>kaliashvilisergi@gmail.com</h3>
                        </div>

                    </div>
                    <div className='flex items-center ml-4'>
                        <div className='bg-[#27272c] rounded-md flex justify-center items-center h-[56px] w-[52px]'>
                            <FontAwesomeIcon className='w-[22px] my-3 ' icon={faLocationDot} style={{ color: "#c5f82a" }} />
                        </div>
                        <div className='ml-3'>
                            <h2 className='text-[#ffffff99]'>Address</h2>
                            <h3 className='text-[#fff] text-[17px]'>Tbilisi,Georgia</h3>
                        </div>

                    </div>
                </div>
                <div className='bg-[#27272c] mt-16 lg:mt-5 mx-4 flex md:mx-auto lg:mx-0 flex-col items-center justify-center rounded-xl max-w-[700px]' >
                    <div className='flex flex-col items-start  gap-5 justify-'>
                        <h2 className='text-[#c5f82a] mt-10 pl-11 text-3xl leading-9'>Let's work together</h2>
                        <p className=' min-w-[106px] max-w-[454px] mb-5 pl-3  mx-8 text-[#ffffff99] text-[15px]'>Reach out, and let’s explore how we can create something exceptional together.</p>
                    </div>
                    <div>
                        <div className='flex  gap-6'>
                            <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                                <div className='flex flex-col gap-6 mx-8 justify-center items-center md:flex-row'  >
                                    <input
                                        onChange={handleChange}
                                        className='bg-[#1c1c22] min-w-[203px] max-w-[430px] w-full md:w-[203px] text-[#ffffff99] text-white border py-[6px] px-[10px] text-left '
                                        type="text"
                                        placeholder='Firstname'
                                        name='name'
                                    />
                                    <input
                                        onChange={handleChange}
                                        className='bg-[#1c1c22] min-w-[203px] max-w-[430px] w-full md:w-[203px] text-[#ffffff99] text-white border py-[6px] px-[10px] text-left '
                                        type="text"
                                        placeholder='Email address'
                                        name='email'
                                    />
                                </div>


                                <div className='flex justify-center'>
                                    <textarea
                                        onChange={handleChange}
                                        className='bg-[#1c1c22] min-w-[200px] mx-8  max-w-[430px] w-full h-[110px] text-[#ffffff99] border py-[8px] px-[16px] resize-y'
                                        placeholder='Type your message here'
                                        name='text'
                                    />

                                </div>
                                <div className='flex justify-center mb-5  items-center'>
                                    <button
                                        className="border border-[#c5f82a] bg-[#c5f82a] py-2 px-4 hover:bg-customGreen transition duration-300 ease-in-out rounded-3xl"
                                    >
                                        Send Message
                                    </button>

                                </div>
                            </form>



                        </div>
                    </div>


                </div>
            </div>


        </div>
    )
}
