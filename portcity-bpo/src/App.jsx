import { Routes, Route } from "react-router-dom"; // Remove BrowserRouter import
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import ValueProposition from "./pages/ValueProposition";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 sm:pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/value" element={<ValueProposition />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:section" element={<About />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/newsroom" element={<Home />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;