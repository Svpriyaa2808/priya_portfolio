import { projectArray } from "@/utils/data"
import { slugify } from "@/utils/function"
import Link from "next/link"
import Image from "next/image"
import { Uncial_Antiqua } from "next/font/google"

const unicalFont = Uncial_Antiqua({subsets : ["latin"],weight:"400"})

const ProjectPage = () => {
    return (
        <div className="grow text-center">
            <div className="text-white m-4 md:mx-12 mt-8 max-w-8xl text-[18px] md:text-[20px] text-justify">
                <p className="indent-14 m-4 mx-4 md:mx-8">As a frontend development student, I've worked on a variety of projects as part of my coursework, focusing on building responsive, accessible, and user-friendly interfaces. 
                    Each project provided an opportunity to apply and strengthen my skills in HTML, CSS, JavaScript, and frontend frameworks like React. These projects showcase my ability to translate design 
                    concepts into functional web applications, follow best practices in frontend development, and continuously learn through hands-on experience.</p>
                <p  className="indent-14 m-4 mx-4 md:mx-8">Below are some of the key projects I completed during my course. They reflect my growth, problem-solving skills, and attention to detail as an aspiring frontend developer.</p>
            </div> 
            <div className="flex flex-col sm:flex-row m-4 sm:flex-wrap  justify-around">
            {projectArray.map((item,index)=>
                <Link href={`project/${slugify(item.title)}`}   key={index} className="m-4 basis-[40%] justify-items-center ">
                <h3 className={`m-6 font-extrabold text-[20px] lg:text-2xl ${unicalFont.className} uppercase text-[#B4ADA3]`}>{item.title}</h3>
                <Image src={item.mobileImage} alt={item.title} width={300} height={300} sizes="100vw" className="w-[75%] md:w-[50%] lg:w-[40%] h-auto border-2  rounded-2xl header-hover" />
                </Link>
            )}
            </div>
        </div>
    )
}

export default ProjectPage