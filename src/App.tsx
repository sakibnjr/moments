import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import Banner from "./components/Banner";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <About />
      <Testimonials />
      <Packages />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
