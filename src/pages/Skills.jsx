import React from "react";

const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="
          mt-30 w-full 
          scroll-mt-40
          md:mt-20
          lg:mt-25 lg:scroll-mt-50
        "
      >
        <h1
          className="
            text-[#b64754] text-2xl font-bold text-center
            dark:text-pink-200 underline underline-offset-6
            md:text-4xl
          "
        >
          Skills
        </h1>
        <div
          className="
          grid grid-cols-1 lg:grid-cols-3 
          mt-10 px-5
          gap-10 text-center
           lg:px-10 md:py-10 lg:mt-10  
          
         
          "
        >
          <div
            className="
              p-5 md:py-15 lg:py-5
              text-[#6b1330] text-sm md:text-base
              bg-linear-120 from-[#fcd7de] to-[#ca8890]
              rounded-[5px_30px_5px_30px] dark:bg-linear-120 dark:from-[#4d383e] dark:to-[#4d383e]
              transition-transform shadow-[0_2px_10px_#121212] dark:border dark:border-[#f883aa]
              duration-300 hover:scale-105 hover:bg-[#4d2429] dark:bg-[#f5bbcb] hover:dark:bg-[#3d272d] hover:rounded-[5px_30px_5px_30px]   dark:text-[#e7bac9] dark:shadow-[0_5px_15px_#000]
            "
          >
            <h1
              className="
                mb-5
                font-bold dark:text-pink-200
              "
            >
              ✨ Frontend Development
            </h1>
            <p
              className="
             
              "
            >
              I enjoy building clean, interactive, and responsive interfaces.
              Using React, HTML, CSS, Tailwind, and JavaScript, I focus on
              user-friendly designs that work across devices.
            </p>
          </div>
          <div
            className="
              p-5 md:py-15 lg:py-5
              text-[#6b1330] text-sm md:text-base
              bg-linear-120 from-[#fcd7de] to-[#ca8890]
              rounded-[5px_30px_5px_30px] dark:bg-linear-120 dark:from-[#4d383e] dark:to-[#4d383e]
              transition-transform shadow-[0_2px_10px_#121212] dark:border dark:border-[#f883aa]
              duration-300 hover:scale-105 hover:bg-[#4d2429] dark:bg-[#f5bbcb] hover:dark:bg-[#3d272d] hover:rounded-[5px_30px_5px_30px]   dark:text-[#e7bac9] dark:shadow-[0_5px_15px_#000]
            "
          >
            <h1
              className="
                mb-5
                font-bold dark:text-pink-200
              "
            >
              ⚡ Backend Development
            </h1>
            <p
              className="
               
              "
            >
              I like creating efficient and reliable server-side solutions. With
              Node, Express, MongoDB, and REST APIs, I ensure the applications
              run smoothly and handle data effectively.
            </p>
          </div>
          <div
            className="
              p-5 md:py-15 lg:py-5
              text-[#6b1330] text-sm md:text-base
              bg-linear-120 from-[#fcd7de] to-[#ca8890]
              rounded-[5px_30px_5px_30px] dark:bg-linear-120 dark:from-[#4d383e] dark:to-[#4d383e]
              transition-transform shadow-[0_2px_10px_#121212] dark:border dark:border-[#f883aa]
              duration-300 hover:scale-105 hover:bg-[#4d2429] dark:bg-[#f5bbcb] hover:dark:bg-[#3d272d] hover:rounded-[5px_30px_5px_30px]   dark:text-[#e7bac9] dark:shadow-[0_5px_15px_#000]
            "
          >
            <h1
              className="
                mb-5 
                font-bold dark:text-pink-200
              "
            >
              🛠️ Tools & Workflow
            </h1>
            <p
              className="
               
              "
            >
              I rely on Git, GitHub, VS Code, Postman, and NPM to stay
              organized, collaborate easily, and deliver projects efficiently.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
