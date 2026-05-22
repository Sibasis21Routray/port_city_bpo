import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImg from "../assets/hero.png";
import ConnectBanner from "../components/ConnectBanner";

const sections = [
  {
    id: "who",
    title: "Who We Are",
    description:
      "Port City BPO (Pvt) Ltd. is authorised by the Colombo Port City Economic Commission and operates as an approved business process outsourcing partner under the Port City framework.",
    buttonText: "Learn More",
  },
  {
    id: "coverage",
    title: "Coverage",
    description:
      "Port City BPO serves clients across Sri Lanka, India, Vietnam, the Philippines, Thailand, Japan, Korea, and other global markets with flexible offshore delivery models.",
    buttonText: "Learn More",
  },
  {
    id: "board",
    title: "Board of Directors",
    description:
      "Our Board of Directors is accountable for the Group’s performance, strategic direction, and governance, ensuring we deliver value and sustainable growth for stakeholders.",
    buttonText: "Learn More",
  },
  {
    id: "leadership",
    title: "Leadership Team",
    description:
      "The Leadership Team drives execution, operational excellence, and long-term strategy while maintaining accountability to clients, employees, and shareholders.",
    buttonText: "Learn More",
  },
];

const leadershipTeam = [
  {
    name: "Gary Lee Seaton",
    title: "CEO",
    image: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/05/Gary-Lee-Seaton-scaled.webp",
  },
  {
    name: "Edwin Tan Saik Chin",
    title: "Chief Operating Officer",
    image:"https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/05/Edwin-Tan-Saik-Chin-scaled.webp"
  },
  {
    name: "Yudesh Gunaratne",
    title: "General Manager - Operations",
    image:"https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/05/Yudesh-Gunaratne-scaled.webp"
  },
  {
    name: "Sajda Hussain",
    title: "Financial Controller",
    image:"https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/05/Sajda-Hussain-scaled.webp"
  },
  {
    name: "Teo Kai Jie",
    title: "Manager - Business Development",
    image:"https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/05/Teo-Kai-Jie-scaled.webp"
  },
];

const boardMembers = [
  {
    name: "Dato' Poh Yang Hong",
    title: "Chairperson of the Board and Director",
    description: "Dato' Poh is the Group Managing Director of IRIS Corporation Berhad and IRS Group Berhad, bringing over 30 years of corporate and investment leadership experience.",
    image: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/05/DatoPohYang.png",
  },
  {
    name: "Ms. Stasshani Jayawardena",
    title: "Director",
    description: "Ms. Jayawardena is the youngest and first female Board Member of Aitken Spence PLC, overseeing tourism and people strategy across the Group.",
    image: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/MS-STASSHANI.png",
  },
  {
    name: "Ms. Nilanthi Sivapragasam",
    title: "Director",
    description: "Ms. Sivapragasam joined Aitken Spence in 1986 and heads the Group's Chief Financial Office while also serving as Director of several subsidiaries.",
    image: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/MS-NILANTHI.png",
  },
  {
    name: "Dr. Rohan Fernando",
    title: "Director",
    description: "Dr. Fernando joined Aitken Spence in 1994, leading the Plantation sector and contributing to sustainability and corporate governance.",
    image: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/DR-FERNANDO.png",
  },
  {
    name: "Mr. H'ng Boon Harng",
    title: "Director",
    description: "Mr. H'ng Boon Harng has been the Chief Financial Officer of IRIS Corporation Berhad since 2017 and drives financial strategy across the Group.",
    image: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-27-at-13.55.54_b64c8c84-e1740645061573-removebg-preview.png",
  },
  {
    name: "Mr. Tan Yi Ming",
    title: "Director",
    description: "Mr. Tan Yi Ming is the Assistant General Manager for Domestic Sales at IRIS Corporation Berhad, leading business growth and operational efficiency.",
    image: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/05/Tan_Yi_Ming-removebg-preview-e1747393610441.png",
  },
  {
    name: "Mr. Tang Tick Huar",
    title: "Director",
    description: "Mr. Tang Tick Huar is a seasoned real estate professional with over 20 years of experience and a strong record in property development.",
    image: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/05/TangTickHuar.png",
  },
  {
    name: "Mr. Gary Lee Seaton",
    title: "Director & CEO",
    description: "Mr. Seaton has led facility management and corporate growth across the Group, managing major development and property portfolios.",
    image: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/05/Gary_Lee_Seaton-removebg-preview-e1747393157981.png",
  },
];

