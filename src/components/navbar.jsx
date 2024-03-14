import { useEffect, useState } from "react";

const Nav = () => {
  //Hamburger Efek
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [hiddenActive, setHiddenActive] = useState(false);

  const hamburger = () => {
    setHamburgerActive(!hamburgerActive);
    setHiddenActive(!hiddenActive);
  };

  //Menutup Hamburger ketika di klik di luar
  useEffect(() => {
    const klikDiLuar = (event) => {
      if (
        !event.target.closest("#hamburger") &&
        !event.target.closest("#nav-menu")
      ) {
        setHamburgerActive(false);
        setHiddenActive(false);
      }
    };

    document.addEventListener("click", klikDiLuar);

    return () => {
      document.removeEventListener("click", klikDiLuar);
    };
  }, [hamburgerActive, hiddenActive]);

  //Tombol Dark Mode
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if(darkMode) {
      document.body.classList.add('dark')
    }
    else{
      document.body.classList.remove('dark')
    }
  }, [darkMode])


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
              } absolute py-5 bg-white dark:bg-dark lg:dark:bg-transparent dark:shadow-lg dark:shadow-slate-800 lg:dark:shadow-none shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="text-base text-dark py-2
                         mx-8 flex group-hover:text-primary transition-all duration-300 dark:text-white"
                  >
                    Beranda
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="text-base text-dark py-2
                         mx-8 flex group-hover:text-primary transition-all duration-300 dark:text-white"
                  >
                    Tentang Saya
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portofolio"
                    className="text-base text-dark py-2
                         mx-8 flex group-hover:text-primary transition-all duration-300 dark:text-white"
                  >
                    Portofolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#clients"
                    className="text-base text-dark py-2
                         mx-8 flex group-hover:text-primary transition-all duration-300 dark:text-white"
                  >
                    Clients
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#blog"
                    className="text-base text-dark py-2
                         mx-8 flex group-hover:text-primary transition-all duration-300 dark:text-white"
                  >
                    Blog
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contact"
                    className="text-base text-dark py-2
                         mx-8 flex group-hover:text-primary transition-all duration-300 dark:text-white"
                  >
                    Contact
                  </a>
                </li>
                <li className="flex items-center lg:mb-2 pl-8 mt-3">
                  <div className="flex">
                    <span className="mr-2 text-sm text-slate-500 ">Light</span>
                    <input
                      type="checkbox"
                      id="dark-toggle"
                      className="hidden"
                      checked={darkMode}
                      onChange={toggleDarkMode}
                    />
                    <label htmlFor="dark-toggle">
                      <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                        <div
                          className={`toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out ${darkMode ? "translate-x-3" : ""}`}
                        ></div>
                      </div>
                    </label>

                    <span className="ml-2 text-sm text-slate-500 ">Dark</span>
                  </div>
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
