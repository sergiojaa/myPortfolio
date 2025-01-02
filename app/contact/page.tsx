import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope,faLocationDot  } from '@fortawesome/free-solid-svg-icons';

export default function page() {
  return (
    <div >
        <div className='lg:flex lg:flex-row-reverse justify-center items-center'>
        <div className='flex flex-col  gap-11'>
        <div className='flex items-center ml-4'>
        <div className='bg-[#27272c] rounded-md flex justify-center items-center w-[42px]'>
            <FontAwesomeIcon className='w-[22px] my-3 ' icon={faPhone} style={{ color: "#c5f82a" }} />
        </div>
        <div className='ml-3'>
            <h2 className='text-[#ffffff99]'>Phone</h2>
            <h3 className='text-[#fff] text-[17px]'>+(995) 555 25 92 94</h3>
        </div>

      </div>
      <div className='flex items-center ml-4'>
        <div className='bg-[#27272c] rounded-md flex justify-center items-center w-[42px]'>
            <FontAwesomeIcon className='w-[22px] my-3 ' icon={faEnvelope} style={{ color: "#c5f82a" }} />
        </div>
        <div className='ml-3'>
            <h2 className='text-[#ffffff99]'>Email</h2>
            <h3 className='text-[#fff] text-[17px]'>kaliashvilisergi@gmail.com</h3>
        </div>

      </div>
      <div className='flex items-center ml-4'>
        <div className='bg-[#27272c] rounded-md flex justify-center items-center w-[42px]'>
            <FontAwesomeIcon className='w-[22px] my-3 ' icon={faLocationDot} style={{ color: "#c5f82a" }} />
        </div>
        <div className='ml-3'>
            <h2 className='text-[#ffffff99]'>Address</h2>
            <h3 className='text-[#fff] text-[17px]'>Tbilisi,Georgia</h3>
        </div>

      </div>
        </div>
        <div className='bg-[#27272c] max-w-[700px]' >
            <div className='flex flex-col items-center gap-5 justify-center'>
                <h2 className='text-[#c5f82a] text-3xl leading-9'>Let's work together</h2>
                <p className=' min-w-[106px] max-w-[454px]  mx-8 text-[#ffffff99] text-[15px]'>Reach out, and let’s explore how we can create something exceptional together.</p>
            </div>
            <div>
    <div className='flex flex-col gap-6'>
        <form className='flex flex-col gap-6 justify-center items-center md:flex-row'>
            <input
                className='bg-[#1c1c22] text-[#ffffff99] text-white border py-[8px] px-[16px] text-left'
                type="text"
                placeholder='Firstname'
            />
            <input
                className='bg-[#1c1c22] text-[#ffffff99] text-white border py-[8px] px-[16px] text-left'
                type="text"
                placeholder='LastName'
            />
        </form>
        <form className='flex flex-col gap-6 justify-center items-center md:flex-row'>
            <input
                className='bg-[#1c1c22] text-[#ffffff99] text-white border py-[8px] px-[16px] text-left'
                type="text"
                placeholder='Email address'
            />
            <input
                className='bg-[#1c1c22] text-[#ffffff99] text-white border py-[8px] px-[16px] text-left'
                type="text"
                placeholder='Phone number'
            />
            
        </form>
        <div className='flex justify-center'>
            <textarea
                className='bg-[#1c1c22] w-[230px] h-[150px] md:w-[480px]  text-[#ffffff99] text-white border py-[8px] px-[16px] text-left'
                placeholder='Type your message here'
            />
        </div>
        <div className='flex justify-center items-center'>
        <button className='bg-[hsl(90,94%,57%)] py-2 px-4 rounded-3xl hover:bg-[rgba(162,210,61,0.8)] transition-colors duration-300'>
  Send Message
</button>

        </div>
        
    </div>
</div>


        </div>
        </div>
       
      
    </div>
  )
}
