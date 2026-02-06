import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import dotenv from "dotenv"
dotenv.config()

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.EMAILJS_SERVICE_ID,
        import.meta.env.TEMPLATE_ID,
        form.current,
         import.meta.env.PUBLIC_KEY,
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success(
            `Thanks for reaching out 💌, Your message is on its way.`,
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
            },
          );
        },
        (error) => {
          toast.error("Error in sending message", error);
          toast.error("something went wrong , try again later!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        },
      );
  };
  return (
    <>
      <section
        id="contact"
        className="
          mt-20
          scroll-mt-20 max
          md:mt-30
          lg:mt-20 lg:p-5 lg:scroll-mt-15
        "
      >
        <ToastContainer style={{ zIndex: 99999 }}
  limit={1}
  newestOnTop
        />
        <div
          className="
            mx-auto
            text-center
            lg:max-w-3xl
          "
        >
          <h1
            className="
              text-[#b64754] text-2xl font-bold text-center
              dark:text-pink-200 underline underline-offset-6
              md:text-4xl
            "
          >
            Let’s Connect
          </h1>
          <h1
            className="
              px-5 mt-10
              text-[#b64754] text-[14px] text-center
              ms:px-0 dark:text-pink-200
              md:text-xl
            "
          >
            A simple message is enough. <br /> I’m always open to meaningful
            conversations and new ideas.
          </h1>
          <div
            className="
              px-10 py-5 mx-auto
              text-[#6b1330] text-sm
              dark:text-pink-200
              md:w-2xl md:mt-10 md:text-xl
            "
          >
            {/* <div
              className="
                grid
                gap-5
                md:grid-cols-2
              "
            >
              <div
                className="
                  flex flex-col
                  md:gap-3
                "
              >
                <h1>Your Name</h1>
                <input
                  type="text"
                  name=""
                  id=""
                  className="
                    px-5
                    text-sm
                    border-b border-b-[#6b1330]
                    outline-none
                  "
                />
              </div>
              <div
                className="
                  flex flex-col
                  md:gap-3
                "
              >
                <h1>Your Email</h1>
                <input
                  type="text"
                  name=""
                  id=""
                  className="
                    px-5
                    text-sm
                    border-b border-b-[#6b1330]
                    outline-none
                  "
                />
              </div>
            </div> */}
            <form
              ref={form}
              onSubmit={sendMail}
              className="
                space-y-2
              "
            >
              <div
                className="
                  flex flex-col
                  md:flex-row md:gap-10
                "
              >
                <div
                  className="
                    w-full
                    text-left
                  "
                >
                  <label
                    className="

                    "
                  >
                    <h1>Your Name</h1>
                  </label>
                  <input
                    type="text"
                    name="userName"
                    id=""
                    required
                    className="
                      w-full
                      px-1 mt-4
                      text-sm text-[#6d3f4e]
                      border-b border-b-[#6b1330]
                      dark:text-[#fab5cc] focus:outline-none dark:border-b-pink-200
                      md:text-[18px] md:dark:text-[#facedd]
                    "
                  />
                </div>
                <div
                  className="
                    w-full
                    mt-5
                    text-left
                    md:mt-0
                  "
                >
                  <label
                    className="

                    "
                  >
                    <h1>Your Email</h1>
                  </label>
                  <input
                    type="email"
                    name="userEmail"
                    id=""
                    required
                    className="
                      w-full
                      px-1 mt-4
                      text-sm text-[#6d3f4e]
                      border-b border-b-[#6b1330]
                      dark:text-[#fab5cc] focus:outline-none dark:border-b-pink-200
                      md:text-[18px] md:dark:text-[#facedd]
                    "
                  />
                </div>
              </div>
              <div
                className="
                  w-full
                  mt-5
                  text-left
                "
              >
                <label>
                  <h1>Your Message</h1>
                </label>
                <input
                  type="text"
                  name="message"
                  id=""
                  className="
                    hidden
                    w-full
                    px-1 mt-4
                    text-sm text-[#6d3f4e] font-mono
                    border-b border-b-[#6b1330]
                    outline-none dark:border-b-pink-200 dark:text-[#fab5cc]
                    md:block md:text-[18px] md:dark:text-[#facedd]
                  "
                />
                <textarea
                  name="message"
                  id=""
                  rows={4}
                  className="
                    w-full
                    mt-3 p-3
                    text-sm text-[#6d3f4e]
                    rounded-xl border border-[#6b1330]
                    resize-none
                    dark:border-pink-200 focus:outline-none focus:border-[#6b1330] dark:focus:border-pink-200 dark:text-[#fab5cc]
                    md:hidden md:p-5
                  "
                ></textarea>
              </div>
              <div
                className="
                  mt-5
                  text-center
                  md:mt-15
                "
              >
                <button
                  type="submit"
                  className="
                    py-2 px-10
                    bg-linear-150 from-[#f397ab] to-[#efbdf0]
                    rounded-full
                    cursor-pointer transition-all shadow-[0_3px_5px_#000]
                    outline-none duration-300 dark:shadow-[0_3px_5px_#000] dark:text-[#4d2429] to hover:opacity-80
                    md:px-15 md:text-[18px]
                  "
                >
                  Send a message
                </button>
              </div>
            </form>
          </div>
          <div
            className="
              mt-3 p-5
              lg:p-0
            "
          >
            <div
              className="
                w-full
                p-3
                text-center text-[#4d2429]
                bg-linear-120 from-[#fcd7de] to-[#ca8890]
                border-0 rounded-2xl
                shadow-[0_3px_5px_#000]
                dark:bg-bg-120 dark:from-[#4d383e] dark:to-[#4d383e] dark:text-pink-200 dark:border-0 dark:shadow-[0_3px_5px_#000]
                md:w-100 md:mx-auto md:p-5
              "
            >
              <h1
                className="

                "
              >
                You can reach me at <a href="">bhavya@gmail.com</a>
              </h1>
              <p
                className="
                  mt-3
                  text-[12px]
                  md:mt-4 md:text-sm
                "
              >
                🌼 Crafted with care by{" "}
                <span
                  className="

                  "
                >
                  Bhavya
                </span>{" "}
                — 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
