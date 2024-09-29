import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Cursor from "./Cursor";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

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

  const FAQItem = ({ question, answer, index }) => {
    return (
      <div className="border-b border-gray-700">
        <button
          className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
          onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
        >
          <span className="text-xl font-light">{question}</span>
          <span className="text-2xl">{openFAQ === index ? "−" : "+"}</span>
        </button>
        {openFAQ === index && (
          <div className="pb-6">
            <p>{answer}</p>
          </div>
        )}
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
    <div className="flex min-h-screen bg-[#F5F5F5] text-[#000000] font-sans relative">
      {cursorJSX}

      {/* Navigation */}
      <div className="fixed top-10 left-10 z-10 w-1/4">
        <h2 className="text-[1.4rem] mb-6 font-[500] font-['roboto']">
          Prateeksingchn
        </h2>
        <nav>
          <ul className="space-y-4 text-lg">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About me" },
              { to: "/contact", label: "Contact me" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`relative group flex items-center text-[1rem] font-light font-['roboto'] transition-colors ${
                    to === "/contact"
                      ? "text-[#000000]"
                      : "text-gray-600 hover:text-[#000000]"
                  }`}
                >
                  {to === "/contact" && (
                    <span className="absolute left-[-20px] top-1/2 w-3 h-[2px] bg-[#000000] transform -translate-y-1/2"></span>
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
          <div className="w-1/4 p-8 border-r border-gray-300">
            {/* This empty div maintains the space for the fixed navigation */}
          </div>

          {/* Contact Form */}
          <div className="w-3/4 pt-24 pb-16 px-6">
            <div className="border-b border-gray-300 pb-8 mb-16">
              <h1 className="text-7xl tracking-tight leading-[80px] font-['space_mono'] font-bold mb-4">
                Contact
              </h1>
              <p className="text-xl mb-12 font-normal text-gray-700">
                Interested in working with me?
                <br />
                Submit your project inquiry using the form below
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-16">
              {/* Project type section */}
              <div>
                <p className="text-lg mb-4 text-gray-700 uppercase tracking-wide">
                  Project type
                </p>
                <div className="flex space-x-12">
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
                      <span className="text-2xl text-[#000000] group-hover:text-gray-600 transition-colors">
                        {type}
                      </span>
                      <span
                        className={`block h-0.5 w-0 bg-[#000000] transition-all duration-300 ${
                          formData.projectType === type ? "w-full" : ""
                        }`}
                      ></span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Interested in section */}
              <div>
                <p className="text-lg text-gray-700 mb-4 uppercase tracking-wide">
                  Interested in...
                </p>
                <div className="flex space-x-12">
                  {["Design", "Development", "Design & dev"].map((interest) => (
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
                      <span className="text-2xl text-[#000000] group-hover:text-gray-600 transition-colors">
                        {interest}
                      </span>
                      <span
                        className={`block h-0.5 w-0 bg-[#000000] transition-all duration-300 ${
                          formData.interestedIn === interest ? "w-full" : ""
                        }`}
                      ></span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Project budget section */}
              <div>
                <p className="text-lg text-gray-700 mb-4 uppercase tracking-wide">
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
                      <span className="text-2xl text-[#000000] group-hover:text-gray-600 transition-colors">
                        {budget}
                      </span>
                      <span
                        className={`block h-0.5 w-0 bg-[#000000] transition-all duration-300 ${
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
                  className="w-full p-2 bg-transparent border-b-2 border-gray-700 focus:outline-none focus:border-gray-600 text-xl font-light transition-colors peer"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
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
                  className="w-full p-2 bg-transparent border-b-2 border-gray-700 focus:outline-none focus:border-gray-600 text-xl font-light transition-colors peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
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
                  className="w-full p-2 bg-transparent border-b-2 border-gray-700 focus:outline-none focus:border-gray-600 text-xl font-light transition-colors peer"
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="projectDescription"
                  className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                >
                  Tell me about your project
                </label>
              </div>

              <button
                type="submit"
                className="text-4xl font-['space_mono'] text-[#000000] hover:text-gray-600 focus:outline-none transition-all"
              >
                Send request →
              </button>
            </form>
          </div>
        </div>


        {/* FAQ Section */}
        <div className="w-full flex">
          <div className="w-1/4 p-8 border-r border-gray-300">
            {/* This empty div maintains the space for the fixed navigation */}
            <span className="text-2xl font-light tracking-widest transform -rotate-90 origin-left inline-block mt-16">
              FAQ
            </span>
          </div>
          <div className="w-3/4 space-y-2 px-6">
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
        <div className="w-full flex border-t border-gray-300">
          <div className="w-1/4 border-r border-gray-300 flex flex-col items-start justify-start p-4">
            <span className="text-sm font-light">Credits</span>
          </div>
          <div className="w-3/4 flex justify-between items-start px-6 py-10">
            <div>
              <span className="text-sm font-light">
                Reach out for collaboration or say hi at
              </span>
              <a
                href="mailto:rekhchandsahu07@gmail.com"
                className="block text-sm font-light underline"
              >
                rekhchandsahu07@gmail.com
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl" aria-label="Dribbble">
                ●
              </a>
              <a href="#" className="text-2xl" aria-label="Instagram">
                ◯
              </a>
              <a href="#" className="text-2xl" aria-label="LinkedIn">
                ◻
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
