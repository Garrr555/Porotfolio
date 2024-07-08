import lima from "../img/5.jpeg";
import empat from "../img/4.jpeg";
import tiga from "../img/3.jpeg";
import dua from "../img/2.jpeg";
import satu from "../img/1.jpeg";
import enam from "../img/6,1.png";
import tujuh from "../img/7,1.png";
import delapan from "../img/8.png";

const Portofolio = () => {
  return (
    <section
      id="portofolio"
      className="pt-36 pb-16 bg-slate-100 dark:bg-slate-800"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">
              Portofolio
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">
              Project Terbaru
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Ini merupakan kumpulan Project Web yang telah saya kerjakan selama
              menempuh karir sebagai Front-end Developer
            </p>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div id="tourism" className="mb-12 p-4  md:w-1/2 ">
            <div className="group">
              <div className="rounded shadow-md dark:shadow-md dark:shadow-slate-500 overflow-hidden group-hover:scale-95 transition duration-500 hover:border-2 group-hover:border-primary">
                <img
                  src={lima}
                  alt="Tourism"
                  width="w-full"
                  className="group-hover:scale-125 transition duration-500 "
                />
              </div>
            </div>

            <h3 className="text-center font-semibold text-dark text-xl mt-5 mb-3 dark:text-white">
              Purwokerto Smart Tourism
            </h3>
          </div>
          <div className="mb-12 p-4 md:w-1/2 ">
            <div className="group">
              <div className="rounded shadow-md dark:shadow-md dark:shadow-slate-500 overflow-hidden group-hover:scale-95 transition duration-500 hover:border-2 group-hover:border-primary">
                <img
                  src={empat}
                  alt="Outdoor"
                  width="w-full"
                  className="group-hover:scale-125 transition duration-500 "
                />
              </div>
            </div>

            <h3 className="text-center font-semibold text-dark text-xl mt-5 mb-3 dark:text-white">
              Sudirman Run 2023
            </h3>
          </div>
          <div id="cafebara" className="mb-12 p-4 md:w-1/2 ">
            <div className="group">
              <div className="rounded shadow-md dark:shadow-md dark:shadow-slate-500 overflow-hidden group-hover:scale-95 transition duration-500 hover:border-2 group-hover:border-primary">
                <img
                  src={tiga}
                  alt="Cafe"
                  width="w-full"
                  className="group-hover:scale-125 transition duration-500 "
                />
              </div>
            </div>

            <h3 className="text-center font-semibold text-dark text-xl mt-5 mb-3 dark:text-white">
              Cafebara
            </h3>
          </div>
          <div className="mb-12 p-4 md:w-1/2 ">
            <div className="group">
              <div className="rounded shadow-md dark:shadow-md dark:shadow-slate-500 overflow-hidden group-hover:scale-95 transition duration-500 hover:border-2 group-hover:border-primary">
                <img
                  src={dua}
                  alt="Business"
                  width="w-full"
                  className="group-hover:scale-125 transition duration-500 "
                />
              </div>
            </div>

            <h3 className="text-center font-semibold text-dark text-xl mt-5 mb-3 dark:text-white">
              Business
            </h3>
          </div>
          <div id="mstore" className="mb-12 p-4 md:w-1/2 ">
            <div className="group">
              <div className="rounded shadow-md dark:shadow-md dark:shadow-slate-500 overflow-hidden group-hover:scale-95 transition duration-500 hover:border-2 group-hover:border-primary">
                <img
                  src={satu}
                  alt="E-commerce"
                  width="w-full"
                  className="group-hover:scale-125 transition duration-500 "
                />
              </div>
            </div>

            <h3 className="text-center font-semibold text-dark text-xl mt-5 mb-3 dark:text-white">
              M-Store
            </h3>
          </div>
          <div className="mb-12 p-4 md:w-1/2 ">
            <div className="group">
              <div className="rounded shadow-md dark:shadow-md dark:shadow-slate-500 overflow-hidden group-hover:scale-95 transition duration-500 hover:border-2 group-hover:border-primary">
                <a
                  href="https://web-duwit-peaces-projects-2cad2b96.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={enam}
                    alt="E-commerce"
                    width="w-full"
                    className="group-hover:scale-125 transition duration-500 "
                  />
                </a>
              </div>
            </div>

            <a
              href="https://web-duwit-peaces-projects-2cad2b96.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="text-center font-semibold text-dark text-xl mt-5 dark:text-white">
                Duwit
              </h3>
              <h4 className="text-primary text-center">Click for Perview</h4>
            </a>
          </div>
          <div className="mb-12 p-4 md:w-1/2 ">
            <div className="group">
              <div className="rounded shadow-md dark:shadow-md dark:shadow-slate-500 overflow-hidden group-hover:scale-95 transition duration-500 hover:border-2 group-hover:border-primary">
                <a
                  href="https://mini-project-topaz-ten.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={tujuh}
                    alt="E-commerce"
                    width="w-full"
                    className="group-hover:scale-125 transition duration-500 "
                  />
                </a>
              </div>
            </div>

            <a
              href="https://mini-project-topaz-ten.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="text-center font-semibold text-dark text-xl mt-5 dark:text-white">
                Furniturpedia
              </h3>
              <h4 className="text-primary text-center">Click for Perview</h4>
            </a>
          </div>
          <div className="mb-12 p-4 md:w-1/2 ">
            <div className="group">
              <div className="rounded shadow-md dark:shadow-md dark:shadow-slate-500 overflow-hidden group-hover:scale-95 transition duration-500 hover:border-2 group-hover:border-primary">
                <a
                  href="https://plantopia-eta.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={delapan}
                    alt="E-commerce"
                    width="w-full"
                    className="group-hover:scale-125 transition duration-500 "
                  />
                </a>
              </div>
            </div>
            <a
              href="https://plantopia-eta.vercel.app/login/"
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="text-center font-semibold text-dark text-xl mt-5 dark:text-white">
                Plantopia
              </h3>
              <h4 className="text-primary text-center">Click there for Login</h4>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
