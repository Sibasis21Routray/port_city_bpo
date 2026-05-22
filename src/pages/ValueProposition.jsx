import { Check, Star } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImg from "../assets/hero.png";
import ConnectBanner from "../components/ConnectBanner";

export default function ValueProposition() {
  const cards = [
  {
    title: "Human Resources",
    text: "Sri Lanka's English, Sinhalese and Hindi speaking populace benefits businesses targeting English, and regional markets across Asia, ensuring cost-effective local recruitment.",
    img: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2024/01/HR.jpg",
  },
  {
    title: "Environment",
    text: "Colombo with its political stability, scenic landscapes, and year-round warm climate offers low living cost, making operational expenses affordable compared to other locations.",
    img: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/Environment.webp",
  },
  {
    title: "Strategic Location",
    text: "Strategically positioned in Asia, Colombo offers geographical advantage for business operations in terms of business negotiations, recruitment, and travel as time and cost are comparatively lower.",
    img: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2024/01/Strategic-location.jpg",
  },
  {
    title: "Quality",
    text: "Our commitment is to ensure partnerships only with legal and reputable service providers who are compliant with Sri Lankan laws.",
    img: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/08/BPO-Quality2.jpg",
  },
  {
    title: "Cost",
    text: "Port City BPO prioritises cost considerations, guaranteeing transparent pricing without hidden fees. Our competitive rates ensure affordability.",
    img: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/08/BPO-Cost.jpg",
  },
];

  return (
    <div className="min-h-screen bg-white">
      <Navbar active="value" />

     <header className="relative w-full min-h-[440px] md:min-h-[480px] lg:min-h-[520px] flex items-center overflow-hidden bg-[#0c1e3a]">
  {/* Full-bleed background image overlay mapping exactly to the reference banner image composition.
    Using a clean linear background blend to smoothly transition from the solid corporate blue on the left 
    into the subject image background photography framing the right side.
  */}
  <div 
    className="absolute inset-0 bg-cover bg-center md:bg-[right_center] lg:bg-right opacity-90 select-none pointer-events-none"
    style={{
      backgroundImage: `linear-gradient(to right, #1a73b7 0%, #1a73b7 35%, rgba(26, 115, 183, 0.85) 50%, rgba(12, 30, 58, 0.1) 75%, rgba(12, 30, 58, 0) 100%), url('https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/Value-page-desktop.jpg')`
    }}
  />

  {/* Content Structural Container */}
  <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 py-16">
    <div className="max-w-[650px] text-white flex flex-col items-start text-left">
      
      {/* Main Title Header */}
      <h1 className="text-[36px] sm:text-[46px] md:text-[56px] lg:text-[64px] font-bold tracking-tight leading-[1.1] text-white font-sans">
        Value Proposition
      </h1>
      
      {/* Secondary Subtitle Accent */}
      <p className="mt-3 text-[15px] sm:text-[17px] md:text-[19px] font-medium tracking-wide text-white/90">
        Port City BPO's Competitive Edge
      </p>

    </div>
  </div>
</header>

      <main className="max-w-7xl mx-auto px-6 py-16">
  {/* First row - 3 cards */}
  <div className="grid md:grid-cols-3 gap-8">
    {cards.slice(0, 3).map((c) => (
      <div key={c.title} className="space-y-4 text-center">
        <div className="w-full h-[40vh] bg-gray-100 rounded-xl overflow-hidden shadow-md">
          <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
        </div>
        <h3 className="font-bold text-lg">{c.title}</h3>
        <p className="text-sm text-gray-600">{c.text}</p>
      </div>
    ))}
  </div>

 {/* Second row - 2 cards (Quality and Cost) */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-3xl mx-auto">
  {cards.slice(3, 5).map((c) => (
    <div key={c.title} className="space-y-4 text-center">
      <div className="w-full h-[40vh] mx-auto rounded-xl overflow-hidden shadow-md">
        <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
      </div>
      <h4 className="font-bold text-lg">{c.title}</h4>
      <p className="text-sm text-gray-600">{c.text}</p>
    </div>
  ))}
</div>
 
</main>

 {/* CTA Section */}
  
          <ConnectBanner 
            title="REACH OUT TO US EASILY!"
            descriptionPrefix="Connect "
            formLink="/contact"
            formText="here"
            descriptionMiddle=" or drop us a line at"
            email=" hello@portcitybpo.lk "
            emailText=" hello@portcitybpo.lk "
            descriptionSuffix=". We look forward to hearing from you."
            buttonText="Contact Us"
            backgroundImage="https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2024/01/CS-bottom-banner-value-proposition.webp"
          />
       

      <Footer />
    </div>
  );
}
