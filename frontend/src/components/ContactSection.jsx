import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [textLength, setTextLength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: ""
  });

  

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear status when user starts typing again
    if (formStatus.message) setFormStatus({ type: "", message: "" });
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      setFormStatus({ type: "error", message: "Please enter your name" });
      return false;
    }
    if (!formData.email.trim()) {
      setFormStatus({ type: "error", message: "Please enter your email" });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({ type: "error", message: "Please enter a valid email address" });
      return false;
    }
    if (!formData.message.trim()) {
      setFormStatus({ type: "error", message: "Please enter your message" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setFormStatus({ type: "", message: "" });

    try {
      // Replace with your actual backend URL
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
      
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus({ 
          type: "success", 
          message: "Message sent successfully! We'll get back to you soon." 
        });
        
        // Reset form
        setFormData({
          firstName: "",
          email: "",
          phone: "",
          message: "",
        });
        setTextLength(0);
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormStatus({ type: "", message: "" });
        }, 5000);
      } else {
        setFormStatus({ 
          type: "error", 
          message: data.message || "Failed to send message. Please try again." 
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setFormStatus({ 
        type: "error", 
        message: "Network error. Please check your connection and try again." 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row w-full bg-white overflow-hidden"
    >
      {/* Left Side */}
      <motion.div
        initial={{ x: -120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="md:w-5/12 w-full relative flex flex-col items-start overflow-hidden md:min-h-full"
      >
        {/* Contact Us Text */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute text-center top-0 left-0 right-0 z-20 px-6 pt-8 md:pt-12 lg:pt-16"
        >
          <h2 className="text-[58px] sm:text-[62px] md:text-[66px] lg:text-[82px] font-bold text-white tracking-tight leading-tight drop-shadow-lg">
            Contact Us
          </h2>
        </motion.div>

        <motion.img
          src="/home/2-homepage.jpg"
          alt="Contact Representative"
          className="relative z-10 w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ x: 120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="md:w-7/12 w-full px-8 py-16 md:px-24 md:py-20 flex flex-col justify-start"
      >
        <motion.h3
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[#1a6596] text-5xl font-bold uppercase mb-4 tracking-wide"
        >
          FOR INQUIRIES
        </motion.h3>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-8 text-sm md:text-base font-medium"
        >
          Please feel free to reach out to us, and we'll be happy to assist you.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10 text-sm font-medium text-gray-700"
        >
          <p className="mb-1">
            Email:{" "}
            <a
              href="mailto:contactus@portcitybpo.lk"
              className="text-yellow-500 hover:text-yellow-600 underline"
            >
              contactus@portcitybpo.lk
            </a>
          </p>

          <p>
            Landline:{" "}
            <a
              href="tel:+940112121444"
              className="text-yellow-500 hover:text-yellow-600 underline"
            >
              + 94 011 2121 444
            </a>
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col gap-8">
          {/* Status Message */}
          {formStatus.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-3 rounded-sm text-sm ${
                formStatus.type === "success" 
                  ? "bg-green-50 text-green-800 border border-green-200" 
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {formStatus.message}
            </motion.div>
          )}

          {/* First Name */}
          <motion.div
            initial={{ y: 35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name *"
              className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm outline-none focus:border-[#1a6596] transition-all duration-300 placeholder-gray-500"
              required
              disabled={isLoading}
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ y: 35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address *"
              className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm outline-none focus:border-[#1a6596] transition-all duration-300 placeholder-gray-500"
              required
              disabled={isLoading}
            />
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ y: 35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm outline-none focus:border-[#1a6596] transition-all duration-300 placeholder-gray-500"
              disabled={isLoading}
            />
          </motion.div>

          {/* Textarea */}
          <motion.div
            initial={{ y: 35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className={`relative border ${
              formStatus.type === "error" && !formData.message 
                ? "border-red-300" 
                : "border-gray-300"
            } p-2 h-32 rounded-sm group focus-within:border-[#1a6596] transition-colors`}
          >
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => {
                handleChange(e);
                setTextLength(e.target.value.length);
              }}
              className="w-full h-full resize-none bg-transparent outline-none text-sm text-gray-700"
              maxLength={180}
              placeholder="Your message..."
              disabled={isLoading}
            ></textarea>

            <span className="absolute bottom-2 right-2 text-xs text-gray-500 bg-white px-1">
              {textLength} / 180
            </span>
          </motion.div>

          {/* Button Section */}
          <motion.div
            initial={{ y: 35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 mt-2"
          >
            {/* Mock Cloudflare */}
            {/* <div className="flex items-center justify-between border border-gray-200 bg-gray-50 rounded-sm px-4 py-2 w-64 shadow-sm h-16">
              <div className="flex items-center space-x-3">
                <div className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>

                <span className="text-sm font-medium text-gray-800">
                  Success!
                </span>
              </div>

              <div className="flex flex-col items-center justify-center border-l border-gray-200 pl-3">
                <div className="flex items-center relative h-6 w-12">
                  <svg viewBox="0 0 100 50" className="w-10 h-5" fill="none">
                    <path
                      d="M20 30a10 10 0 0 1 10-10 15 15 0 0 1 25-5 15 15 0 0 1 15 15 10 10 0 0 1 10 10H20z"
                      fill="#f38020"
                    />
                    <path
                      d="M30 35a8 8 0 0 1 8-8 12 12 0 0 1 20-4 12 12 0 0 1 12 12 8 8 0 0 1 8 8H30z"
                      fill="#404041"
                    />
                  </svg>
                </div>

                <span className="text-[9px] text-gray-600 font-bold tracking-tighter mt-1">
                  CLOUDFLARE
                </span>

                <div className="flex space-x-1 text-[7px] text-gray-500 mt-[1px]">
                  <a href="#" className="hover:underline">
                    Privacy
                  </a>

                  <span>•</span>

                  <a href="#" className="hover:underline">
                    Terms
                  </a>
                </div>
              </div>
            </div> */}

            {/* Submit Button */}
            <motion.button
              whileHover={{ x: isLoading ? 0 : 8 }}
              whileTap={{ scale: isLoading ? 1 : 0.95 }}
              type="submit"
              disabled={isLoading}
              className={`text-[#e23c6c] font-medium hover:text-[#c42551] transition-colors bg-transparent text-left w-max text-sm tracking-wide ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
}