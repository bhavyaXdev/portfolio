import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setloading] = useState(false);
  const [isMobile, setMobile] = useState(window.innerWidth < 1024);

  const sendMail = (e) => {
    e.preventDefault();
    setloading(true);

    emailjs
      .sendForm(
        "service_5azyhdt",
        "template_15z0mln",
        form.current,
        "m_l3nns-z-IfGFm6w",
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();

          toast.success(
            `Thanks for reaching out 💌, Your message is on its way.`,
          );
        },
        (error) => {
          toast.error("Error in sending message", error);
        },
      )
      .finally(() => {
        setloading(false);
      });
  };
  return (
    <>
      <Toaster
        position={isMobile ? "top-center" : "top-right"}
        toastOptions={{
          duration: 5000,
          style: {
            borderRadius: "14px",
            marginTop: `${isMobile ? "70px" : "0px"}`,
          },
        }}
      />
      <section
        id="contact"
        className="
          mt-30 w-full
          scroll-mt-40 max
          md:mt-30
          lg:mt-20 lg:p-5 lg:scroll-mt-15
        "
      >
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
                  
                    w-full
                    px-1 mt-4
                    text-sm text-[#6d3f4e] font-mono
                    border-b border-b-[#6b1330]
                    outline-none dark:border-b-pink-200 dark:text-[#fab5cc]
                   hidden md:block md:text-[18px] md:dark:text-[#facedd]
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
                  disabled={loading}
                  className={`
                    py-2 w-45 md:w-55
                    bg-linear-150 from-[#f397ab] to-[#efbdf0]
                    rounded-full
                    cursor-pointer transition-all shadow-[0_3px_5px_#000]
                    outline-none duration-300 dark:shadow-[0_3px_5px_#000] dark:text-[#4d2429] to hover:opacity-80
                     md:text-[18px]
                   ${loading ? "opacity-60 cursor-not-allowed" : "hover-opacity-80"}`}
                >
                  {loading ? "Sending..." : "Send a message 💌"}
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
                p-3 border-0
                text-center text-[#4d2429]
                bg-linear-120 from-[#fcd7de] to-[#ca8890]
                 rounded-2xl
                shadow-[0_3px_5px_#000]
                dark:bg-bg-120 dark:from-[#4d383e] dark:to-[#4d383e] dark:text-pink-200 dark:border-0 dark:shadow-[0_3px_5px_#000]
                md:w-sm md:mx-auto md:p-5
              "
            >
              <h1
                className="

                "
              >
                You can reach me at <a href="">bhavya512500@gmail.com</a>
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
