import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Project from "./components/Projects/Project";
import Services from "./components/Service/Services";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Project />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
