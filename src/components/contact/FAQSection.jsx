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

  return (
    <div className="w-full flex">
      <div
        className={`w-1/4 border-r ${
          isDarkMode ? "border-[#d7cdcd71]" : "border-gray-300"
        } flex flex-col items-end justify-start`}
      >
        <span className="text-[1.80rem] tracking-widest transform -mr-4 -rotate-90 origin-top-left inline-block mt-[13.8rem]">
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
  );
}

export default FAQSection;