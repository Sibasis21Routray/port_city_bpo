import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import heroImg from "../assets/hero.png";
import ConnectBanner from "../components/ConnectBanner";

function AboutLanding() {
  const navigate = useNavigate();

  const aboutSections = [
    {
      id: "who-we-are",
      title: "Who We Are, What We Stand For",
      description: "Authorised & Recognised",
      content: `Port City BPO (Pvt) Ltd. is assumed by the JV entity of Aitken Spence PLC and IRIS Corporation Berhad. Our organisation is an Authorised Person approved by the Colombo Port City Economic Commission (CPCEC) specialising in BPO. An Authorised Person is an entity, that the CPCEC has granted a license in terms of the Colombo Port City Economic Commission Act No. 11 of 2021.`,
      ctaText: "Learn More",
      ctaLink: "/about/who",
      img: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2024/01/CS-Outsourcing.webp",
    },
    {
      id: "board-of-directors",
      title: "Board of Directors",
      description: "Strategic Leadership",
      content: `The Board is responsible for the Group's performance and is accountable to the shareholders who appoint them. They set the strategic vision, provide policy direction, and ensure diligent oversight to drive the achievement of strategic goals.`,
      ctaText: "Learn More",
      ctaLink: "/about/board",
      img: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2024/01/Technical-support.webp",
    },
    {
      id: "leadership",
      title: "Leadership Team",
      description: "Operational Excellence",
      content: `The Leadership Team is responsible for executing the Group's strategy, ensuring operational excellence, and driving sustainable growth. Guided by the Board's vision, they translate strategic objectives into actionable plans while maintaining accountability to stakeholders.`,
      ctaText: "Learn More",
      ctaLink: "/about/leadership",
      img: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2024/01/Data-entry-and-processing.webp",
    },
    {
      id: "geo-coverage",
      title: "Geographic Coverage",
      description: "Global Reach",
      content: `Port City BPO proudly delivers offshore services from Sri Lanka, serving a diverse range of countries including Indonesia, India, Vietnam, the Philippines, Thailand, Japan, and Korea. Our extensive coverage continues to grow, reinforcing our commitment to providing innovative and cost-effective solutions to a global client base.`,
      ctaText: "Learn More",
      ctaLink: "/about/coverage",
      img: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2024/01/Human-Resource-V2.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-white ">
      <header
        className="relative h-80 md:h-120 lg:h-130 flex items-center"
        style={{
          backgroundImage: `url(https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/Services-page-desktop.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
          <h2 className="text-4xl md:text-7xl font-extrabold">About Us</h2>
          <p className="mt-2 text-sm md:text-base">Who We Are, What We Stand For</p>
        </div>
      </header>

      <main className="max-w-10/12 mx-auto px-6 py-16 space-y-20">
        {aboutSections.map((s, i) => (
          <div key={s.id} className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`${i % 2 === 0 ? "order-1" : "order-2"}`}>
              <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto flex-shrink-0">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            <div
              className={`${i % 2 === 0 ? "order-2 text-left" : "order-1 text-left"}`}
            >
              <h3 className="heading font-bold mb-2">{s.title}</h3>
              {s.description && (
                <p className="text-[#ff9933] font-semibold mb-4 text-sm uppercase tracking-wide">
                  {s.description}
                </p>
              )}
              <p className="text-gray-700 leading-7">{s.content}</p>

              {/* CTA Button Group */}
              <div className="mt-6 sm:mt-8 mb-4 md:mb-0 relative inline-block">
                {/* Geometric orange angle backing box */}
                <div className="absolute -left-1.5 -top-1.5 w-12 h-8 sm:w-16 sm:h-10 bg-[#ff9933]" />

                <button
                  onClick={() => navigate(s.ctaLink)}
                  type="button"
                  className="relative z-10 inline-flex items-center justify-between bg-[#f8f9fa] px-4 sm:px-6 py-2.5 sm:py-3 min-w-[140px] sm:min-w-[160px] text-base font-bold text-black tracking-tight shadow-md hover:bg-white hover:shadow-lg transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ffcc00] focus:ring-offset-2"
                >
                  <span>{s.ctaText}</span>
                  <svg
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black ml-3 sm:ml-4"
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
        ))}
      </main>

      {/* CTA Section */}
      <ConnectBanner
        title="How to get in touch?"
        descriptionPrefix="Feel free to reach out to us via the contact form "
        formLink="/contact"
        formText="here"
        descriptionMiddle=" or drop us an email at "
        email="contactus@portcitybpo.lk"
        emailText="contactus@portcitybpo.lk"
        descriptionSuffix=". We are eager to hear from you."
        buttonText="Contact Us"
        backgroundImage="https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2024/01/CS-bottom-banner-value-proposition.webp"
      />
    </div>
  );
}

export default AboutLanding;