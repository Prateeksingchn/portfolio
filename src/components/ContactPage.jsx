import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Cursor from "./Cursor";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function ContactPage() {
  const [formData, setFormData] = useState({
    projectType: "",
    interestedIn: "",
    budget: "",
    name: "",
    email: "",
    projectDescription: "",
  });

  const { cursorJSX, handleInputFocus, handleInputBlur } = Cursor();

  const scrollRef = useRef(null);

  const [openFAQ, setOpenFAQ] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      class: "is-revealed",
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  useEffect(() => {
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.addEventListener("focus", handleInputFocus);
      input.addEventListener("blur", handleInputBlur);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", handleInputFocus);
        input.removeEventListener("blur", handleInputBlur);
      });
    };
  }, [handleInputFocus, handleInputBlur]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const FAQItem = ({ question, answer, index }) => {
    return (
      <div
        className={`border-b ${
          isDarkMode ? "border-gray-300" : "border-gray-300"
        }`}
      >
        <button
          className="w-full py-6 pr-4 text-left flex justify-between items-center focus:outline-none"
          onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
        >
          <span className="text-xl font-light">{question}</span>
          <span className="text-2xl">{openFAQ === index ? "−" : "+"}</span>
        </button>
        <AnimatePresence>
          {openFAQ === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="pb-6">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const faqData = [
    {
      question: "What type of projects do you take on?",
      answer:
        "I specialize in web development projects, including responsive websites, web applications, and e-commerce solutions.",
    },
    {
      question: "Do you also do brand design, illustrations and copywriting?",
      answer:
        "While my primary focus is web development, I can collaborate with specialists in brand design, illustration, and copywriting to deliver a comprehensive solution for your project.",
    },
    {
      question: "What is your process and approach?",
      answer:
        "My process involves understanding your requirements, creating a project plan, iterative development with regular check-ins, and thorough testing before delivery.",
    },
    {
      question: "Are you a full-stack developer?",
      answer:
        "Yes, I am proficient in both front-end and back-end technologies, allowing me to handle all aspects of web development.",
    },
    {
      question: "Are you proficient in Webflow?",
      answer:
        "While I primarily work with custom code solutions, I am familiar with Webflow and can work with it if required for your project.",
    },
    {
      question: "What do you need to get started?",
      answer:
        "To get started, I need a clear project brief, including your goals, target audience, desired features, and any design preferences. We can discuss these details in our initial consultation.",
    },
  ];

  return (
    <div
      className={`flex min-h-screen ${
        isDarkMode ? "bg-[#070707] text-white" : "bg-[#F5F5F5] text-[#000000]"
      } font-sans relative transition-colors duration-300`}
    >
      {cursorJSX}

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className={`absolute top-4 right-4 z-20 p-2 rounded-full ${
          isDarkMode ? "text-white" : "text-black"
        } transition-colors duration-300 focus:outline-none hover:opacity-80`}
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
      </button>

      {/* Navigation */}
      <div className="fixed top-10 left-10 z-10 w-1/4">
        <h2
          className={`text-[1.6rem] mb-5 font-[500] font-['roboto'] ${
            isDarkMode ? "text-white" : "text-[#000000]"
          }`}
        >
          Prateeksingchn
        </h2>
        <nav>
          <ul className="space-y-2 text-lg">
            {[
              { to: "/", label: "Home" },
              { to: "/projects", label: "Projects" },
              { to: "/about", label: "About me" },
              { to: "/contact", label: "Contact me" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`relative group flex items-center text-[1rem] font-light font-['roboto'] transition-colors ${
                    to === "/contact"
                      ? isDarkMode
                        ? "text-white"
                        : "text-[#000000]"
                      : isDarkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-[#000000]"
                  }`}
                >
                  {to === "/contact" && (
                    <span
                      className={`absolute left-[-20px] top-1/2 w-3 h-[2px] ${
                        isDarkMode ? "bg-white" : "bg-[#000000]"
                      } transform -translate-y-1/2`}
                    ></span>
                  )}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div ref={scrollRef} className="flex flex-col w-full">
        {/* Contact Section */}
        <div className="w-full flex">
          <div
            className={`w-1/4 p-8 border-r ${
              isDarkMode ? "border-[#d7cdcd71]" : "border-gray-300"
            }`}
          >
            {/* This empty div maintains the space for the fixed navigation */}
          </div>

          {/* Contact Form */}
          <div className="w-3/4 pt-32 pb-32">
            <div
              className={`border-b-2 ${
                isDarkMode ? "border-gray-200" : "border-gray-900"
              } pb-8 mb-20 px-6`}
            >
              <h1 className="text-8xl tracking-tight leading-[90px] font-['space_mono'] font-bold mb-4">
                Contact
              </h1>
              <p
                className={`text-xl mb-12 font-normal leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Interested in working with me?
                <br />
                Submit your project inquiry using the form below
              </p>
            </div>

            <form onSubmit={handleSubmit} className="px-6">
              <div className="space-y-20">
                {/* Project type section */}
                <div>
                  <p
                    className={`text-[1rem] mb-4 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    } uppercase tracking-wide`}
                  >
                    Project type
                  </p>
                  <div className="flex space-x-16">
                    {["Website", "Webapp", "Other"].map((type) => (
                      <label
                        key={type}
                        className="flex flex-col items-center cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="projectType"
                          value={type}
                          checked={formData.projectType === type}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span
                          className={`text-3xl ${
                            isDarkMode
                              ? "text-white group-hover:text-gray-300"
                              : "text-[#000000] group-hover:text-gray-600"
                          } transition-colors`}
                        >
                          {type}
                        </span>
                        <span
                          className={`block h-0.5 w-0 ${
                            isDarkMode ? "bg-white" : "bg-[#000000]"
                          } transition-all duration-300 ${
                            formData.projectType === type ? "w-full" : ""
                          }`}
                        ></span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Interested in section */}
                <div>
                  <p
                    className={`text-[1rem] ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    } mb-4 uppercase tracking-wide`}
                  >
                    Interested in...
                  </p>
                  <div className="flex space-x-12">
                    {["Design", "Development", "Design & dev"].map(
                      (interest) => (
                        <label
                          key={interest}
                          className="flex flex-col items-center cursor-pointer group"
                        >
                          <input
                            type="radio"
                            name="interestedIn"
                            value={interest}
                            checked={formData.interestedIn === interest}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <span
                            className={`text-3xl ${
                              isDarkMode
                                ? "text-white group-hover:text-gray-300"
                                : "text-[#000000] group-hover:text-gray-600"
                            } transition-colors`}
                          >
                            {interest}
                          </span>
                          <span
                            className={`block h-0.5 w-0 ${
                              isDarkMode ? "bg-white" : "bg-[#000000]"
                            } transition-all duration-300 ${
                              formData.interestedIn === interest ? "w-full" : ""
                            }`}
                          ></span>
                        </label>
                      )
                    )}
                  </div>
                </div>

                {/* Project budget section */}
                <div>
                  <p
                    className={`text-lg ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    } mb-4 uppercase tracking-wide`}
                  >
                    Project budget (USD)
                  </p>
                  <div className="flex space-x-12">
                    {["< 2k", "2-5k", "5-10k", "> 10k"].map((budget) => (
                      <label
                        key={budget}
                        className="flex flex-col items-center cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={budget}
                          checked={formData.budget === budget}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span
                          className={`text-2xl ${
                            isDarkMode
                              ? "text-white group-hover:text-gray-300"
                              : "text-[#000000] group-hover:text-gray-600"
                          } transition-colors`}
                        >
                          {budget}
                        </span>
                        <span
                          className={`block h-0.5 w-0 ${
                            isDarkMode ? "bg-white" : "bg-[#000000]"
                          } transition-all duration-300 ${
                            formData.budget === budget ? "w-full" : ""
                          }`}
                        ></span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name input */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    className={`w-full p-3 bg-transparent border-b-2 ${
                      isDarkMode
                        ? "border-gray-400 focus:border-gray-500"
                        : "border-gray-700 focus:border-gray-600"
                    } focus:outline-none text-2xl font-light transition-colors peer`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-0 -top-5 ${
                      isDarkMode ? "text-gray-200" : "text-gray-500"
                    } text-sm transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:${
                      isDarkMode ? "text-gray-400" : "text-gray-900"
                    } peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    } peer-focus:text-sm`}
                  >
                    Your name
                  </label>
                </div>

                {/* Email input */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    className={`w-full p-2 bg-transparent border-b-2 ${
                      isDarkMode
                        ? "border-gray-400 focus:border-gray-500"
                        : "border-gray-700 focus:border-gray-600"
                    } focus:outline-none text-xl font-light transition-colors peer`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-0 -top-3.5 ${
                      isDarkMode ? "text-gray-200" : "text-gray-500"
                    } text-sm transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:${
                      isDarkMode ? "text-gray-400" : "text-gray-900"
                    } peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    } peer-focus:text-sm`}
                  >
                    Your email
                  </label>
                </div>

                {/* Project description textarea */}
                <div className="relative">
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    rows="4"
                    className={`w-full p-2 bg-transparent border-b-2 ${
                      isDarkMode
                        ? "border-gray-400 focus:border-gray-500"
                        : "border-gray-700 focus:border-gray-600"
                    } focus:outline-none text-xl font-light transition-colors peer`}
                    placeholder=" "
                  ></textarea>
                  <label
                    htmlFor="projectDescription"
                    className={`absolute left-0 -top-3.5 ${
                      isDarkMode ? "text-gray-200" : "text-gray-500"
                    } text-sm transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:${
                      isDarkMode ? "text-gray-400" : "text-gray-900"
                    } peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    } peer-focus:text-sm`}
                  >
                    Tell me about your project
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className={`text-5xl font-['space_mono'] ${
                  isDarkMode
                    ? "text-white hover:text-gray-300"
                    : "text-[#000000] hover:text-gray-600"
                } focus:outline-none transition-all mt-12`}
              >
                Send request →
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full flex">
          <div
            className={`w-1/4 border-r ${
              isDarkMode ? "border-[#d7cdcd71]" : "border-gray-300"
            } flex flex-col items-end justify-start`}
          >
            <span className="text-3xl tracking-widest transform -rotate-90 origin-top-left inline-block mt-56">
              FAQ
            </span>
          </div>
          <div
            className={`w-3/4 space-y-4 px-6 pt-32 pb-12 font-['roboto'] border-t-2 ${
              isDarkMode ? "border-gray-200" : "border-gray-900"
            }`}
          >
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div
          className={`w-full flex border-t-[1px] ${
            isDarkMode ? "border-[#d7cdcd71]" : "border-gray-300"
          }`}
        >
          <div
            className={`w-1/4 border-r ${
              isDarkMode ? "border-[#d7cdcd71]" : "border-gray-300"
            } flex flex-col items-start justify-start p-4 pt-5`}
          >
            <span className="text-xl font-light">Credits</span>
          </div>
          <div className="w-3/4 flex justify-between items-start px-6 pt-6 pb-16">
            <div>
              <span
                className={`text-lg font-light mb-2 block font-['roboto'] ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Reach out for collaboration or say hi at
              </span>
              <a
                href="mailto:prateeksinghchouhan007@gmail.com"
                className={`text-lg underline ${
                  isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
                } transition-colors`}
              >
                prateeksinghchouhan007@gmail.com
              </a>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className={`text-xl ${
                  isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
                } transition-colors`}
                aria-label="X"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className={`text-xl ${
                  isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
                } transition-colors`}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className={`text-xl ${
                  isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
                } transition-colors`}
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
