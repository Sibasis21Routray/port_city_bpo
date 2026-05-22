import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const jobs = [
  {
    title: "Associate - Employee Relations",
    image: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/03/AER-pg-46.png",
  },
  {
    title: "Associate - Administration",
    image: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/03/Asso-Admin-pg-24.png",
   
  },
  {
    title: "Associate - Administration Chinese Speaking",
    image: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/03/Asso-Admin-Chinese-speaking-pg-40.png",
    
  },
  {
    title: "Data Entry Associate",
    image: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/03/DEA-pg-68.png",
   
  },
  {
    title: "Executive - Customer Support",
    image: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/03/ECS-pg-54.png",
   
  },
  {
    title: "payment Associate",
    image: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/03/PA-pg-36.png",
  }
];

export default function Careers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Determine items per view based on manual breakpoints if needed,
  // or use state window tracking. For standard desktop, 2 cards are shown at a time.
  const totalSlides = jobs.length >= 3 ? jobs.length - 2 : 1;

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar active="careers" />

      <main>
        {/* Banner Hero */}
        <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden flex bg-slate-100">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/Careers-page-desktop.jpg")',
              backgroundPosition: 'center'
            }}
          />
          
          <div 
            className="absolute top-0 left-0 h-full w-full"
            style={{ clipPath: 'polygon(0 0, 65% 0, 55% 100%, 0% 100%)' }}
          >
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center mix-blend-overlay opacity-40"
              style={{
                backgroundImage: 'url("https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/Careers-page-desktop.jpg")',
              }}
            />
          </div>

          <div className="relative z-10 w-full h-full flex items-center">
            <div className="w-full md:w-[60%] flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-wide">
                Careers
              </h1>
              <p className="text-lg md:text-2xl text-white font-medium tracking-wide">
                Join Our Team. Build Your Future.
              </p>
            </div>
          </div>
        </section>

        {/* Content & Slider Section */}
        <section className=" mx-auto px-4 md:px-8 py-9">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-sky-900 tracking-tight">SEIZE THE OPPORTUNITY TODAY!</h2>
            <p className="mt-4 text-slate-600 leading-8 max-w-4xl mx-auto text-base">
              Join Port City BPO and take part in a groundbreaking BPO experience. As an Authorised Person approved by the Colombo Port City Economic Commission (CPCEC), we uphold transparency, quality, and innovation. Port City BPO values integrity, holds high standards, and promotes a thriving space for creativity. If you’re ready to shape the future of Business Process Outsourcing, explore career possibilities with us and become a catalyst in the world of offshore solutions.
            </p>
            <p className="mt-10 text-sm text-slate-500 uppercase tracking-[0.25em] font-bold">
              Ready to Make an Impact?
            </p>
            <h3 className="text-2xl font-black text-sky-900 uppercase mt-2 tracking-wide">Current Openings</h3>
          </div>

          {/* Carousel Wrapper Area */}
          <div className="relative group px-4 md:px-12">
            
            {/* Left Control Arrow */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-200 shadow-md hover:bg-slate-50 transition"
              aria-label="Previous slide"
            >
              &#10094;
            </button>

            {/* Slider window */}
            <div className="overflow-hidden w-full">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-6"
                // 2. CHANGE THIS: Multiplies by 33.333% (the width of 1 single card) instead of 100%.
                // Also factors in your gap-6 (24px) spacing variable so cards don't misalign.
                style={{ transform: `translateX(calc(-${currentSlide * 33.333}% - ${currentSlide * 16}px))` }}
              >
                {jobs.map((job, idx) => (
                  <article 
                    key={idx} 
                    className="w-full md:w-[calc(100%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 rounded-2xl border border-slate-200 bg-white shadow-md flex flex-col justify-between overflow-hidden"
                  >
                    <div>
                      {/* Image Banner Header */}
                      <div className="w-full  bg-slate-100 overflow-hidden relative">
                        <img 
                          src={job.image} 
                          alt={job.title} 
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right Control Arrow */}
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-200 shadow-md hover:bg-slate-50 transition"
              aria-label="Next slide"
            >
              &#10095;
            </button>
          </div>

          {/* Navigation Pagination Dots matching the exact mockup style */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "w-6 bg-sky-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Bottom Callout Section */}
        <section className="bg-slate-900 text-white py-20">
          <div className="max-w-5xl mx-auto px-6 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="uppercase tracking-[0.24em] text-sky-400 text-sm mb-3 font-semibold">LET’S TOUCH BASE!</p>
              <h2 className="text-3xl font-bold">Your future career awaits!</h2>
              <p className="mt-4 text-slate-300 max-w-2xl">
                Connect with us at <a className="text-sky-300 underline" href="mailto:contactus@portcitybpo.lk">contactus@portcitybpo.lk</a>. We’re eager to hear from you.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center rounded-full border border-slate-400 bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Contact Us
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}