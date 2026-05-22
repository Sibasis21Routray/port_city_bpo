import React, { useState } from "react";

export default function ContactSection() {
  const [textLength, setTextLength] = useState(0);

  return (
    <section id="contact" className="flex flex-col md:flex-row  w-full bg-white">
      {/* Left Side - Blue background with image */}
      <div className="md:w-5/12 w-full relative flex flex-col items-start overflow-hidden md:min-h-full">
    {/* Contact Us Text Overlay on top of image */}
    <div className="absolute text-center top-0 left-0 right-0 z-20 px-6 pt-8 md:pt-12 lg:pt-16">
      <h2 className="text-[58px] sm:text-[62px] md:text-[66px] lg:text-[82px] font-bold text-white tracking-tight leading-tight drop-shadow-lg">
        Contact Us
      </h2>
     
    </div>
    
    <img
      src="https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/Contact-us-page-desktop.jpg"
      alt="Contact Representative"
      className="relative z-10 w-full h-full object-cover"
    />
  </div>
      {/* Right Side - Form */}
      <div className="md:w-7/12 w-full px-8 py-16 md:px-24 md:py-20 flex flex-col justify-start">
        <h3 className="text-[#1a6596] text-5xl font-bold uppercase mb-4 tracking-wide">
          FOR INQUIRIES
        </h3>
        <p className="text-gray-600 mb-8 text-sm md:text-base font-medium">
          Please feel free to reach out to us, and we'll be happy to assist you.
        </p>

        <div className="mb-10 text-sm font-medium text-gray-700">
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
        </div>

        <form className="w-full max-w-xl flex flex-col gap-8">
          {/* Inputs */}
          <div className="relative">
            <input
              type="text"
              id="firstName"
              placeholder="First Name *"
              className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm outline-none focus:border-[#1a6596] transition-colors placeholder-gray-500"
              required
            />
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder="Email Address *"
              className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm outline-none focus:border-[#1a6596] transition-colors placeholder-gray-500"
              required
            />
          </div>

          <div className="relative">
            <input
              type="tel"
              id="phone"
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm outline-none focus:border-[#1a6596] transition-colors placeholder-gray-500"
            />
          </div>

          {/* Textarea */}
          <div className="relative border border-gray-300 p-2 h-32 rounded-sm group focus-within:border-[#1a6596] transition-colors">
            <textarea
              className="w-full h-full resize-none bg-transparent outline-none text-sm text-gray-700"
              maxLength={180}
              onChange={(e) => setTextLength(e.target.value.length)}
            ></textarea>
            <span className="absolute bottom-2 right-2 text-xs text-gray-500 bg-white px-1">
              {textLength} / 180
            </span>
          </div>

          {/* Cloudflare Mock & Submit Button */}
          <div className="flex flex-col gap-6 mt-2">
            {/* Mock Turnstile / reCAPTCHA */}
            <div className="flex items-center justify-between border border-gray-200 bg-gray-50 rounded-sm px-4 py-2 w-64 shadow-sm h-16">
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
                <span className="text-sm font-medium text-gray-800">Success!</span>
              </div>
              <div className="flex flex-col items-center justify-center border-l border-gray-200 pl-3">
                <div className="flex items-center relative h-6 w-12">
                   {/* Abstract Cloudflare Logo */}
                   <svg viewBox="0 0 100 50" className="w-10 h-5" fill="none">
                      <path d="M20 30a10 10 0 0 1 10-10 15 15 0 0 1 25-5 15 15 0 0 1 15 15 10 10 0 0 1 10 10H20z" fill="#f38020"/>
                      <path d="M30 35a8 8 0 0 1 8-8 12 12 0 0 1 20-4 12 12 0 0 1 12 12 8 8 0 0 1 8 8H30z" fill="#404041"/>
                   </svg>
                </div>
                <span className="text-[9px] text-gray-600 font-bold tracking-tighter mt-1">CLOUDFLARE</span>
                <div className="flex space-x-1 text-[7px] text-gray-500 mt-[1px]">
                  <a href="#" className="hover:underline">Privacy</a>
                  <span>•</span>
                  <a href="#" className="hover:underline">Terms</a>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="text-[#e23c6c] font-medium hover:text-[#c42551] transition-colors bg-transparent text-left w-max text-sm tracking-wide"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}