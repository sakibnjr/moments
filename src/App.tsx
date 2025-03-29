import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import Banner from "./components/Banner";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <About />
      <Testimonials />
      <Packages />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
