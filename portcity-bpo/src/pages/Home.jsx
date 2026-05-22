import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import VideoSection from "../components/VideoSection";
import Footer from "../components/Footer";
import heroImg from "../assets/hero.png";
import envImg from "../assets/Environment-e1740560706536.jpg";

export default function Home({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar active="home" onNavigate={onNavigate} />
      <main>
        <Hero />

        <About />
        <Services />
        <VideoSection />

        <section
          className="relative w-full min-h-[380px] md:h-[460px] lg:h-[500px] bg-cover bg-center flex items-center overflow-hidden select-none"
          style={{
            backgroundImage: `url('https://portcitybpo.lk/wp-content/uploads/2024/01/CS-bottom-banner-home.webp')`,
          }}
        >
          {/* Background overlay blending right-side light skies to deeper blue tones on text side */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#114b74]/90 via-[#165c8d]/60 to-transparent pointer-events-none" /> */}

          <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 sm:px-12 lg:px-24 grid md:grid-cols-[1.2fr_1fr] items-center h-full pt-10 md:pt-0">
            {/* Left Side: Copywriting Content Stack */}
            <div className="text-white flex flex-col justify-center">
              <h2 className="text-[32px] sm:text-[38px] md:text-[44px] font-bold tracking-tight leading-none text-white uppercase">
                READY TO CONNECT?
              </h2>

              <p className="mt-4 text-[14px] sm:text-[15px] text-slate-100/90 font-normal leading-relaxed max-w-[540px]">
                Send us an email directly at{" "}
                <a
                  href="mailto:contactus@portcitybpo.lk"
                  className="text-[#ffcc00] font-medium hover:underline transition-all"
                >
                  contactus@portcitybpo.lk
                </a>{" "}
                or fill out the{" "}
                <a
                  href="/contact"
                  className="text-[#ffcc00] font-medium hover:underline transition-all"
                >
                  form
                </a>{" "}
                and let's start the conversation.
              </p>

              {/* Precision Offset-Accent CTA Button Group */}
              <div className="mt-8 mb-6 md:mb-0 relative inline-block self-start">
                {/* The exact geometric orange angle backing box from the image */}
                <div className="absolute -left-1.5 -top-1.5 w-16 h-10 bg-[#ff9933]" />

                <button
                  onClick={() => onNavigate && onNavigate("contact")}
                  type="button"
                  className="relative z-10 inline-flex items-center justify-between bg-[#f8f9fa] px-6 py-3 min-w-[160px] text-[14px] font-bold text-black tracking-tight shadow-md hover:bg-white transition-colors duration-150 cursor-pointer focus:outline-none"
                >
                  <span>Contact Us</span>
                  <svg
                    className="w-3.5 h-3.5 text-black ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

