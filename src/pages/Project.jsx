import React from "react";

const Project = () => {
  return (
    <>
      <section
        id="project"
        className="
          mt-30 w-full 
          scroll-mt-40
          md:mt-20 
          lg:mt-25
        "
      >
        <h1
          className="
            text-[#b64754] text-2xl font-bold text-center
            dark:text-pink-200 underline underline-offset-8
            md:text-4xl
          "
        >
          Projects
        </h1>
        <div
          className="
             grid grid-cols-1 lg:grid-cols-2
          mt-10   px-5
          gap-10 justify-items-center
           lg:mt-10  lg:px-40 md:py-10
          "
        >
          <div
            className="
              pt-5 p-5 
              text-[#6b1330] text-[15px]
              bg-[#fcd7de] from-[#fcd7de] to-[#ca8890]
              border-[#6b1330] rounded-2xl
              shadow-[0_2px_10px_#121212] transition-transform dark:border
              dark:border-[#f883aa] dark:bg-linear-120 dark:from-[#423036] dark:to-[#423036] dark:text-[#e7bac9] hover:-translate-y-2 duration-300 dark:shadow-[0_5px_15px_#000]
              md:p-10 md:text-[#6b1330] bg-linear-120
               lg:p-5
            "
          >
            <h1
              className="
                mb-5
                font-bold text-xl text-center text-[#6b1330]
                dark:text-pink-200
                md:text-[#6b1330]
              "
            >
              🌸 Bloom and Dine
            </h1>
            <p>
              A modern restaurant website crafted with soft visuals, smooth
              animations, and a calm, welcoming layout that enhances the dining
              experience.
            </p>

            <h2
              className="
                my-3
              "
            >
              <b>Tools</b>: HTML, CSS, JavaScript
            </h2>

            <p>
              Learned how to animate elements and create warm, user-friendly
              interfaces.
            </p>
            <div
              className="
                flex
                mt-4
                justify-start
              "
            >
              <a
                href="https://cateringproject.netlify.app/"
                target="_new"
                className="
                  px-3 py-2
                  text-[#6b1330] font-semibold
                  bg-pink-200
                  border rounded-xl
                "
              >
                🌸 Visit Site
              </a>
            </div>
          </div>
          <div
            className="
              pt-5 p-5 
              text-[#6b1330] text-[15px]
              bg-[#fcd7de] from-[#fcd7de]  to-[#ca8890]
              border-[#6b1330] rounded-2xl dark:bg-linear-120 dark:from-[#423036] dark:to-[#423036] dark:border
              shadow-[0_2px_10px_#121212] transition-transform
              dark:border-[#f883aa] dark:bg-[#423036] dark:text-[#e7bac9] hover:-translate-y-2
               duration-300 dark:shadow-[0_5px_20px_#000]
              md:p-10 md:text-[#6b1330] bg-linear-130 to-80%
              lg:p-5 
            "
          >
            <h1
              className="
                mb-5
                font-bold text-xl text-center text-[#6b1330]
                dark:text-pink-200
                md:text-[#6b1330]
              "
            >
              ✨ Personal Portfolio
            </h1>
            <p>
              A minimal and aesthetic personal portfolio showcasing my skills,
              projects, and design sense with a focus on clean layouts and
              smooth user experience.
            </p>

            <h2
              className="
                my-3
              "
            >
              <b>Tools</b>: React, Tailwind CSS, JavaScript
            </h2>

            <p>
              Learned responsive design, dark mode theming, and scroll-based
              interactions.
            </p>
            <div
              className="
                flex
                mt-5
                justify-center
              "
            >
              <a
                href="https://cateringproject.netlify.app/"
                target="_new"
                className="
                  hidden
                  px-3 py-2
                  text-[#6b1330] font-semibold
                  bg-pink-200
                  border rounded-xl
                "
              >
                🌸 Visit Site
              </a>
            </div>
          </div>
          <div
            className="
              hidden
              pt-5 p-5
              text-[#6b1330] text-[15px]
              bg-[#fcd7de]
              border border-[#6b1330] rounded-2xl
              shadow-2xl transition-transform
              dark:border-[#f883aa] dark:bg-[#ffb3c1] dark:text-[#6b1330] hover:-translate-y-2 duration-300
              md:p-10 md:text-pink-200 md:bg-[#4d2429]
              lg:p-7
            "
          >
            <h1
              className="
                mb-5
                font-bold text-xl text-center text-[#6b1330]
                dark:text-[#6b1330]
                md:text-pink-200
              "
            >
              🌸 Bloom and Dine
            </h1>
            <p>
              A modern restaurant website crafted with soft visuals, smooth
              animations, and a calm, welcoming layout that enhances the dining
              experience.
            </p>

            <h2
              className="
                my-3
              "
            >
              <b>Tools</b>: HTML, CSS, JavaScript
            </h2>

            <p>
              Learned how to animate elements and create warm, user-friendly
              interfaces.
            </p>
            <div
              className="
                flex
                mt-5
                justify-center
              "
            >
              <a
                href="https://cateringproject.netlify.app/"
                target="_new"
                className="
                  px-3 py-2
                  text-[#6b1330] font-semibold
                  bg-pink-200
                  border rounded-xl
                "
              >
                🌸 Visit Site
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
