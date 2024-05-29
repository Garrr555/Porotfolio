import tegar from "../img/IMG_1139_resize-removebg-preview.png";

const Hero = () => {
  return (
    <section id="home" className=" pt-36 dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2 ">
            <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl">
              Halo Semua✌️, saya
              <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl dark:text-white">
                Mohammad Tegar Ibrahim
              </span>
            </h1>
            <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl ">
              Mahasiswa & <span className="text-dark dark:text-slate-300">Frontend Developer</span>
            </h2>
            <p className="font-medium text-secondary mb-10 leading-relaxed">
            Saya seorang mahasiswa informatika Institut Teknologi Telkom Purwokerto (ITTP) yang senang belajar dan memiliki rasa ingin tahu yang tinggi.
            </p>

            <a
              href="#about"
              className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition-all duration-300 ease-in-out"
            >
              Hubungi Saya
            </a>
          </div>

          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="mt-10 relative lg:mt-9 lg:right-0 ">
              <img
                src={tegar}
                alt="Mohammad Tegar Ibrahim"
                className="max-w-full mx-auto px-2 relative z-10"
              />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 md:scale-125">
                <svg
                  width="400"
                  height="400"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#14B8A6"
                    d="M45.8,-44C58.5,-33,67.6,-16.5,65.8,-1.7C64.1,13,51.6,26,38.8,34.9C26,43.8,13,48.5,-2.9,51.5C-18.9,54.4,-37.7,55.5,-49.8,46.6C-61.9,37.7,-67.3,18.9,-66.6,0.7C-65.9,-17.5,-59.1,-34.9,-47,-45.9C-34.9,-56.8,-17.5,-61.3,-0.5,-60.8C16.5,-60.3,33,-54.9,45.8,-44Z"
                    transform="translate(100 100) scale(1.3)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