const categories = [
  {
    img: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2024/05/Hotels.webp",
    alt: "Hotels and tourism visualization",
    items: ["Hotels", "Destination Management", "Airline GSA"]
  },
  {
    img: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2024/05/Cargo.webp",
    alt: "Maritime and logistics container yard",
    items: ["Maritime & Port Services", "Freight Forwarding, Courier & Airline GSA (Cargo)", "Aitken Spence Logistics"]
  },
  {
    img: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2024/05/Plantations.webp",
    alt: "Lush green agricultural terraced plantations",
    items: ["Plantations", "Printing & Packaging", "Apparel Manufacture", "Power Generation"]
  },
  {
    img: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2024/05/Property-Management.webp",
    alt: "Real estate and financial services overview",
    items: ["Financial Services", "Elevator Agency", "Insurance", "BPO Services", "Property Management"]
  }
];

const portfolioData = [
  {
    img: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/08/BPO-Digital-id.jpg",
    alt: "Biometric authentication on smart handheld device interface",
    items: [
      "eID Solution",
      "Digital ID Solution",
      "Driver’s License Solution",
      "Voter’s Card Solution",
      "Smart Card Solution"
    ]
  },
  {
    img: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/08/BPO-ePassport.jpg",
    alt: "Global electronic biometric passport document verification spreads",
    items: [
      "ePassport Solution",
      "eVisa Solution",
      "Secure Document Solution"
    ]
  },
  {
    img: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/08/BPO-Smartdevice.jpg",
    alt: "Secure multi-terminal biometric reading peripheral smart system desk",
    items: [
      "Smart Devices",
      "Smart Kiosk",
      "Mobile Smart Terminal"
    ]
  }
];


