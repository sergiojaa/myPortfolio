
import Image from 'next/image'
import { GoArrowUpRight } from "react-icons/go";

import { FaGithub } from "react-icons/fa";

export default function Work() {
    return (
        <div className='flex mb-20 flex-col gap-10 mt-7'>
            <div className='flex md:flex-row-reverse  mt-10 max-w-[825px] mx-auto flex-col gap-5 items-center justify-center'>
                <div className="flex justify-center">
                    <Image
                        width={300}
                        height={50}
                        alt="colaboration project image"
                        src="/colab.jpg"
                        className="w-full lg:px-0 px-5 sm:w-[300px] h-[350px]  lg:w-[450px]"
                    />
                </div>
                <div className='flex px-4 lg:px-0 flex-col gap-3'>
                    <h2 className='text-6xl text-white'>01</h2>
                    <p className='text-3xl text-white'>Front-End Project</p>
                    <p className='text-[#ffffff99] w-full max-w-[505px]'>Collaborated on a team project to develop a full-featured e-commerce platform with user authentication, product descriptions, cart and wishlist functionality, ensuring a seamless shopping experience with an intuitive and responsive design.</p>
                    <div className='flex mt-3 text-[#C5F82A] gap-2'>
                        <p>Next.js,</p>
                        <p>Typescript,</p>
                        <p>tailwind.css</p>

                    </div>
                    <div className='flex gap-5'>
                        <div className='bg-[#FFFFFF0D] cursor-pointer rounded-3xl max-w-max px-3 py-3'>
                            <a href="https://github.com/sergiojaa/ecommerce-website-colab" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={25} color="white" />
                            </a>
                        </div>
                        <div className='bg-[#FFFFFF0D] cursor-pointer rounded-3xl max-w-max px-3 py-3'>
                            <a href="https://ecommerce-colab.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <GoArrowUpRight size={25} color="white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex md:flex-row-reverse  mt-10 max-w-[825px] mx-auto flex-col gap-5 items-center justify-center'>
                <div className="flex justify-center">
                    <Image
                        width={300}
                        height={50}
                        alt="mkoia page"
                        src="/faqq-accordion.png"
                        className="w-full lg:px-0 px-4 sm:w-[300px] h-[350px]  lg:w-[550px]"
                    />
                </div>
                <div className='flex px-4 lg:px-0 flex-col gap-3'>
                    <h2 className='text-6xl text-white'>02</h2>
                    <p className='text-3xl text-white'>Front-End Project</p>
                    <p className='text-[#ffffff99] w-full max-w-[505px]'>Built a responsive Card Rating App with Next.js, allowing users to easily rate cards across different categories. The app features a clean design, fast performance, and smooth user interaction on all devices.</p>
                    <div className='flex mt-3 text-[#C5F82A] gap-2'>
                        <p>Next.js,</p>
                        <p>Typescript,</p>
                        <p>tailwind.css</p>

                    </div>
                    <div className='flex gap-5'>
                        <div className='bg-[#FFFFFF0D] cursor-pointer rounded-3xl max-w-max px-3 py-3'>
                            <a href="https://github.com/sergiojaa/faq-accordion-app" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={25} color="white" />
                            </a>
                        </div>
                        <div className='bg-[#FFFFFF0D] cursor-pointer rounded-3xl max-w-max px-3 py-3'>
                            <a href="https://faq-accordion-app-three.vercel.app/" target='_blank' rel='noopener noreferrer'>
                                <GoArrowUpRight size={25} color="white" />

                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex md:flex-row-reverse  mt-10 max-w-[825px] mx-auto flex-col gap-5 items-center justify-center'>
                <div className="flex justify-center">
                    <Image
                        width={300}
                        height={50}
                        alt="mkoia page"
                        src="/rating.png"
                        className="w-full lg:px-0 px-4 sm:w-[300px] h-[350px]  lg:w-[550px]"
                    />
                </div>
                <div className='flex px-4 lg:px-0 flex-col gap-3'>
                    <h2 className='text-6xl text-white'>03</h2>
                    <p className='text-3xl text-white'>Front-End Project</p>
                    <p className='text-[#ffffff99] w-full max-w-[505px]'>Created a sleek, responsive website for Mkoia using Next.js, showcasing the company’s services, with an intuitive layout, fast loading speeds, and seamless navigation, ensuring a user-friendly experience across all devices.</p>
                    <div className='flex mt-3 text-[#C5F82A] gap-2'>
                        <p>React.js,</p>
                        <p>Typescript,</p>
                        <p>tailwind.css</p>

                    </div>
                    <div className='flex gap-5'>
                        <div className='bg-[#FFFFFF0D] cursor-pointer rounded-3xl max-w-max px-3 py-3'>
                            <a href="https://github.com/sergiojaa/interactive-rating-component-react" target='_blank' rel="noopener noreferrer">
                                <FaGithub size={25} color="white" />

                            </a>
                        </div>
                        <div className='bg-[#FFFFFF0D] cursor-pointer rounded-3xl max-w-max px-3 py-3'>
                            <a href="https://interactive-rating-component-react-1ize.vercel.app/" target='_blank' rel="noopener noreferrer">
                                <GoArrowUpRight size={25} color="white" />

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
