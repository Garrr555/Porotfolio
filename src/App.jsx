import "./App.css";
import About from "./components/about";
import Back from "./components/back";
import Client from "./components/client";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Nav from "./components/navbar";
import Portofolio from "./components/portofolio";

function App() {

  //Navbar Efek
  const handleScroll = () => {
    const nav = document.querySelector("nav");
    const fixedNav = nav.offsetTop;
    const back = document.querySelector('#back');

    if (window.pageYOffset > fixedNav) {
      nav.classList.add("navbar-fixed");
      back.classList.remove("hidden")
      back.classList.add("flex");
    } else {
      nav.classList.remove("navbar-fixed");
      back.classList.remove("flex");
      back.classList.add("hidden");
    }
  };

  window.onscroll = handleScroll

  return (
    <div className="">
      <Nav handleScroll={handleScroll}/>
      <Hero />
      <About />
      <Portofolio />
      <Client />
      {/* <Blog /> */}
      {/* <Contact /> */}
      <Footer />
      <Back handleScroll={handleScroll}/>
    </div>
  );
}

export default App;
