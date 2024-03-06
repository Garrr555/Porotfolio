import "./App.css";
import About from "./components/about";
import Blog from "./components/blog";
import Client from "./components/client";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Nav from "./components/navbar";
import Portofolio from "./components/portofolio";

function App() {
  return (
    <div className="">
      <Nav />
      <Hero />
      <About />
      <Portofolio />
      <Client />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
