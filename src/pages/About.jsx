
const About = () => {
    
  return (
    <section
      id="about"
      className="
      
     w-full
         scroll-mt-30 md:mt-30 lg:scroll-mt-40  mt-20
    
      "
    >
      <h1
        className="
          text-[#b64754] text-2xl font-bold text-center
          dark:text-pink-200 underline underline-offset-6
          md:text-4xl
        "
      >
        About Me
      </h1>
      <div
        className="
         grid grid-cols-1 lg:grid-cols-3 
          mt-10 px-5
          gap-10
           lg:px-10 md:py-10 lg:mt-10 
        "
      >
        <div
          className="
            p-5 md:p-15 lg:p-5 bg-linear-150 from-[#f3aebd] from-15%  to-[#efbdf0] to-99% 
             dark:bg-linear-150 dark:from-[#4d383e] dark:to-[#4d383e]
            text-center  dark:border dark:shadow-[0_5px_15px_#000] 
            rounded-2xl border border-[#b64754] 
            shadow-[0_2px_10px_#121212] transition-transform text-sm md:text-base
            dark:border-[#f883aa] duration-300 hover:scale-105 text-[#6b1330]
          "
        >
          <h1
            className="
              mb-5
               font-bold dark:text-pink-200
            "
          >
            🌼 Who I Am
          </h1>
          <p
            className="
              
              dark:text-[#e7bac9] 
            "
          >
            {" "}
            I’m a web developer who enjoys building calm, thoughtful digital
            experiences. I’m drawn to simplicity, clarity, and interfaces that
            feel intuitive and warm. For me, good design is quiet, intentional,
            and meaningful.
          </p>
        </div>
        <div
          className="
            p-5 md:p-15 lg:p-5 bg-linear-150 from-[#f3aebd] from-15%  to-[#efbdf0] to-99%
            text-center  dark:bg-linear-150 dark:from-[#4d383e] dark:to-[#4d383e] dark:border
            rounded-2xl border border-[#b64754] dark:shadow-[0_5px_15px_#000]
            shadow-[0_2px_10px_#121212] transition-transform text-sm md:text-base dark:text-[#e7bac9] 
            dark:border-[#f883aa] duration-300 hover:scale-105 text-[#6b1330]
          "
        >
          <h1
            className="
              mb-5
              font-bold  dark:text-pink-200
            "
          >
            🎨 What I Build
          </h1>
          <p
            className="
              
              
            "
          >
            I love crafting clean, responsive interfaces using modern web
            technologies. Working with React and Tailwind CSS, I focus on
            layouts, details, and interactions that feel smooth and
            effortless—where design and functionality blend naturally.
          </p>
        </div>
        <div
          className="
            p-5 md:p-15 lg:p-5 bg-linear-150 from-[#f3aebd] from-15%  to-[#efbdf0] to-99%
            text-center  dark:bg-linear-150 dark:from-[#4d383e] dark:to-[#4d383e] dark:border
            rounded-2xl border border-[#b64754] dark:shadow-[0_5px_15px_#000]
            shadow-[0_2px_10px_#121212] transition-transform text-sm md:text-base
            dark:border-[#f883aa] duration-300 hover:scale-105 text-[#6b1330] dark:text-[#e7bac9] 
          "
        >
          <h1
            className="
              mb-5
              font-bold  dark:text-pink-200
            "
          >
            ✨ How I Grow
          </h1>
          <p
            className="
              
              
            "
          >
            I believe growth comes from patience and consistency. I enjoy
            learning step by step, refining my skills through real projects, and
            improving with every iteration. I approach development with
            curiosity, care, and a steady desire to do better.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
