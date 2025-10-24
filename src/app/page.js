import Image from "next/image";
import Link from "next/link";
import MyImage from '../../public/images/priya.jpg'
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="text-white m-4 grow">
      <div className="flex flex-col md:flex-row mt-4">
        <div className="basis-[40%] ">
          <p className="text-xl m-4 lg:m-8 px-8">Hey, I'm <span className="text-[#B4ADA3] font-bold">Priya</span> 👋🏻</p>
          <h1 className="text-3xl md:text-5xl font-bold text-center m-2 mt-6">Frontend Developer</h1>
          <p className=" md:text-[16px] lg:text-xl m-8 px-0 md:px-8">I'm a Front-End Development student . I'm reaching out to see if your team might be open to taking on a front-end development intern</p>
          
          <div className="flex flex-col sm:flex-row lg:flex-row md:flex-col m-8 px-8 pt-4 gap-4 items-center justify-center lg:justify-start ">
            <Link href='/project' className="button header-hover max-w-[150px]">Browse Projects</Link>
            <Link href="https://drive.google.com/file/d/1R-N6YcgSeO56GPtEA-_kcGU1ZIZdj7Nt/view?usp=sharing" target="_blank" className="button header-hover max-w-[150px]">
                My Resume
            </Link>
          </div>
        </div>
          
        <div className="basis-[60%] md:mt-4 flex justify-center items-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white ">
            <Image src={MyImage} alt="Priya" width={320} height={320} className="object-cover w-full h-full"/>
          </div>
        </div>
      </div>
      <Skills />
      <div>
        <AboutMe />
      </div>
    </div>
  );
}
