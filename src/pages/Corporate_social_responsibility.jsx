import React, { useState ,useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ConnectBanner from '../components/ConnectBanner';
import { Clock, TimerIcon } from 'lucide-react';

// CSR Data Object
const csrData = {
  "smarter-classrooms-hatton": {
    id: "smarter-classrooms-hatton",
    title: "Smarter Classrooms for Tomorrow: Empowering Young Minds in Hatton",
    date: "5 May 2026",
    shortDescription: "Smarter Classrooms for Tomorrow: Empowering Young Minds in Hatton At...",
    description: `Port City BPO proudly launched the "Smarter Classrooms for Tomorrow" initiative in Hatton, aimed at transforming educational spaces into modern, technology-enabled learning environments. This project focused on providing essential digital infrastructure, including computers, smart boards, and educational software to underprivileged schools in the Hatton region.

The initiative benefited over 500 students by giving them access to digital learning tools that were previously unavailable. Teachers received specialized training to effectively integrate technology into their daily lesson plans, ensuring sustainable impact.

This project represents Port City BPO's commitment to bridging the digital divide in Sri Lanka's education sector. By empowering young minds with technology, we are helping build a brighter future for the next generation of leaders, innovators, and change-makers.`,
    photos: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80",
    ]
  },
  "games-of-love-hope": {
    id: "games-of-love-hope",
    title: "සෙනෙහසේ අවුරුදු සෙල්ලම් – Games of Love & Hope: A New Year Celebration of Heart, Unity & Hope",
    date: "4 May 2026",
    shortDescription: "සෙනෙහසේ අවුරුදු සෙල්ලම් – Games of Love & Hope: A...",
    description: `Port City BPO organized "Games of Love & Hope," a special Sinhala and Tamil New Year celebration that brought together children from underprivileged backgrounds for a day filled with traditional games, cultural activities, and festive joy. The event was designed to promote unity, cultural harmony, and community spirit.

Over 200 children participated in traditional New Year games such as Kotta Pora, Kana Mutti, and Raban Padeema. The event also included a gift distribution ceremony where each child received school supplies, clothing, and sweets.

This celebration exemplified our commitment to spreading joy and hope within communities, ensuring that every child feels valued and included, regardless of their background.`,
    photos: [
      "https://images.unsplash.com/photo-1533587851505-d119c13b508b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1200&q=80",
    ]
  },
  "flow-of-hope": {
    id: "flow-of-hope",
    title: "Flow of hope – Enhancing Access to Clean, Sustainable Water at Senanayake Maha Pirivena",
    date: "30 March 2026",
    shortDescription: "Flow of hope – Enhancing Access to Clean, Sustainable Water...",
    description: `Access to clean water is a fundamental human right. Port City BPO's "Flow of Hope" initiative focused on installing a sustainable water purification and distribution system at Senanayake Maha Pirivena, providing clean drinking water to over 300 monks and students daily.

The project included the installation of advanced water filtration units, storage tanks, and distribution pipelines. We also conducted workshops on water conservation and hygiene practices to ensure long-term sustainability.

This initiative has dramatically improved the quality of life at the Pirivena, reducing waterborne diseases and allowing students to focus better on their studies.`,
    photos: [
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581093573221-1e1c9c5e8e1d?auto=format&fit=crop&w=1200&q=80",
    ]
  },
  "community-relief-katupathwewa": {
    id: "community-relief-katupathwewa",
    title: "Port City BPO's Community Relief Initiative – Katupathwewa",
    date: "25 February 2026",
    shortDescription: "Port City BPO's Community Relief Initiative – Katupathwewa At Port...",
    description: `In response to the severe drought affecting the Katupathwewa region, Port City BPO launched a comprehensive community relief initiative to support affected families. The project provided essential supplies including dry rations, drinking water, and hygiene kits to over 150 families.

Our team worked closely with local community leaders to identify the most vulnerable households and ensure aid reached those in greatest need. The initiative also included a mobile medical camp offering free health check-ups and medicines.

This relief effort demonstrated our commitment to standing with communities during times of crisis, providing immediate support while exploring long-term solutions.`,
    photos: [
      "https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    ]
  },
  "apeksha-hospital-donation": {
    id: "apeksha-hospital-donation",
    title: "Donation Initiative | Apeksha National Cancer Hospital",
    date: "23 February 2026",
    shortDescription: "Donation Initiative | Apeksha National Cancer Hospital At Port City...",
    description: `Port City BPO extended a helping hand to patients battling cancer at Apeksha National Cancer Hospital in Maharagama. Our donation initiative provided essential medical supplies, nutritional supplements, and comfort items to support patients undergoing treatment.

The donation included medicines, hospital beds, wheelchairs, and patient care supplies valued at over LKR 2 million. Our team also spent time with patients, offering emotional support and encouragement during their treatment journey.

We remain committed to supporting healthcare institutions and improving the quality of life for patients facing serious illnesses.`,
    photos: [
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579159278902-1c733e153361?auto=format&fit=crop&w=1200&q=80",
    ]
  },
  "blood-donation-campaign": {
    id: "blood-donation-campaign",
    title: "Giving the Gift of Life: Port City BPO Blood Donation Campaign",
    date: "18 February 2026",
    shortDescription: "Giving the Gift of Life: Port City BPO Blood Donation...",
    description: `In partnership with the National Blood Transfusion Service, Port City BPO organized a successful blood donation campaign that collected over 100 units of life-saving blood. Employees, their families, and community members came together to support this noble cause.

The campaign featured educational sessions on the importance of regular blood donation and its impact on saving lives. Donors received health screenings and post-donation care, ensuring a safe and comfortable experience.

This initiative reflects our commitment to community health and our belief that every individual can make a difference by giving the gift of life.`,
    photos: [
      "https://images.unsplash.com/photo-1615461066841-6116e6109f8b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584365685547-9a5fb6f3a70c?auto=format&fit=crop&w=1200&q=80",
    ]
  },
  "rajanganaya-flood-relief": {
    id: "rajanganaya-flood-relief",
    title: "Rajanganaya Flood Restoration Project",
    date: "13 February 2026",
    shortDescription: "Rajanganaya Flood Restoration Project At Port City BPO, we believe...",
    description: `Following devastating floods in Rajanganaya, Port City BPO launched a comprehensive restoration project to help affected communities rebuild their lives. The initiative provided emergency relief supplies, temporary shelter materials, and support for rebuilding damaged homes.

We distributed dry rations, drinking water, clothing, and hygiene kits to over 250 families. Additionally, we contributed to repairing damaged infrastructure including roads and community buildings.

Our team worked alongside local authorities and community organizations to ensure coordinated and effective relief efforts.`,
    photos: [
      "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581092335873-5a1d1c9e4b8f?auto=format&fit=crop&w=1200&q=80",
    ]
  },
  "infant-jesus-church": {
    id: "infant-jesus-church",
    title: "Building Hope Together : Supporting the Construction of Infant Jesus Church – Dummalasuriya, Chilaw",
    date: "23 January 2026",
    shortDescription: "Building Hope Together : Supporting the Construction of Infant Jesus...",
    description: `Port City BPO contributed to the construction of Infant Jesus Church in Dummalasuriya, Chilaw, supporting the local Catholic community's efforts to build a place of worship. Our donation helped fund essential construction materials and labor costs.

The new church will serve over 500 families in the area, providing a spiritual home for generations to come. We were honored to partner with the community in bringing this vision to life.

This project exemplifies our commitment to supporting religious and cultural institutions that strengthen community bonds.`,
    photos: [
      "https://images.unsplash.com/photo-1438032945730-e0eb666dc7b6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?auto=format&fit=crop&w=1200&q=80",
    ]
  },
  "seva-lanka-partnership": {
    id: "seva-lanka-partnership",
    title: "Supporting Communities Through Our CSR Partnership with Seva Lanka",
    date: "23 January 2026",
    shortDescription: "Supporting Communities Through Our CSR Partnership with Seva Lanka As...",
    description: `Port City BPO established a strategic partnership with Seva Lanka, a renowned humanitarian organization, to support community development projects across Sri Lanka. This collaboration focuses on education, healthcare, and livelihood development initiatives.

Our joint projects include building school libraries, providing scholarships to deserving students, and supporting small business development in rural communities.

Through this partnership, we aim to create sustainable impact and empower communities to achieve self-reliance and prosperity.`,
    photos: [
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=1200&q=80",
    ]
  },
  "foundation-of-goodness": {
    id: "foundation-of-goodness",
    title: "Partnering for Positive Impact with the Foundation of Goodness",
    date: "10 January 2026",
    shortDescription: "Partnering for Positive Impact with the Foundation of Goodness Port...",
    description: `Our partnership with the Foundation of Goodness enables us to reach underserved communities across Sri Lanka with holistic development programs. Together, we support initiatives in education, vocational training, healthcare, and sports development.

Recent projects include establishing IT labs in rural schools, conducting career guidance workshops, and providing healthcare camps in remote villages.

This collaboration has touched thousands of lives, creating opportunities for youth and empowering communities to break the cycle of poverty.`,
    photos: [
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
    ]
  },
  "grace-perera-home": {
    id: "grace-perera-home",
    title: "Port City BPO: CSR at Grace Perera Home for Elders",
    date: "14 October 2025",
    shortDescription: "Port City BPO: CSR at Grace Perera Home for Elders...",
    description: `Our team visited Grace Perera Home for Elders to spend quality time with the residents and provide essential supplies including food, medicines, and comfort items. The visit included entertainment programs, health check-ups, and a special lunch prepared for the elderly residents.

We also contributed to facility improvements including painting, repairs, and garden maintenance to create a more comfortable living environment.

This initiative reflects our deep respect for elders and our commitment to ensuring they live their golden years with dignity and joy.`,
    photos: [
      "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1200&q=80",
    ]
  },
  "jayanthi-infants-centre": {
    id: "jayanthi-infants-centre",
    title: "Port City BPO: CSR at Jayanthi Infant's Centre",
    date: "9 July 2025",
    shortDescription: "Port City BPO: CSR at Jayanthi Infant's Centre Our latest...",
    description: `Port City BPO brought smiles to the children at Jayanthi Infant's Centre through a day filled with activities, gifts, and nutritious meals. We provided educational toys, storybooks, art supplies, and clothing for all children at the center.

Our team organized interactive sessions including storytelling, drawing competitions, and musical games designed to stimulate learning and creativity.

The visit concluded with a special lunch and distribution of gift packs, leaving the children with wonderful memories of a day dedicated entirely to their happiness.`,
    photos: [
      "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544717305-38f314f48cba?auto=format&fit=crop&w=1200&q=80",
    ]
  },
  "aloka-elders-home": {
    id: "aloka-elders-home",
    title: "Port City BPO: CSR at Aloka Elders' Home, Panadura",
    date: "3 April 2025",
    shortDescription: "Charity Program at Aloka Elders' Home, Panadura Recognizing the wisdom...",
    description: `Our CSR initiative at Aloka Elders' Home focused on honoring the elderly residents and improving their quality of life. We provided essential supplies, medical assistance, and organized recreational activities including games, music, and storytelling sessions.

The project included repairs and renovations to enhance the living facilities, ensuring a safe and comfortable environment for all residents.

We believe every elder deserves respect, care, and dignity, and this initiative was a small step towards honoring the wisdom and contributions of our senior citizens.`,
    photos: [
      "https://images.unsplash.com/photo-1581578735549-8c3f5a1f5b8a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559127634-6d8b2c1c1c1c?auto=format&fit=crop&w=1200&q=80",
    ]
  },
  "sisters-of-charity": {
    id: "sisters-of-charity",
    title: "Port City BPO: CSR at Sisters of Charity of Jesus and Mary",
    date: "11 December 2024",
    shortDescription: "Providing Stationary for the children at Sisters of Charity of...",
    description: `Port City BPO supported the educational needs of children at Sisters of Charity of Jesus and Mary by providing comprehensive stationery packs, school bags, and educational materials. The donation benefited over 100 children, ensuring they had the necessary tools for their studies.

Our team also spent time engaging with the children through educational games and motivational talks, encouraging them to pursue their dreams despite challenges.

This initiative underscores our commitment to education as a pathway to breaking the cycle of poverty and building brighter futures.`,
    photos: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    ]
  },
  "sri-jinananda-centre": {
    id: "sri-jinananda-centre",
    title: "Port City BPO: CSR at Sri Jinananda Children's Development Centre",
    date: "11 December 2024",
    shortDescription: "Breakfast for the children at Sri Jinananda Children's Development Centre...",
    description: `Our team at Port City BPO started the day early to prepare and serve a nutritious breakfast for the children at Sri Jinananda Children's Development Centre. The children were treated to a warm, healthy meal along with fruits and milk.

Beyond the breakfast, we provided essential supplies including clothing, shoes, and personal care items. The day included fun activities, games, and educational sessions designed to inspire and motivate the children.

This heartwarming initiative reminded us of the power of small acts of kindness in making a significant difference in young lives.`,
    photos: [
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
    ]
  }
};

