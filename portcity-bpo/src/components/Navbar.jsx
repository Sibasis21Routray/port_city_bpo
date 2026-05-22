import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const subServices = [
  { id: "customer", label: "Customer Service Outsourcing" },
  { id: "technical", label: "Technical Support Outsourcing" },
  { id: "data", label: "Data Entry and Processing Outsourcing" },
  { id: "humanresources", label: "Human Resources Outsourcing" },
  { id: "finance", label: "Finance and Accounting Outsourcing" },
  { id: "marketing", label: "Marketing Outsourcing" },
];

const aboutItems = [
  { id: "who", label: "Who We Are" },
  { id: "coverage", label: "Coverage" },
  { id: "board", label: "Board of Directors" },
  { id: "leadership", label: "Leadership" },
];

const DropdownArrow = ({ isOpen }) => (
  <svg
    className={`w-2.5 h-2.5 ml-1.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </svg>
);

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showServices, setShowServices] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);
  const [showMobileAbout, setShowMobileAbout] = useState(false);
  
  const servicesTimeoutRef = useRef(null);
  const aboutTimeoutRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);

  const handleNavigate = (path) => {
    navigate(path);
    setShowServices(false);
    setShowAbout(false);
    setShowMobileServices(false);
    setShowMobileAbout(false);
    setMobileOpen(false);
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setShowServices(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setShowServices(false);
    }, 150);
  };

  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
    }
    setShowAbout(true);
  };

  const handleAboutMouseLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setShowAbout(false);
    }, 150);
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
      if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    };
  }, []);

  const getActivePage = () => {
    const path = location.pathname;
    if (path === "/") return "home";
    if (path === "/contact") return "contact";
    if (path === "/careers") return "careers";
    if (path === "/value") return "value";
    if (path === "/services") return "services";
    if (path.startsWith("/about")) return "about";
    if (path.startsWith("/service")) return "services";
    return "home";
  };

  const active = getActivePage();

  const linkClass = (page) =>
    page === active
      ? "text-[#FFCC00] font-bold tracking-tight text-[14px] lg:text-[14.5px] border-b-4 border-[#FFCC00] pb-1"
      : "text-white font-medium hover:text-[#FFCC00] transition-colors duration-150 tracking-tight text-[14px] lg:text-[14.5px]";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white font-sans border-b border-white/10 select-none">
      {/* Primary Bar Component Header */}
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-20 h-16 sm:h-20 lg:h-24">

        {/* Logo - Left on desktop, centered on mobile */}
        <div className="flex-1 lg:flex-none">
          <button
            type="button"
            onClick={() => handleNavigate("/")}
            className="flex items-center focus:outline-none bg-transparent border-none p-0 cursor-pointer"
          >
            <div className="h-12 sm:h-16 lg:h-20 flex items-center">
              <img
                src="https://portcitybpo.lk/wp-content/uploads/2023/12/Port-City-BPO-logo-hd-1-980x833.webp"
                alt="Port City BPO Brand Logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <button
            type="button"
            onClick={() => handleNavigate("/")}
            className={`${linkClass("home")} bg-transparent border-none cursor-pointer p-0`}
          >
            Home
          </button>

          {/* Services Structural Mega Menu Toggle Link */}
          <div 
            className="relative"
            ref={servicesRef}
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <button
              type="button"
              className={`${linkClass("services")} bg-transparent border-none cursor-pointer p-0 flex items-center`}
            >
              Services <DropdownArrow isOpen={showServices} />
            </button>

            {/* Services Mega Menu Container - Column layout */}
            {showServices && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white rounded-lg shadow-2xl z-50"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <div className="py-4">
                  {subServices.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavigate(`/service/${item.id}`)}
                      className="w-full px-6 py-3 text-left text-[14px] text-gray-700 hover:text-[#FFCC00] hover:bg-gray-50 font-medium transition-colors border-none bg-transparent cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleNavigate("/value")}
            className={`${linkClass("value")} bg-transparent border-none cursor-pointer p-0`}
          >
            Value Proposition
          </button>

          {/* About Us Mega Menu Toggle Link */}
          <div 
            className="relative"
            ref={aboutRef}
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <button
              type="button"
              className={`${linkClass("about")} bg-transparent border-none cursor-pointer p-0 flex items-center`}
            >
              About Us <DropdownArrow isOpen={showAbout} />
            </button>

            {/* About Us Mega Menu Container - Column layout */}
            {showAbout && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-2xl z-50"
                onMouseEnter={handleAboutMouseEnter}
                onMouseLeave={handleAboutMouseLeave}
              >
                <div className="py-4">
                  {aboutItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavigate(`/about/${item.id}`)}
                      className="w-full px-6 py-3 text-left text-[14px] text-gray-700 hover:text-[#FFCC00] hover:bg-gray-50 font-medium transition-colors border-none bg-transparent cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleNavigate("/newsroom")}
            className={`${linkClass("newsroom")} bg-transparent border-none cursor-pointer p-0 flex items-center`}
          >
            Newsroom <DropdownArrow isOpen={false} />
          </button>

          <button
            type="button"
            onClick={() => handleNavigate("/careers")}
            className={`${linkClass("careers")} bg-transparent border-none cursor-pointer p-0`}
          >
            Careers
          </button>

          <button
            type="button"
            onClick={() => handleNavigate("/contact")}
            className={`${linkClass("contact")} bg-transparent border-none cursor-pointer p-0`}
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Sidebar Interactive Launcher - Left side on mobile */}
        <div className="lg:hidden flex justify-end flex-1">
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10 focus:outline-none border-none bg-transparent cursor-pointer transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Slide out Overlay Drawer - Opening from LEFT */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 z-40 lg:hidden transition-opacity duration-300"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer from left */}
          <div className="fixed top-0 left-0 bottom-0 w-80 bg-black text-white lg:hidden flex flex-col z-50 shadow-2xl transform transition-transform duration-300 ease-out">
            <div className="flex justify-between items-center px-6 h-20 border-b border-white/10">
              <div className="h-12 w-auto">
                <img src="https://portcitybpo.lk/wp-content/uploads/2023/12/Port-City-BPO-logo-hd-1-980x833.webp" alt="Port City BPO" className="h-full w-auto object-contain" />
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="h-10 w-10 text-white flex items-center justify-center bg-transparent border-none cursor-pointer hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              <nav className="space-y-5 text-[16px]">
                <button 
                  type="button" 
                  onClick={() => handleNavigate("/")} 
                  className="w-full text-left py-2 text-zinc-200 hover:text-[#FFCC00] block font-medium bg-transparent border-none cursor-pointer transition-colors"
                >
                  Home
                </button>

                <div>
                  <button
                    type="button"
                    onClick={() => setShowMobileServices((s) => !s)}
                    className="w-full text-left py-2 text-zinc-200 hover:text-[#FFCC00] flex justify-between items-center font-medium bg-transparent border-none cursor-pointer transition-colors"
                  >
                    <span>Services</span>
                    <DropdownArrow isOpen={showMobileServices} />
                  </button>
                  {showMobileServices && (
                    <div className="pl-4 mt-2 space-y-2 border-l border-white/20">
                      {subServices.map((s) => (
                        <button 
                          key={s.id} 
                          onClick={() => handleNavigate(`/service/${s.id}`)} 
                          className="block w-full text-left py-2 text-[14px] text-zinc-400 hover:text-[#FFCC00] transition-colors bg-transparent border-none cursor-pointer"
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button 
                  type="button" 
                  onClick={() => handleNavigate("/value")} 
                  className="w-full text-left py-2 text-zinc-200 hover:text-[#FFCC00] block font-medium bg-transparent border-none cursor-pointer transition-colors"
                >
                  Value Proposition
                </button>

                <div>
                  <button
                    type="button"
                    onClick={() => setShowMobileAbout((s) => !s)}
                    className="w-full text-left py-2 text-zinc-200 hover:text-[#FFCC00] flex justify-between items-center font-medium bg-transparent border-none cursor-pointer transition-colors"
                  >
                    <span>About Us</span>
                    <DropdownArrow isOpen={showMobileAbout} />
                  </button>
                  {showMobileAbout && (
                    <div className="pl-4 mt-2 space-y-2 border-l border-white/20">
                      {aboutItems.map((a) => (
                        <button 
                          key={a.id} 
                          onClick={() => handleNavigate(`/about/${a.id}`)} 
                          className="block w-full text-left py-2 text-[14px] text-zinc-400 hover:text-[#FFCC00] transition-colors bg-transparent border-none cursor-pointer"
                        >
                          {a.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button 
                  type="button" 
                  onClick={() => handleNavigate("/newsroom")}
                  className="w-full text-left py-2 text-zinc-200 hover:text-[#FFCC00] flex justify-between items-center font-medium bg-transparent border-none cursor-pointer transition-colors"
                >
                  <span>Newsroom</span>
                  <DropdownArrow isOpen={false} />
                </button>

                <button 
                  type="button" 
                  onClick={() => handleNavigate("/careers")} 
                  className="w-full text-left py-2 text-zinc-200 hover:text-[#FFCC00] block font-medium bg-transparent border-none cursor-pointer transition-colors"
                >
                  Careers
                </button>

                <button 
                  type="button" 
                  onClick={() => handleNavigate("/contact")} 
                  className="w-full text-left py-2 text-zinc-200 hover:text-[#FFCC00] block font-medium bg-transparent border-none cursor-pointer transition-colors"
                >
                  Contact Us
                </button>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
}