import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function FAQSection({ isDarkMode, faqData, openFAQ, setOpenFAQ }) {
  const FAQItem = ({ question, answer, index }) => {
    return (
      <div
        className={`border-b ${
          isDarkMode ? "border-gray-300" : "border-gray-300"
        }`}
      >
        <button
          className="w-full py-4 sm:py-6 pr-4 text-left flex justify-between items-center focus:outline-none"
          onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
        >
          <span className="text-xl lg:text-xl font-normal">{question}</span>
          <span className="text-3xl ml-2 -mt-8 md:text-2xl">{openFAQ === index ? "−" : "+"}</span>
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
              <p className="pb-4 px-2 sm:pb-6 text-xl md:text-base">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col lg:flex-row mt-14 lg:mt-0">
      <div
        className={`w-full lg:w-1/4 border-b lg:border-b-0 lg:border-r ${
          isDarkMode ? "border-[#d7cdcd71]" : "border-gray-300"
        } flex lg:flex-col items-center lg:items-end justify-start py-4 lg:py-0`}
      >
        <span className="text-xl lg:text-[1.80rem] tracking-widest ml-4 lg:ml-0 -mb-3 lg:transform lg:-mr-4 lg:-rotate-90 lg:origin-top-left lg:inline-block lg:mt-[13.8rem]">
          FAQ
        </span>
      </div>
      <div
        className={`w-full lg:w-3/4 space-y-4 px-4 sm:px-6 pt-8 lg:pt-32 pb-8 lg:pb-12 font-['roboto'] border-t-2 ${
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
  );
}

export default FAQSection;