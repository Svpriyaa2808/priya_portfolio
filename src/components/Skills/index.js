const Skills = () => {
    return (
      <div className="m-4 mt-10 " >
        <h3 className="text-4xl text-[#B4ADA3] font-bold">Skills</h3>
        <div className="flex flex-wrap md:flex-row justify-evenly mt-4 ml-4">
          <div className="m-4 sm:mx-8 md:m-4 text-center">
            <h4 className=" font-bold text-[18px] lg:text-[20px] underline">Programming</h4>
            <div className="mt-2 text-[16px] lg:text-[18px]">
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>Typescript</p>
            </div>
          </div>

          <div className="m-4 sm:mx-8 md:m-4 text-center">
            <h4 className=" font-bold text-[18px] lg:text-[20px] underline">Frontend</h4>
            <div className=" mt-2 text-[16px] lg:text-[18px]" >
              <p>Reactjs</p>
              <p>Nextjs</p>
              <p>TailwindCSS</p>
              <p>SASS</p>
              <p>MUI</p>
            </div>
          </div>
       
          <div className="m-4 sm:mx-8 md:m-4 text-center">
            <h4 className=" font-bold text-[18px] lg:text-[20px] underline">Backend</h4>
            <div className=" mt-2 text-[16px] lg:text-[18px]" >
              <p>Nodejs</p>
              <p>Express</p>
              <p>Supabase</p>
              <p>PostgreSQL</p>
            </div>
          </div>


          <div className="m-4 sm:mx-8 md:m-4 text-center">
            <h4 className=" font-bold text-[18px] lg:text-[20px] underline">Tools</h4>
            <div className=" mt-2 text-[16px] lg:text-[18px]">
              <p>Git/GitHub</p>
              <p>Vercel</p>
              <p>Tanstack</p>
              <p>Jest</p>
            </div>
          </div>

        </div>
      </div>

    )
}

export default Skills