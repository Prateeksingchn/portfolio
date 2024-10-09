import React, { useState, useEffect, useRef } from "react";
import Cursor from "./Cursor";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { FiSun, FiMoon } from "react-icons/fi";
import Navigation from "./contact/Navigation";
import ContactForm from "./contact/ContactForm";
import FAQSection from "./contact/FAQSection";
import Footer from "./contact/Footer";

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
      scrollbarContainer: false,
    });

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
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

  const resetForm = () => {
    setFormData({
      projectType: "",
      interestedIn: "",
      budget: "",
      name: "",
      email: "",
      projectDescription: "",
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
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
      style={{
        overflow: 'hidden',
      }}
    >
      {cursorJSX}

      {/* Styles to hide all scrollbars */}
      <style jsx global>{`
        // ... (your global styles here)
      `}</style>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className={`absolute top-6 right-12 lg:right-4 z-[61] p-2 rounded-full ${
          isDarkMode ? "text-white" : "text-black"
        } transition-colors duration-300 focus:outline-none hover:opacity-80`}
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
      </button>

      <Navigation isDarkMode={isDarkMode} />

      {/* Main Content */}
      <div ref={scrollRef} className="flex flex-col w-full" data-scroll-container>
        {/* Contact Section */}
        <div className="w-full flex flex-col md:flex-row"> {/* Updated for responsiveness */}
          <div
            className={`w-full md:w-1/4 p-4 md:p-8 border-r ${
              isDarkMode ? "border-[#d7cdcd71]" : "border-gray-300"
            }`}
          >
            {/* This empty div maintains the space for the fixed navigation */}
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-3/4 pt-28 md:pt-32 pb-5 lg:pb-32"> {/* Updated for responsiveness */}
            <div
              className={`border-b-2 ${
                isDarkMode ? "border-gray-200" : "border-gray-900"
              } pb-2 lg:pb-8 mb-10 lg:mb-20 px-4 md:px-6`} // Updated for responsiveness
            >
              <h1 className="text-[3.7rem] md:text-8xl tracking-tight leading-[60px] md:leading-[90px] font-['space_mono'] font-normal lg:font-bold mb-2 lg:mb-4"> {/* Updated for responsiveness */}
                Contact
              </h1>
              <p
                className={`text-lg md:text-xl mb-6 lg:mb-12 font-normal leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Interested in working with me?
                <br />
                Submit your project inquiry using the form below
              </p>
            </div>

            <ContactForm
              isDarkMode={isDarkMode}
              formData={formData}
              handleChange={handleChange}
              handleInputFocus={handleInputFocus}
              handleInputBlur={handleInputBlur}
              resetForm={resetForm}
            />
          </div>
        </div>

        <FAQSection
          isDarkMode={isDarkMode}
          faqData={faqData}
          openFAQ={openFAQ}
          setOpenFAQ={setOpenFAQ}
        />

        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default ContactPage;