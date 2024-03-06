import { useState } from "react";

const Nav = () => {
  //Hamburger Efek
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [hiddenActive, setHiddenActive] = useState(false);

  const hamburger = () => {
    setHamburgerActive(!hamburgerActive);
    setHiddenActive(!hiddenActive);
  };

  //Navbar Efek
  window.onscroll = function () {
    const nav = document.querySelector("nav");
    const fixedNav = nav.offsetTop;

    if (window.pageYOffset > fixedNav) {
      nav.classList.add("navbar-fixed");
    } else {
      nav.classList.remove("navbar-fixed");
    }
  };

  return (
    <nav className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4 ">
            <a
              href="#home"
              className="font-bold text-lg text-primary block py-6"
            >
              PEACE
            </a>
          </div>
          <div className="flex items-center px-4 ">
            <button
              onClick={hamburger}
              id="hamburger"
              name="hamburger"
              type="button"
              className={`lg:hidden block absolute right-4 ${
                hamburgerActive ? "hamburger-active" : ""
              }`}
            >
              <span className="hamburger-line transition-all duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition-all duration-300 ease-in-out"></span>
              <span className="hamburger-line transition-all duration-300 ease-in-out origin-bottom-left"></span>
            </button>

            <header
              id="nav-menu"
              className={`${
                hiddenActive ? "" : "hidden"
              } absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="text-base text-dark py-2
                         mx-8 flex group-hover:text-primary transition-all duration-300"
                  >
                    Beranda
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="text-base text-dark py-2
                         mx-8 flex group-hover:text-primary transition-all duration-300"
                  >
                    Tentang Saya
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portofolio"
                    className="text-base text-dark py-2
                         mx-8 flex group-hover:text-primary transition-all duration-300"
                  >
                    Portofolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#clients"
                    className="text-base text-dark py-2
                         mx-8 flex group-hover:text-primary transition-all duration-300"
                  >
                    Clients
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#blog"
                    className="text-base text-dark py-2
                         mx-8 flex group-hover:text-primary transition-all duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contact"
                    className="text-base text-dark py-2
                         mx-8 flex group-hover:text-primary transition-all duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </header>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
