import Image from "next/image";
import Header from "./components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,faInstagram  } from '@fortawesome/free-brands-svg-icons';
import me from './assets/me.jpg'

export default function Home() {
  return (
    <div>
          <div className="lg:flex justify-around flex-row-reverse" >
      <div className="flex justify-center items-center rounded-3xl">
        <Image src={me} className="w-[200px] lg:mr-10 lg:w-[300px] rounded-3xl mb-6"  alt="me"/>
      </div>
   <div className="flex flex-col lg:ml-10 lg:mt-9 lg:items-start justify-center  items-center">
  <h3 className="text-white text-xl leading-7">Front-End developer</h3>
  <h1 className="text-white py-4 lg:text-[50px] text-4xl font-semibold leading-[1.1]">
    Hello I'm <span className="text-[#c5f82a]"> <br /> Sergi Kaliashvili</span>
  </h1>
  <p className="w-[290px] md:w-[500px]  pb-6  pr-4 text-[#b1bfdd] leading-8">
    I excel at crafting sleek and user-friendly digital experiences. With expertise in various programming languages and technologies, I bring creative ideas to life through efficient and engaging solutions.
  </p>
  <div className="lg:flex items-center gap-5 ">
  <button className="text-[#c5f82a] border border-[#c5f82a] py-2 px-10 rounded-3xl hover:bg-[#c5f82a] hover:text-black transition">
  DOWNLOAD CV
</button>
<div className="flex items-center justify-center gap-3 mt-5 lg:mt-0">
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
<div className="flex mt-8 md:mt-16 justify-center items-center md:gap-8 lg:gap-32 lg:mt-28 md:flex-row md:justify-center md:items-center flex-col gap-5">
    <div className="text-white w-[150px] gap-4  justify-center flex items-center">
      <h3 className="text-3xl lg:text-[45px]  font-bold">3</h3>
      <h4 >years of experience</h4>
    </div>
    <div className="text-white w-[150px] gap-4 justify-center flex items-center">
      <h3 className="text-3xl lg:text-[45px]  font-bold">4</h3>
      <h4 >Projects completed</h4>
    </div>
    <div className="text-white w-[150px] gap-4 justify-center flex items-center">
      <h3 className="text-3xl lg:text-[45px] font-bold">6</h3>
      <h4 >Technologies mastered</h4>
    </div>
    <div className="text-white w-[150px] gap-4 justify-center flex items-center">
      <h3 className="text-3xl lg:text-[45px]  font-bold">999</h3>
      <h4 >Total commits</h4>
    </div>
  </div>
    </div>


  );
}