export default function About({onNavigate}) {
  const { section } = useParams();
  const navigate = useNavigate();
  const sectionRefs = {
    who: useRef(null),
    coverage: useRef(null),
    board: useRef(null),
    leadership: useRef(null),
  };

  const activeSection = section || "who";

  useEffect(() => {
    if (activeSection && sectionRefs[activeSection]?.current) {
      sectionRefs[activeSection].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeSection]);

  const scrollToSection = (id) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSectionClick = (id) => {
    if (id === "leadership" || id === "board" || id === "who") {
      navigate(`/about/${id}`);
      return;
    }
    scrollToSection(id);
  };

  if (activeSection === "who") {
    return (
      <div className="min-h-screen bg-white">
        <Navbar active="about" />

        <main>
  <section className="relative text-white">
    <img
      src="https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/WHO-WE-ARE-desktop.jpg"
      alt="Who we are background"
      className="absolute inset-0 h-[50vh] w-full object-cover opacity-100"
    />
    <div className="absolute inset-0 bg-[#0169ab]/30 h-[50vh]"></div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-48 text-center">
      <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-[0.1em]">
        WHO WE ARE
      </h1>
    </div>
  </section>

  <section className="py-24 bg-white">
    <div className="max-w-10/12 mx-auto px-4 sm:px-6 space-y-20 flex flex-col justify-center items-center">
      <div className="space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0169ab]">
          WHO WE ARE
        </h2>
        <p className="text-slate-600 max-w-5xl text-lg leading-relaxed">
          Port City BPO is a Business Process Outsourcing (BPO) company.
          Our organisation is an Authorised Person approved by the
          Colombo Port City Economic Commission (CPCEC).
        </p>
      </div>

      {/* --- START OF CONNECTING DIAGRAM SECTION --- */}
      <div className="relative max-w-7xl mx-auto py-8">
        {/* SVG Connecting Lines Canvas */}
        <svg
          className="absolute inset-0 w-full h-full hidden md:block pointer-events-none"
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left Side Connection (From Top-Left Card down to Left Side of Center Card) */}
          <path
            d="M 260,100 C 260,300 310,300 352,300"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="2"
          />
          <circle
            cx="352"
            cy="300"
            r="6"
            fill="#38bdf8"
            stroke="#0284c7"
            strokeWidth="2"
          />

          {/* Right Side Connection (From Top-Right Card down to Right Side of Center Card) */}
          <path
            d="M 740,100 C 740,300 690,300 648,300"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="2"
          />
          <circle
            cx="648"
            cy="300"
            r="6"
            fill="#38bdf8"
            stroke="#0284c7"
            strokeWidth="2"
          />
        </svg>

        {/* Grid Container for the Cards */}
        <div className="grid gap-16 md:gap-y-32 md:grid-cols-2 justify-items-center relative z-10">
          {/* Top Left: Aitken Spence */}
          <div className="w-full max-w-[400px] rounded-[28px] overflow-hidden shadow-xl border border-slate-100 bg-white">
            <img
              src="https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/04/Aitken_V2.webp"
              alt="Aitken Spence International"
              className="w-full h-auto"
            />
          </div>

          {/* Top Right: Iris Tech */}
          <div className="w-full max-w-[400px] rounded-[28px] overflow-hidden shadow-xl border border-slate-100 bg-white">
            <img
              src="https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/04/Aitken_V2.webp"
              alt="Iris Tech Ventures"
              className="w-full h-auto"
            />
          </div>

          {/* Bottom Center: Port City BPO */}
          <div className="w-full max-w-[400px] md:col-span-2 rounded-[28px] overflow-hidden shadow-2xl border-2 border-sky-400 p-2 bg-white">
            <img
              src="https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/04/BPO-e1744021461865.png"
              alt="Port City BPO logo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      {/* --- END OF CONNECTING DIAGRAM SECTION --- */}

      <section className="bg-white py-20 px-6 sm:px-12 lg:px-20 select-none">
        <div className="mx-auto">
          {/* Header Block Group */}
          <div className="space-y-6 mb-16">
            <h3 className="text-[34px] sm:text-[40px] font-bold text-[#005ca9] tracking-tight leading-tight uppercase">
              AITKEN SPENCE PLC
            </h3>
            <p className="text-[15px] sm:text-[16px] text-zinc-600 font-normal leading-relaxed max-w-6xl text-justify">
              Aitken Spence PLC, listed on the Colombo Stock Exchange
              since 1983, boasts a diversified portfolio spanning over
              150 years. Originating in 1868 as a trade in goods from
              the Southern Port of Sri Lanka, it has since expanded its
              operations to encompass 10 countries across Africa and
              Asia, pioneering projects in tourism, maritime, logistics,
              energy, plantations, services and apparel in the region.
            </p>
          </div>

          {/* 4-Column Layout Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex flex-col space-y-5">
                {/* Image Asset Wrapper */}
                <div className="rounded-[20px] overflow-hidden bg-white shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-slate-100 h-80 w-80">
                  <img
                    src={cat.img}
                    alt={cat.alt}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Nested Core Content List */}
                <ul className="space-y-3 px-2 text-left">
                  {cat.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-[14px] sm:text-[15px] text-zinc-700 font-normal leading-relaxed flex items-start"
                    >
                      <span className="mr-2 text-zinc-400 select-none text-lg">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6 sm:px-12 lg:px-20 select-none">
        <div className="max-w-[1240px] mx-auto">
          {/* Dynamic Typography Header Alignment Group */}
          <div className="space-y-6 mb-16">
            <h3 className="text-[34px] sm:text-[40px] font-bold text-[#005ca9] tracking-tight leading-tight uppercase">
              IRIS CORPORATION BERHAD
            </h3>
            <p className="text-[15px] sm:text-[16px] text-zinc-600 font-normal leading-relaxed max-w-6xl text-justify">
              IRIS Corporation Berhad, listed on the Bursa Malaysia
              (ACE) market since 2002, was established in 1994 as an
              MSC-status technology innovator. Specializing in Trust
              Identity products and solutions, IRIS is a global leader
              in eID, ePassport, Automated Border Control, and identity
              management ecosystems, with a presence in over 34
              countries.
            </p>
          </div>

          {/* Unified 3-Column Profile Matrix Component Grid */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start">
            {portfolioData.map((column, colIdx) => (
              <div key={colIdx} className="flex flex-col space-y-5">
                {/* Refined Geometric Aspect Box Framing */}
                <div className="rounded-[20px] overflow-hidden bg-white shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-slate-100 aspect-[4/4] sm:aspect-square md:aspect-[4/4]">
                  <img
                    src={column.img}
                    alt={column.alt}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Dynamic Styled Sub-Node List Rendering */}
                <ul className="space-y-3 px-2 text-left">
                  {column.items.map((listItem, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-[14px] sm:text-[15px] text-zinc-700 font-normal leading-relaxed flex items-start"
                    >
                      <span className="mr-2 text-zinc-400 select-none text-lg">
                        •
                      </span>
                      <span>{listItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-6 sm:px-12 lg:px-20 select-none">
        <div className="max-w-[1240px] mx-auto">
          {/* Horizontal Split Layout Container */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20">
            {/* Left Side: Image Presentation Layer */}
            <div className="w-full md:w-auto flex-shrink-0 max-w-[500px] rounded-[16px] overflow-hidden bg-white shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-200/60 aspect-[4/3] sm:aspect-[1.4/1]">
              <img
                src="https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2024/01/Environment-e1740560706536.jpg"
                alt="Colombo Port City architectural coastal landscape overview development"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Right Side: Text Information Stack */}
            <div className="flex-1 flex flex-col justify-center pt-2 text-left space-y-6">
              {/* Title Header */}
              <h3 className="text-[32px] sm:text-[38px] lg:text-[44px] font-bold text-[#005ca9] tracking-tight leading-tight uppercase font-sans">
                PORT CITY BPO (PVT) LTD
              </h3>

              {/* Context Paragraph Matrix */}
              <div className="space-y-6 max-w-4xl">
                <p className="text-[15px] sm:text-[16px] text-zinc-600 font-normal leading-relaxed">
                  Our organisation is an Authorised Person approved by
                  the Colombo Port City Economic Commission (CPCEC)
                  specializing in BPO.
                </p>
                <p className="text-[15px] sm:text-[16px] text-zinc-600 font-normal leading-relaxed">
                  An Authorised Person is an entity, that the CPCEC has
                  granted a license in terms of the Colombo Port City
                  Economic Commission Act No. 11 of 2021.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl flex flex-col md:flex-row gap-16 justify-center items-center px-6 py-8">
        <div className="flex-1">
          <h3 className="text-[32px] sm:text-[38px] lg:text-[44px] font-bold text-[#005ca9] tracking-tight leading-tight uppercase font-sans">
            THE COLOMBO PORT CITY ECONOMIC COMMISSION (CPCEC)
          </h3>
          <p className="mt-6 text-slate-600 text-base leading-relaxed">
            The Colombo Port City Economic Commission (CPCEC) was
            established as a Single Window Investment facilitator to
            assist investors, businesses, and resident conduct their
            activities seamlessly and efficiently.
          </p>
          <p className="mt-5 text-slate-600 text-base leading-relaxed">
            CPCEC is the sole GoSL entity entrusted and authorised by
            way of the Colombo Port City Economic Commission Act, No. 11
            of 2021, and is responsible for the granting of incentives
            or exemptions to the investor for the promotion of Business
            Strategic Importance within the Special Economic Zone (SEZ).
          </p>
          <p className="mt-5 text-slate-600 text-base leading-relaxed">
            The Colombo Port City Economic Commission Act, No. 11 of
            2021 was approved by the Government of Sri Lanka in May
            2011, with a modern legal framework and attractive
            regulations focused on ease of doing business.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            src="https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2024/05/Port-city-BPO.webp"
            alt="CPCEC"
            className="w-96 h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <ConnectBanner
    title="How to get in touch?"
    descriptionPrefix="Feel free to reach out to us via the contact form "
    formLink="/contact"
    formText="here"
    descriptionMiddle="or drop us an email at"
    email="contactus@portcitybpo.lk"
    emailText="contactus@portcitybpo.lk"
    descriptionSuffix=". We are eager to hear from you."
    buttonText="Contact Us"
    backgroundImage="https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2024/01/CS-bottom-banner-about-us.webp"
  />
</main>

        <Footer />
      </div>
    );
  }

if (activeSection === "coverage") {
    return (
      <div className="min-h-screen bg-white">
        <Navbar active="about" onNavigate={onNavigate} />

        <main>
          <section className="relative overflow-hidden bg-slate-950 text-white">
            <img
              src="https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/COVERAGE-desktop.jpg"
              alt="Geographic coverage background"
              className="absolute inset-0 h-full w-full object-cover opacity-100"
            />
            <div className="absolute inset-0 bg-blue-900/30"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-28 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300 mb-4">
                Coverage
              </p>
              <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-[0.1em]">
                Geographic Coverage
              </h1>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="mb-12">
                <p className="text-xs uppercase tracking-[0.35em] text-sky-500 mb-3">
                  Countries We Serve
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  COUNTRIES WE SERVE
                </h2>
                <p className="mt-4 text-slate-600 max-w-3xl">
                  Port City BPO (Pvt) Ltd. currently provides off-shore service to clients from Sri Lanka.
                </p>
                <ul className="mt-6 list-disc list-inside space-y-2 text-slate-700">
                  <li>Malaysia</li>
                  <li>Hong Kong</li>
                  <li>Thailand</li>
                  <li>Philippines</li>
                  <li>Cambodia</li>
                </ul>
                <p className="mt-6 text-slate-500">
                  More territories are being added constantly.
                </p>
              </div>

              <div >
                <img
                  src="https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/10/World-Map-768x512.png"
                  alt="Coverage map"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden bg-slate-950 text-white py-24">
            <img
              src={heroImg}
              alt="Contact background"
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-slate-950/90"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">
                  How to get in touch?
                </p>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Looking for a reliable outsourcing partner?
                </h2>
                <p className="text-slate-300 leading-8">
                  Feel free to reach out via our contact form or drop us an email at{' '}
                  <a href="mailto:contactus@portcitybpo.lk" className="text-yellow-300 underline">
                    contactus@portcitybpo.lk
                  </a>
                  . We are eager to hear from you.
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate("contact")}
                  className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 transition hover:bg-yellow-300"
                >
                  Contact Us
                </button>
              </div>

              <div className="rounded-[32px] overflow-hidden shadow-2xl">
                <img
                  src={heroImg}
                  alt="Contact support"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </section>
        </main>

        <Footer onNavigate={onNavigate} />
      </div>
    );
  }

  if (activeSection === "board") {
    return (
      <div className="min-h-screen bg-white">
        <Navbar active="about" onNavigate={onNavigate} />

        <main>
          <section className="relative overflow-hidden bg-slate-950 text-white">
            <img
              src="https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/Board-of-directors-desktop_.jpg"
              alt=" background"
              className="absolute inset-0 h-full w-full object-cover opacity-100"
            />
            <div className="absolute inset-0 bg-blue-900/30"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-28 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300 mb-4">
                Board
              </p>
              <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-[0.1em]">
                Board of Directors
              </h1>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="mb-12">
                <p className="text-xs uppercase tracking-[0.35em] text-sky-500 mb-3">
                  Board
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Our Board of Directors
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {boardMembers.map((member) => (
                  <div key={member.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                    <div className="overflow-hidden rounded-3xl bg-slate-100">
                      <img
                        src={member.image || heroImg}
                        alt={member.name}
                        className="h-72 w-full object-cover"
                      />
                    </div>
                    <div className="pt-6 text-center">
                      <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                      <p className="mt-2 text-sm text-slate-500">{member.title}</p>
                      <p className="mt-4 text-sm leading-7 text-slate-600">{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          </section>

          <section className="relative overflow-hidden bg-slate-950 text-white py-24">
            <img
              src={heroImg}
              alt="Contact background"
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-slate-950/90"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">
                  How to get in touch?
                </p>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Looking for a reliable outsourcing partner?
                </h2>
                <p className="text-slate-300 leading-8">
                  Feel free to reach out via our contact form or drop us an email at{' '}
                  <a href="mailto:contactus@portcitybpo.lk" className="text-yellow-300 underline">
                    contactus@portcitybpo.lk
                  </a>
                  . We are eager to hear from you.
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate("contact")}
                  className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 transition hover:bg-yellow-300"
                >
                  Contact Us
                </button>
              </div>

              <div className="rounded-[32px] overflow-hidden shadow-2xl">
                <img
                  src={heroImg}
                  alt="Contact support"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </section>
        </main>

        <Footer onNavigate={onNavigate} />
      </div>
    );
  }

  if (activeSection === "leadership") {
    return (
      <div className="min-h-screen bg-white">
        <Navbar active="about" onNavigate={onNavigate} />

        <main>
          <section className="relative overflow-hidden  text-white">
            <img
              src="https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/LEADERSHIP-desktop.jpg"
              alt="Leadership team background"
              className="absolute inset-0 h-full w-full object-cover opacity-100"
            />
            <div className="absolute inset-0 bg-blue-900/30"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-28 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300 mb-4">
                Leadership
              </p>
              <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-[0.1em]">
                Leadership Team
              </h1>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="mb-12">
                <p className="text-xs uppercase tracking-[0.35em] text-sky-500 mb-3">
                  Leadership
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Our Leadership Team
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {leadershipTeam.slice(0, 3).map((member) => (
                  <div key={member.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                    <div className="overflow-hidden rounded-3xl bg-slate-100">
                      <img
                       src={member.image || heroImg}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="pt-6 text-center">
                      <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                      <p className="mt-2 text-sm text-slate-500">{member.title}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {leadershipTeam.slice(3).map((member) => (
                  <div key={member.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                    <div className="overflow-hidden rounded-3xl bg-slate-100">
                      <img
                        src={heroImg}
                        alt={member.name}
                        className="h-72 w-full object-cover"
                      />
                    </div>
                    <div className="pt-6 text-center">
                      <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                      <p className="mt-2 text-sm text-slate-500">{member.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden bg-slate-950 text-white py-24">
            <img
              src={heroImg}
              alt="Contact background"
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-slate-950/90"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">
                  How to get in touch?
                </p>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Looking for a reliable outsourcing partner?
                </h2>
                <p className="text-slate-300 leading-8">
                  Feel free to reach out via our contact form or drop us an email at{' '}
                  <a href="mailto:contactus@portcitybpo.lk" className="text-yellow-300 underline">
                    contactus@portcitybpo.lk
                  </a>
                  . We are eager to hear from you.
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate("contact")}
                  className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 transition hover:bg-yellow-300"
                >
                  Contact Us
                </button>
              </div>

              <div className="rounded-[32px] overflow-hidden shadow-2xl">
                <img
                  src={heroImg}
                  alt="Contact support"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </section>
        </main>

        <Footer onNavigate={onNavigate} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar active="about" />

      <main>
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-700 via-slate-900 to-black opacity-95"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-28">
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-400 mb-4">
              About Us
            </p>
            <h2 className="text-lg uppercase tracking-[0.4em] text-sky-400 mb-3">
              About
            </h2>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              ABOUT US
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-200 leading-8">
              Who we are, what we stand for, and how Port City BPO delivers trusted offshore business services with global reach.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 shadow-lg shadow-yellow-400/20 transition hover:bg-yellow-300"
              >
                Contact Us
              </button>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/20"
              >
                Back to Home
              </button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
              <aside className="space-y-6 rounded-[32px] border border-slate-200/60 bg-white p-6 text-slate-900 shadow-lg">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  About sections
                </p>
                <div className="space-y-3">
                  {sections.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSectionClick(item.id)}
                      className={`flex w-full items-center justify-between rounded-3xl px-5 py-5 text-left text-sm transition ${activeSection === item.id
                          ? "bg-sky-50 text-sky-700 shadow-inner"
                          : "text-slate-700 hover:bg-slate-100"
                        }`}
                    >
                      <span className="font-medium">{item.title}</span>
                      <ChevronDown size={16} className="text-slate-400" />
                    </button>
                  ))}
                </div>
              </aside>

              <div className="space-y-20">
                {sections.map((item, index) => (
                  <div
                    key={item.id}
                    ref={sectionRefs[item.id]}
                    className={`grid gap-10 items-center md:grid-cols-2 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                      }`}
                  >
                    <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                      <div className="rounded-[32px] overflow-hidden shadow-2xl">
                        <img
                          src={heroImg}
                          alt={item.title}
                          className="w-full h-96 object-cover"
                        />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold text-[#005ca9] uppercase">
                        {item.title}
                      </h2>
                      <p className="text-gray-700 leading-8">
                        {item.description}
                      </p>
                      <button
                        type="button"
                        onClick={() => navigate("/contact")}
                        className="inline-flex w-full justify-center items-center gap-3 rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 sm:w-auto"
                      >
                        {item.buttonText}
                        <span aria-hidden="true">›</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
                How to get in touch?
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Looking for a reliable outsourcing partner?
              </h2>
              <p className="text-slate-300 leading-8">
                Feel free to reach out via our contact form or drop us an email at{' '}
                <a href="mailto:contactus@portcitybpo.lk" className="text-yellow-300 underline">
                  contactus@portcitybpo.lk
                </a>
                . We are eager to hear from you.
              </p>
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 transition hover:bg-yellow-300"
              >
                Contact Us
              </button>
            </div>

            <div className="rounded-[32px] overflow-hidden shadow-2xl">
              <img
                src={heroImg}
                alt="Contact support"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}