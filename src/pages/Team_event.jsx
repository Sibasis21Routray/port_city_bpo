import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ConnectBanner from '../components/ConnectBanner';
import { Clock } from 'lucide-react';

// Team Events Data Object
const teamEventsData = {
  "sinhala-tamil-new-year-2026": {
    id: "sinhala-tamil-new-year-2026",
    title: "Sinhala and Tamil New Year Celebrations at Port City BPO",
    date: "5 May 2026",
    shortDescription:
      "Sinhala and Tamil New Year Celebrations at Port City BPO...",
      thumbnail: "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/05/4-1-1024x858.png",
    description: `Port City BPO celebrated the Sinhala and Tamil New Year with great enthusiasm and cultural spirit. The event brought together employees from all backgrounds to participate in traditional games, enjoy festive meals, and embrace the rich cultural heritage of Sri Lanka.

Our celebration featured traditional customs, joyful moments, and shared experiences that reflected the spirit of Avurudu. From warm interactions to festive activities, the event created an atmosphere filled with positivity and connection. It was a meaningful opportunity for our employees to appreciate our heritage while strengthening the bond we share as one team at Port City BPO.

As we step into a new year, we remain committed to fostering a workplace culture built on respect, collaboration, and continuous growth.

We extend our heartfelt wishes to everyone for a joyful, prosperous, and blessed New Year.

සුභ අලුත් අවුරුද්දක් වේවා! இனிய புத்தாண்டு நல்வாழ்த்துக்கள்!`,
    photos: [
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/05/5-1-1024x858.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/05/6-1-1024x858.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/05/7-1-1024x858.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/05/8-1-1024x858.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/05/4-1-1024x858.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/05/3-1-scaled.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/05/2-1-1024x858.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/05/1-1-scaled.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/05/9-1-scaled.png",
    ],
  },
  "womens-day-2026": {
    id: "womens-day-2026",
    title: "Celebrating the Strength and Impact of Women Around the World",
    date: "10 March 2026",
    shortDescription:
      "Celebrating the Strength and Impact of Women Around the World...",
      thumbnail:"https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/03/2-1024x858.png",
    description: `International Women's Day at Port City BPO was a celebration of the incredible women who drive our organization forward. The event featured inspiring speeches from female leaders, panel discussions on women in the workplace, and recognition of outstanding contributions by women across all departments.

We organized workshops on professional development, work-life balance, and leadership skills specifically tailored for women. The celebration also included cultural performances, networking sessions, and a special awards ceremony honoring women who have made significant impacts in their roles.

This event reinforced our commitment to gender equality and creating an environment where women can thrive professionally and personally.`,
    photos: [
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/03/14-1024x858.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/03/11-1024x858.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/03/4-1024x858.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/03/2-1024x858.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/03/8-1024x858.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/03/6-1024x858.png",
    ],
  },
  "talent-lift-2026": {
    id: "talent-lift-2026",
    title: "Port City BPO Showcases Career Pathways at Talent Lift 2026",
    date: "23 February 2026",
    shortDescription:
      "Port City BPO Showcases Career Pathways at Talent Lift 2026...",
      thumbnail:"https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/02/2-1024x858.png",
    description: `Port City BPO participated in Talent Lift 2026, one of Sri Lanka's premier career fairs, connecting with aspiring professionals and showcasing exciting career opportunities in the BPO industry. Our booth attracted hundreds of job seekers eager to learn about the dynamic work environment at Port City BPO.

Our HR team conducted on-the-spot interviews, career guidance sessions, and portfolio reviews. We highlighted our commitment to employee development, innovative work culture, and the diverse career paths available within our organization.

The event was a tremendous success, resulting in numerous job offers and building a strong pipeline of future talent for various departments across the company.`,
    photos: [
     "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/02/8-2048x1717.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/02/7-2048x1717.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/02/6-2048x1717.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/02/5-2048x1717.png",
        "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/02/4-2048x1717.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/02/3-2048x1717.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/02/1-2048x1717.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/02/2-2048x1717.png"
    ],
  },
  "new-year-2026-welcome": {
    id: "new-year-2026-welcome",
    title: "A Shared Welcome to 2026",
    date: "10 January 2026",
    shortDescription:
      "A Shared Welcome to 2026 To welcome 2026, we gathered...",
       thumbnail:"https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/01/10-1-1024x858.png",
    description: `Port City BPO welcomed the New Year 2026 with a grand celebration that brought together all employees for a day of reflection, gratitude, and excitement for the future. The event featured inspiring messages from leadership, team-building activities, and a look back at the achievements of the past year.

Employees shared their New Year resolutions, participated in goal-setting workshops, and enjoyed cultural performances. A special awards ceremony recognized outstanding contributions from the previous year.

The celebration strengthened our sense of community and set a positive tone for a year of growth, innovation, and shared success.`,
    photos: [
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/01/10-1-2048x1717.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/01/1-1-2048x1717.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/01/4-2-2048x1717.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/01/4-2-2048x1717.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/01/3-1-2048x1717.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/01/6-1-2048x1717.png",
    ],
      
  },
  "secret-santa-2025": {
    id: "secret-santa-2025",
    title: "Secret Santa celebration 2025",
    date: "10 January 2026",
    shortDescription:
      "Secret Santa celebration 2025 Port City BPO was filled with...",
       thumbnail:"https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/01/4-1-1024x1024.png",
    description: `The Secret Santa celebration at Port City BPO brought the magic of the holiday season to our workplace. Employees participated in the gift exchange tradition, spreading joy and fostering a sense of camaraderie across departments.

The event included festive decorations, holiday music, a special lunch, and the eagerly awaited gift exchange where colleagues surprised each other with thoughtful presents. Laughter and holiday cheer filled every corner of our office.

This celebration highlighted the warm, family-like culture at Port City BPO, where employees genuinely care for one another and celebrate together.`,
    photos: [
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/01/10-2048x2048.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/01/11-2048x2048.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/01/13-1-2048x2048.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/01/4-1-2048x2048.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/01/8-2048x2048.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/01/9-2048x2048.png"
    ],
  },
  "ica-marathon-2025": {
    id: "ica-marathon-2025",
    title: "More Than Just a Finish Line: Port City BPO runs the ICA 2025",
    date: "10 January 2026",
    shortDescription: "More Than Just a Finish Line: Port City BPO runs...",
     thumbnail:"https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/01/3-1024x724.png",
    description: `Port City BPO employees participated in the ICA Marathon 2025, demonstrating our commitment to health, wellness, and teamwork. A dedicated team of runners from across the company trained together and completed various race categories, from the full marathon to the fun run.

Beyond the athletic achievement, the event served as a fundraiser for local charities, with Port City BPO matching employee donations. The company's running team wore custom-designed jerseys, becoming a visible symbol of our corporate spirit.

The marathon experience strengthened bonds among participants and showcased Port City BPO's vibrant, energetic culture to the wider community.`,
    photos: [
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/01/3-2048x1448.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/01/4-2048x1448.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/01/5-2048x1448.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/01/1-2048x1448.png",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2026/01/2-2048x1448.png"
    ],
  },
  "chinese-new-year-2025": {
    id: "chinese-new-year-2025",
    title: "Port City BPO: Chinese New Year 2025",
    date: "29 January 2025",
    shortDescription: "Gong Xi Fa Cai!",
     thumbnail:"https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/CNY2.jpeg",
    description: `Port City BPO celebrated Chinese New Year 2025 with vibrant festivities honoring the Year of the Dragon. The office was decorated in traditional red and gold, and employees enjoyed authentic Chinese cuisine, cultural performances, and the traditional exchange of red envelopes (Ang Pao).

The celebration included a Lion Dance performance, which brought energy and good fortune to our workplace. Employees learned about Chinese New Year traditions and participated in calligraphy workshops.

This event reflected our commitment to cultural diversity and creating an inclusive environment where all traditions are celebrated and respected.`,
    photos: [
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/CNY2.jpeg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/CNY3-1024x768.jpeg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/CNY1-1024x768.jpeg",
    ],
  },
  "thai-pongal-2025": {
    id: "thai-pongal-2025",
    title: "Port City BPO: Thai Pongal Celebration",
    date: "16 January 2025",
    shortDescription: "Thai Pongal 2025",
     thumbnail:"https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/TP1-1024x1024.jpg",
    description: `Port City BPO celebrated Thai Pongal, the Tamil harvest festival, with traditional rituals and festivities. The celebration included the preparation of Pongal (sweet rice dish) in new clay pots, traditional kolam (rangoli) decorations, and cultural performances by employees.

Team members learned about the significance of thanking the Sun God for a bountiful harvest and participated in traditional games. A special feast featuring authentic Tamil cuisine brought everyone together in celebration.

This event demonstrated our respect for Tamil culture and traditions, fostering an inclusive workplace where all cultural celebrations are acknowledged.`,
    photos: [
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/TP7-1024x1024.jpg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/TP19.jpeg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/TP3-1024x1024.jpg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/TP22.jpeg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/TP8-1024x1024.jpg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/TP13-1024x768.jpeg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/TP21.jpeg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/TP6-1024x1024.jpg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/TP2-1024x1024.jpg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/TP17.jpeg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/TP20.jpeg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/TP4-1024x1024.jpg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/TP1-1024x1024.jpg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/TP5-1024x1024.jpg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/TP14.jpeg",
    ],
  },
  "pickle-ball-2025": {
    id: "pickle-ball-2025",
    title: "Port City BPO: Pickle Ball Event",
    date: "8 January 2025",
    shortDescription: "Pickle Ball",
     thumbnail:"https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/pickleball7-1024x768.jpeg",
    description: `Port City BPO organized an exciting Pickle Ball tournament, promoting health, wellness, and friendly competition among employees. Teams from various departments competed in this fast-growing sport, which combines elements of tennis, badminton, and table tennis.

The event included training sessions for beginners, competitive matches for experienced players, and a family-friendly atmosphere with refreshments and music. Trophies and prizes were awarded to winning teams and individuals.

This initiative encouraged active lifestyles, team building, and provided a fun break from daily work routines, strengthening relationships across the organization.`,
    photos: [
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/pickleball1.jpeg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/pickleball3.jpeg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/pickleball6.jpeg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/pickleball6.jpeg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/pickleball8.jpeg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/pickleball4.jpeg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/pickleball7-1024x768.jpeg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/pickleball5.jpeg",
    ],
  },
  "new-year-2025": {
    id: "new-year-2025",
    title: "Port City BPO: New Year 2025",
    date: "2 January 2025",
    shortDescription: "Happy New Year 2025",
     thumbnail:"https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/NY4-1024x854.jpg",
    description: `Port City BPO welcomed 2025 with enthusiasm and optimism, gathering employees for a New Year celebration focused on goal-setting, team building, and shared vision. Leadership shared strategic priorities for the year ahead, and employees participated in workshops designed to align personal goals with company objectives.

The celebration included a回顾 of 2024 achievements, recognition of outstanding teams, and interactive sessions where employees shared their aspirations for 2025. A festive lunch and entertainment rounded out the day.

This event energized our workforce and created momentum for a year of innovation, growth, and collective success.`,
    photos: [
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/NY3-1024x768.jpg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/NY8.jpg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/NY2-1024x768.jpg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/NY6.jpg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/NY7-768x1024.jpg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/NY10-1024x768.jpg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/NY4-1024x854.jpg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/NY9-1024x672.jpg",
    ],
  },
  "secret-santa-2024": {
    id: "secret-santa-2024",
    title: "Port City BPO: Secret Santa X'mas event",
    date: "5 December 2024",
    shortDescription: "Our prep for the 2024 X'mas Party",
     thumbnail:"https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/Secret-Santa-2-scaled-768x1024.jpeg",
    description: `The Secret Santa event at Port City BPO brought the spirit of giving to our workplace during the 2024 Christmas season. Employees participated enthusiastically in the gift exchange, with weeks of anticipation building up to the big reveal.

The event featured festive decorations, holiday treats, caroling, and the heartwarming moment when colleagues discovered who their Secret Santa was. The joy and laughter shared during this celebration created lasting memories.

This tradition exemplifies the warm, caring culture at Port City BPO, where employees genuinely care for one another and celebrate the spirit of giving.`,
    photos: [
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/Carol-Practices-6.jpeg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/Donuts.jpeg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/Secret-Santa-2-scaled-768x1024.jpeg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/10/actual-image-name.jpg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/Secret-Santa-4-scaled-768x1024.jpeg",
      "https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/Secret-Santa-11-scaled-768x1024.jpeg",
    ],
  },
  "xmas-party-2024": {
    id: "xmas-party-2024",
    title: "Port City BPO: X'mas 2024 Party",
    date: "2 December 2024",
    shortDescription: "Our 2024 X'mas Party",
     thumbnail:"https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/PCBSL_01225-1-1024x576.jpg",
    description: `Port City BPO's 2024 Christmas Party was a spectacular celebration of the year's achievements and the holiday spirit. The event featured a beautifully decorated venue, delicious festive feast, live music, and dancing that continued late into the evening.

Employees received special Christmas gifts from the company, and a raffle draw with exciting prizes added to the excitement. The party included a photo booth, Secret Santa gift exchange, and a heartfelt speech from leadership expressing gratitude for the team's hard work throughout the year.

This annual tradition reinforces our team culture, celebrates our collective successes, and sends everyone into the holiday season with joy and appreciation.`,
    photos: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

// Main Team Events Listing Page Component
function TeamEvents() {
  const navigate = useNavigate();

  // Convert object to array for mapping
  const teamEvents = Object.values(teamEventsData).sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen bg-white -mt-4">
      
      {/* Hero Section */}
      <header
        className="relative h-130 flex items-center"
        style={{
          backgroundImage: `url(https://images.weserv.nl/?url=portcitybpo.lk/wp-content/uploads/2025/02/Newsroom-page-desktop.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <h1 className="max-w-2xl text-4xl md:text-7xl font-bold">Team Events</h1>
        </div>
      </header>

      {/* Team Events Grid */}
      <main className="max-w-10/12 mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamEvents.map((event) => (
            <div
              key={event.id}
              onClick={() => navigate(`/newsroom/team-events/${event.id}`)}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
          {/* 👇 UPDATED THIS LINE 👇 */}
          <img
            src={event.thumbnail || event.photos[0]} 
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
                  <Clock className="w-4 h-4 inline-block text-gray-600" />
                  <p className="text-sm text-gray-600 font-light">{event.date}</p>
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

// Individual Team Event Detail Page Component
export function TeamEventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = teamEventsData[id];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!event) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-8">The team event you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/newsroom/team-events')}
            className="bg-[#005ca9] text-white px-6 py-3 rounded-lg hover:bg-[#004a8a] transition-colors"
          >
            Back to Team Events
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
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Title and Date */}
      <div className="relative bg-[#0670b2] text-white py-10 text-left">
        <div className="max-w-10/12 mx-auto px-6">
          <h1 className="heading font-bold">{event.title}</h1>
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
                className="group relative overflow-hidden shadow-lg cursor-pointer"
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
      <div className="max-w-10/12 mx-auto py-12">
        <button
          onClick={() => navigate('/newsroom/team-events')}
          className="inline-flex items-center text-[#005ca9] font-semibold hover:text-[#ff9933] transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to All Team Events
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

export default TeamEvents;