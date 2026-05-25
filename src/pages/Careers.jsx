import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ConnectBanner from "../components/ConnectBanner";

const jobs = [
  {
    title: "Associate - Employee Relations",
    image:
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/03/AER-pg-46.png",
  },
  {
    title: "Associate - Administration",
    image:
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/03/Asso-Admin-pg-24.png",
  },
  {
    title: "Associate - Administration Chinese Speaking",
    image:
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/03/Asso-Admin-Chinese-speaking-pg-40.png",
  },
  {
    title: "Data Entry Associate",
    image:
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/03/DEA-pg-68.png",
  },
  {
    title: "Executive - Customer Support",
    image:
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/03/ECS-pg-54.png",
  },
  {
    title: "payment Associate",
    image:
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/03/PA-pg-36.png",
  },
];

export default function Careers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const totalSlides = isDesktop
    ? Math.max(1, jobs.length - 2)
    : Math.max(1, jobs.length);

  useEffect(() => {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(Math.max(0, totalSlides - 1));
    }
  }, [isDesktop, totalSlides, currentSlide]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    if (totalSlides <= 1) return;
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    if (totalSlides <= 1) return;
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="min-h-screen bg-white ">

      <main>
        {/* Banner Hero */}
        <section className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] overflow-hidden opacity-100">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            <div
              className="absolute inset-0 w-full h-full bg-cover block md:hidden"
              style={{
                backgroundImage:
                  'url("https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/Careers-page-desktop.jpg")',
                backgroundPosition: "center center",
              }}
            />

            <div
              className="absolute inset-0 w-full h-full bg-cover hidden md:block lg:hidden"
              style={{
                backgroundImage:
                  'url("https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/Careers-page-desktop.jpg")',
                backgroundPosition: "right center",
              }}
            />

            <div
              className="absolute inset-0 w-full h-full bg-cover hidden lg:block"
              style={{
                backgroundImage:
                  'url("https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/Careers-page-desktop.jpg")',
                backgroundPosition: "center center",
              }}
            />

            <div className="absolute inset-0 bg-blue-900/30 lg:hidden" />

            <div
              className="hidden lg:block absolute top-0 left-0 h-full w-full"
              style={{
                clipPath: "polygon(0 0, 60% 0, 45% 100%, 0% 100%)",
              }}
            >
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center mix-blend-overlay opacity-100"
                style={{
                  backgroundImage:
                    'url("https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/Careers-page-desktop.jpg")',
                }}
              />
            </div>
          </motion.div>

          <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-wide uppercase">
                Careers
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium tracking-wide max-w-md lg:max-w-none">
                Join Our Team. Build Your Future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content & Slider Section */}
        <section className="w-full px-0 md:px-15 py-12 ">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-15/12 mx-auto mb-12 px-6 md:px-12 lg:px-16 text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-sky-900 tracking-tight uppercase">
              SEIZE THE OPPORTUNITY TODAY!
            </h2>

            <p className="mt-4 text-slate-600 leading-8 text-base md:text-lg font-normal max-w-10xl lg:mx-0 mx-auto">
             Join Port City BPO and take part in a groundbreaking BPO experience. As an Authorised Person approved by the Colombo Port City Economic Commission (CPCEC), we uphold transparency, quality, and innovation. Port City BPO values integrity, holds high standards, and promotes a thriving space for creativity. If you’re ready to shape the future of Business Process Outsourcing, explore career possibilities with us and become a catalyst in the world of offshore solutions.
            </p>

            <p className="mt-10 text-xs md:text-sm text-slate-500 uppercase tracking-[0.25em] font-bold">
              Ready to Make an Impact?
            </p>

            <h3 className="text-2xl md:text-3xl font-black text-sky-900 uppercase mt-2 tracking-wide">
              Current Openings
            </h3>
          </motion.div>

          {/* Slider */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group w-full px-4 md:px-12 lg:px-16 max-w-15/12 mx-auto"
          >
            <button
              onClick={prevSlide}
              className="flex absolute left-1 md:left-4 lg:left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white border border-slate-200 rounded-full items-center justify-center text-slate-600 hover:text-sky-600 shadow-md hover:bg-slate-50 transition"
              aria-label="Previous slide"
            >
              &#10094;
            </button>

            <div className="overflow-hidden w-full">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: isDesktop
                    ? `calc(-${currentSlide * 33.333}% - ${
                        currentSlide * 16
                      }px)`
                    : `calc(-${currentSlide * 100}% - ${
                        currentSlide * 24
                      }px)`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 20,
                }}
              >
                {jobs.map((job, idx) => (
                  <motion.article
                    key={idx}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="w-full lg:w-[calc(33.333%-16px)] shrink-0 rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden"
                  >
                    <div className="w-full aspect-[1/1.414] bg-white overflow-hidden relative flex items-center justify-center p-0">
                      <img
                        src={job.image}
                        alt={job.title}
                        className="w-full h-full object-contain object-top block"
                      />
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>

            <button
              onClick={nextSlide}
              className="flex absolute right-1 md:right-4 lg:right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white border border-slate-200 rounded-full items-center justify-center text-slate-600 hover:text-sky-600 shadow-md hover:bg-slate-50 transition"
              aria-label="Next slide"
            >
              &#10095;
            </button>
          </motion.div>

          {/* Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="flex items-center justify-center gap-2 mt-10"
          >
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-6 bg-sky-600"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <motion.div
         
        >
          <ConnectBanner
            title="Let’s Touch Base!"
            descriptionPrefix="Your future career awaits! Connect with us at "
            formLink="/contact"
            formText="here"
            descriptionMiddle=" or drop us an email at"
            email="contactus@portcitybpo.lk"
            emailText="contactus@portcitybpo.lk"
            descriptionSuffix=". We’re eager to hear from you!"
            buttonText="Contact Us"
            backgroundImage="https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2024/02/CS-bottom-banner.webp"
          />
        </motion.div>
      </main>
    </div>
  );
}