// Main CSR Listing Page Component
function CorporateSocialResponsibility() {
  const navigate = useNavigate();

  // Convert object to array for mapping
  const csrEvents = Object.values(csrData).sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen bg-white ">
      
      {/* Hero Section */}
      <header
        className="relative h-130 flex items-center"
        style={{
          backgroundImage: `url(https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/Newsroom-page-desktop.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="absolute inset-0 bg-black/50"></div> */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <h1 className="max-w-2xl text-4xl md:text-7xl font-bold">Corporate Social Responsibility</h1>
         
        </div>
      </header>

      {/* CSR Events Grid */}
      <main className="max-w-7xl mx-auto px-6 py-16">
       
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {csrEvents.map((event) => (
            <div
              key={event.id}
              onClick={() => navigate(`/newsroom/corporate-social-responsibility/${event.id}`)}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={event.photos[0]}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#005ca9] transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {event.shortDescription}
                </p>
                
                <div className='flex gap-2 mt-1 items-center'>
                    <Clock className="w-4 h-4 inline-block text-gray-600 mt-" />
                    <p className="text-sm text-gray-600 font-light ">{event.date}</p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </main>

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
    </div>
  );
}

// Individual CSR Event Detail Page Component
// Individual CSR Event Detail Page Component
export function CSRDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = csrData[id];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!event) {
    return (
      <div className="min-h-screen bg-white ">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-8">The CSR initiative you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/newsroom/corporate-social-responsibility')}
            className="bg-[#005ca9] text-white px-6 py-3 rounded-lg hover:bg-[#004a8a] transition-colors"
          >
            Back to CSR Initiatives
          </button>
        </div>
      </div>
    );
  }

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % event.photos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + event.photos.length) % event.photos.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <div className="min-h-screen bg-white ">
      
      {/* Hero Section with Title and Date */}
      <div className="relative bg-[#0670b2] text-white py-10 text-left">
        <div className="max-w-10/12 mx-auto px-6 py-">
          <h1 className="heading font-bold ">{event.title}</h1>
        </div>
      </div>

      {/* Description Section */}
      <section className="max-w-10/12 mx-auto px-6 py-6">
        <div className="prose prose-lg max-w-none">
          {event.description.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-gray-600 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Photos Gallery Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-10/12 mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {event.photos.map((photo, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden  shadow-lg cursor-pointer"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={photo}
                  alt={`${event.title} - Photo ${idx + 1}`}
                  className="w-full h-84 object-cover group-hover:scale-110 transition-transform duration-500"
                />
               
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Fullscreen Button */}
          {/* <button
            onClick={() => {
              const imgElement = document.querySelector('.lightbox-image');
              if (imgElement && imgElement.requestFullscreen) {
                imgElement.requestFullscreen();
              }
            }}
            className="absolute top-4 right-20 z-10 text-white hover:text-gray-300 transition-colors"
            aria-label="Fullscreen"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button> */}

          {/* Previous Arrow */}
          {event.photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 hover:bg-black/70"
              aria-label="Previous image"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next Arrow */}
          {event.photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 hover:bg-black/70"
              aria-label="Next image"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {event.photos.length}
          </div>

          {/* Main Image */}
          <img
            src={event.photos[currentImageIndex]}
            alt={`${event.title} - ${currentImageIndex + 1}`}
            className="lightbox-image max-w-[95vw] max-h-[90vh] object-contain cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Back Button */}
      <div className="max-w-10/12 mx-auto  py-12">
        <button
          onClick={() => navigate('/newsroom/corporate-social-responsibility')}
          className="inline-flex items-center text-[#005ca9] font-semibold hover:text-[#ff9933] transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to All CSR Initiatives
        </button>
      </div>

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
    </div>
  );
}

export default CorporateSocialResponsibility;