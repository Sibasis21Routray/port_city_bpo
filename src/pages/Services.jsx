import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImg from "../assets/hero.png";

const sections = [
  {
    id: "customer",
    title: "Customer Service Outsourcing",
    text: `Elevate your brand's reputation with our efficient Customer Service Outsourcing. We ensure a smooth customer journey by handling enquiries, providing technical support, and managing orders and billing. Our focus includes resolving complaints, offering multilingual support, and maintaining service quality. Explore opportunities for cross-selling, effective customer retention, and feedback analysis. Ongoing training keeps our team updated for friendly and efficient interactions.`,
    img: "https://images.unsplash.com/photo-1556740729-8f6b3a0b9b2b?auto=format&fit=crop&w=900&q=60",
    points: [
      "Multilingual customer support",
      "Order and billing management",
      "Complaint resolution and quality assurance",
    ],
  },
  {
    id: "technical",
    title: "Technical Support Outsourcing",
    text: `Stay ahead in the digital landscape with our Technical Support Outsourcing. We provide expert troubleshooting for hardware and software, responsive help desk services, and efficient network and system administration. From application support, cybersecurity, cloud computing, to strategic IT consulting, our services simplify your technology needs for a seamless and reliable experience.`,
    img: "https://images.unsplash.com/photo-1555421689-3a9e9f0a0b2b?auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "data",
    title: "Data Entry and Processing Outsourcing",
    text: `Simplify data operations with our Data Entry and Processing services. We ensure accurate manual data entry, offer data cleansing for error correction, and facilitate seamless data conversion. Our services include verification for data reliability and expertise in data mining for valuable insights.`,
    img: "https://images.unsplash.com/photo-1526378721031-3a6c6af8b0c1?auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "humanresources",
    title: "Human Resources Outsourcing",
    text: `Grow your business with our HR services. From end-to-end recruitment and talent acquisition to seamless onboarding, we handle it all. Our services cover payroll, benefits, and precise employee records management. From performance and training to employee relations and compliance, we meet diverse HR needs.`,
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "finance",
    title: "Finance and Accounting Outsourcing",
    text: `Streamline your financial processes with our Finance and Accounting Outsourcing. We oversee Accounts Payable, manage vendor transactions and supplier relationships, handle Accounts Receivable, and ensure prompt customer payments and accurate financial records.`,
    img: "https://images.unsplash.com/photo-1581093588401-9f9d1f7b1d3a?auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "marketing",
    title: "Marketing Outsourcing",
    text: `Elevate your marketing with our comprehensive services. From lead generation and data management to digital marketing and brand consistency, we optimize strategies and engage your audience through campaigns, events, and effective media relationships.`,
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=60",
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar active="services" />

      <header
        className="relative h-64 md:h-80 lg:h-96 flex items-center"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold">Services</h2>
          <p className="mt-2 text-sm md:text-base">What We Offer?</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {sections.map((s, i) => (
          <div key={s.title} className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`${i % 2 === 0 ? "order-1" : "order-2"}`}>
              <div className="w-full md:w-80 lg:w-full mx-auto">
                <img src={s.img} alt={s.title} className="w-full h-56 md:h-48 lg:h-64 object-cover rounded-lg shadow-md" />
              </div>
            </div>

            <div className={`${i % 2 === 0 ? "order-2 text-left" : "order-1 text-left"}`}>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-700 leading-7">{s.text}</p>

              <button
                onClick={() => navigate(`/services/${s.id}`)}
                className="mt-6 bg-white border-l-4 border-orange-500 px-6 py-3 font-semibold shadow inline-flex items-center gap-3 decoration-none"
              >
                Learn More <span className="text-lg">›</span>
              </button>
            </div>
          </div>
        ))}

        <section className="mt-8 bg-gradient-to-r from-sky-700 to-cyan-500 rounded-xl p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 text-white">
            <h3 className="text-2xl font-bold">HOW TO GET IN TOUCH?</h3>
            <p className="mt-2 text-sm">
              Interested in a partnership? Let's collaborate and achieve success together! Get in touch with us here or email us at <a href="mailto:contactus@portcitybpo.lk" className="underline text-yellow-300">contactus@portcitybpo.lk</a>.
            </p>
            <button onClick={() => navigate("/contact")} className="mt-6 inline-block bg-white text-sky-700 px-4 py-2 rounded font-semibold">Contact Us</button>
          </div>

          <div className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-64">
            <img src={heroImg} alt="contact person" className="w-full h-full object-cover rounded-md shadow-md" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
