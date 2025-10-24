import { selectedProject, unslugify } from "@/utils/function"
import Link from "next/link"

const DetailedProject = async ({params}) => {
    const {project} = await params
    const projectName = unslugify(project)
    const clickedProject = selectedProject(projectName)

    return (
        <div className="text-white grow align-items-center">
            <div className="flex justify-center">
            <Link href={clickedProject.link} target="_blank" className={`text-[#B4ADA3] text-3xl uppercase font-bold italic text-center m-8 mb-0`}>{clickedProject.title}</Link>
            </div>
            <div className="flex justify-center my-8">
                <video src={clickedProject.video} 
                        autoPlay
                        muted
                        playsInline
                        controls
                        className="w-[90%] md:w-[75%] h-auto ">
                </video>
            </div>
            <h3 className="font-bold text-2xl text-[#B4ADA3] m-4 mx-6">About the Project</h3>
            {clickedProject.description.map((item,index)=> 
                <div className="m-4 mx-8" key={index}>
                    <li className="mx-8 my-4 text-[16px] md:text-xl">{item}</li>
                </div>)
            }
        </div>
        
    )
}

export default DetailedProject