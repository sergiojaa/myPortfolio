import Image from "next/image";
import Header from "./components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,faInstagram  } from '@fortawesome/free-brands-svg-icons';


export default function Home() {
  return (
    <div  >
   <div className="flex flex-col lg:items-start justify-center items-center text-center">
  <h3 className="text-white text-xl leading-7">Front-End developer</h3>
  <h1 className="text-white p-3 text-4xl font-semibold leading-[1.1]">
    Hello I'm <span className="text-[#c5f82a]"> <br /> Sergi Kaliashvili</span>
  </h1>
  <p className="w-[290px] md:w-[500px] p-3 pb-6 pl-4 pr-4 text-[#b1bfdd] leading-8">
    I excel at crafting sleek and user-friendly digital experiences. With expertise in various programming languages and technologies, I bring creative ideas to life through efficient and engaging solutions.
  </p>
  <div className="lg:flex items-center gap-5 ">
  <button className="text-[#c5f82a] border border-[#c5f82a] py-2 px-10 rounded-3xl hover:bg-[#c5f82a] hover:text-black transition">
  DOWNLOAD CV
</button>
<div className="flex gap-3 mt-5 lg:mt-0">
<FontAwesomeIcon  icon={faGithub} 
  className="w-[35px] text-[#c5f82a] cursor-pointer border-[#c5f82a] border py-[7px] px-[7px] rounded-3xl hover:bg-[#c5f82a] hover:text-black transition"
/>
<FontAwesomeIcon icon={faLinkedin} 
  className="w-[35px] text-[#c5f82a] cursor-pointer border-[#c5f82a] border py-[7px] px-[7px] rounded-3xl hover:bg-[#c5f82a] hover:text-black transition"
  />
<FontAwesomeIcon icon={faInstagram} 
  className="w-[35px] text-[#c5f82a] cursor-pointer border-[#c5f82a] border py-[7px] px-[7px] rounded-3xl hover:bg-[#c5f82a] hover:text-black transition"
  />


</div>
  </div>
  

</div>

    </div>
  );
}
