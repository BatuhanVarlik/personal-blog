import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects"; // Yeni eklenen
import Footer from "./components/Footer";
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Footer />

      {/* Footer / İletişim Alanı */}
      
    </div>
  );
}

export default App;