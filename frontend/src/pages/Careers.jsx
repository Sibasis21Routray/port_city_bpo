import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Navbar from "../components/Navbar";
import ConnectBanner from "../components/ConnectBanner";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const jobs = [
  {
    title: "Associate - Employee Relations",
    image:
      "/careers/1-careers.png",
  },
  {
    title: "Associate - Administration",
    image:
      "/careers/2-careers.png",
  },
  {
    title: "Associate - Administration Chinese Speaking",
    image:
      "/careers/3-careers.png",
  },
  {
    title: "Data Entry Associate",
    image:
      "/careers/4-careers.png",
  },
  {
    title: "Executive - Customer Support",
    image:
      "/careers/5-careers.png",
  },
  {
    title: "payment Associate",
    image:
      "/careers/6-careers.png",
  },
];

export default function Careers() {
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

  return (
    <div className="min-h-screen bg-white ">
      <main>
        <header className="relative min-h-[400px] h-auto md:h-120 lg:h-130 flex items-start md:items-center overflow-hidden">
          {/* Mobile background */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center md:hidden"
            style={{
              backgroundImage:
                'url("/careers/7-careers.jpg")',
            }}
          />

          {/* Desktop background */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center hidden md:block"
            style={{
              backgroundImage:
                'url("/careers/8-careers.jpg")',
            }}
          />

          {/* Content */}
          <div className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-left md:text-center pt-20 px-5 sm:pt-12 md:pt-0 pb-10 md:pb-0 pr-0 md:pr-80">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white">
                  Careers
                </h1>
                <p className="mt-2 text-sm sm:text-base text-white/90">
                  Join Our Team. Build Your Future.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Content & Slider Section */}
        <section className="w-full px-0 md:px-15 py-12 ">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-15/12 mx-auto mb-12 px-6 md:px-12 lg:px-16 text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#005ca9] tracking-tight uppercase">
              SEIZE THE OPPORTUNITY TODAY!
            </h2>

            <p className="mt-4 text-slate-600 leading-8 text-base md:text-lg font-normal max-w-10xl lg:mx-0 mx-auto">
              Join Port City BPO and take part in a groundbreaking BPO
              experience. As an Authorised Person approved by the Colombo Port
              City Economic Commission (CPCEC), we uphold transparency, quality,
              and innovation. Port City BPO values integrity, holds high
              standards, and promotes a thriving space for creativity. If you're
              ready to shape the future of Business Process Outsourcing, explore
              career possibilities with us and become a catalyst in the world of
              offshore solutions.
            </p>

            <p className="mt-10 item-center text-center subheading font-bold py-15">
              Ready to Make an Impact?
            </p>

            <h3 className="heading text-[#005ca9] uppercase mt-2 tracking-wide">
              Current Openings
            </h3>
          </motion.div>

          {/* Swiper Slider */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full px-4 md:px-12 lg:px-16 max-w-11/12 mx-auto"
          >
            <Swiper
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              mousewheel={true}
              keyboard={true}
              loop={false}
              className="careers-swiper"
            >
              {jobs.map((job, idx) => (
                <SwiperSlide key={idx}>
                  <motion.article
                   
                    className="rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden h-full"
                  >
                    <div className="w-full aspect-[1/1.414] bg-white overflow-hidden relative flex items-center justify-center p-0">
                      <img
                        src={job.image}
                        alt={job.title}
                        className="w-full h-full object-contain object-top block"
                      />
                    </div>
                  </motion.article>
                </SwiperSlide>
              ))}
            </Swiper>

            
            
          </motion.div>
        </section>

        {/* CTA */}
        <motion.div>
          <ConnectBanner
            title="Let's Touch Base!"
            descriptionPrefix="Your future career awaits! Connect with us at "
            formLink="/contact"
            formText="here"
            descriptionMiddle=" or drop us an email at"
            email="contactus@portcitybpo.lk"
            emailText="contactus@portcitybpo.lk"
            descriptionSuffix=". We're eager to hear from you!"
            buttonText="Contact Us"
            backgroundImage="/careers/9-careers.webp"
          />
        </motion.div>
      </main>
    </div>
  );
}