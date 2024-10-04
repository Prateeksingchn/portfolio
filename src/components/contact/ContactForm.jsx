import React, { useState } from "react";

function ContactForm({ isDarkMode, formData, handleChange, handleInputFocus, handleInputBlur, resetForm }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mvgopzyd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        resetForm(); // Reset the form after successful submission
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  return (
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
            ))}
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
            value={formData.name}
            onChange={handleChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className={`w-full p-3 bg-transparent border-b-2 ${
              isDarkMode
                ? "border-gray-400 focus:border-gray-500"
                : "border-gray-700 focus:border-gray-600"
            } focus:outline-none text-2xl font-light transition-colors peer`}
            placeholder=" "
            required
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
            value={formData.email}
            onChange={handleChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className={`w-full p-2 bg-transparent border-b-2 ${
              isDarkMode
                ? "border-gray-400 focus:border-gray-500"
                : "border-gray-700 focus:border-gray-600"
            } focus:outline-none text-xl font-light transition-colors peer`}
            placeholder=" "
            required
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
            value={formData.projectDescription}
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
            required
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
        disabled={isSubmitting}
        className={`text-5xl font-['space_mono'] ${
          isDarkMode
            ? "text-white hover:text-gray-300"
            : "text-[#000000] hover:text-gray-600"
        } focus:outline-none transition-all mt-12 ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? "Sending..." : "Send request →"}
      </button>

      {submitStatus === "success" && (
        <p className="mt-4 text-green-500">Message sent successfully!</p>
      )}
      {submitStatus === "error" && (
        <p className="mt-4 text-red-500">Error sending message. Please try again.</p>
      )}
    </form>
  );
}

export default ContactForm;