import lima from "../img/5.jpeg";
import empat from "../img/4.jpeg";
import tiga from "../img/3.jpeg";
import dua from "../img/2.jpeg";
import satu from "../img/1.jpeg";

const Portofolio = () => {
  return (
    <section id="portofolio" className="pt-36 pb-16 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">
              Portofolio
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Project Terbaru
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              molestiae omnis laboriosam, corrupti et delectus placeat quisquam
              tempora! Adipisci, est!
            </p>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div className="mb-12 p-4  md:w-1/2">
            <div className="rounded shadow-md overflow-hidden group hover:scale-95 transition duration-500 hover:border-2 hover:border-primary">
              <img
                src={lima}
                alt="Tourism"
                width="w-full"
                className="group-hover:scale-125 transition duration-500"
              />
            </div>
            <h3 className="font-semibold text-dark text-xl mt-5 mb-3 ">
              Purwokerto Smart Tourism
            </h3>
            <p className="font-medium text-base text-secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo a commodi veniam.
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2 ">
            <div className="rounded shadow-md overflow-hidden group hover:scale-95 transition duration-500 hover:border-2 hover:border-primary">
              <img
                src={empat}
                alt="Outdoor"
                width="w-full"
                className="group-hover:scale-125 transition duration-500"
              />
            </div>
            <h3 className="font-semibold text-dark text-xl mt-5 mb-3 ">
              Sudirman Run 2023
            </h3>
            <p className="font-medium text-base text-secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo a commodi veniam.
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2 ">
            <div className="rounded shadow-md overflow-hidden group hover:scale-95 transition duration-500 hover:border-2 hover:border-primary">
              <img
                src={tiga}
                alt="Cafe"
                width="w-full"
                className="group-hover:scale-125 transition duration-500"
              />
            </div>
            <h3 className="font-semibold text-dark text-xl mt-5 mb-3 ">
              Cafebara
            </h3>
            <p className="font-medium text-base text-secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo a commodi veniam.
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2 ">
            <div className="rounded shadow-md overflow-hidden group hover:scale-95 transition duration-500 hover:border-2 hover:border-primary">
              <img
                src={dua}
                alt="Business"
                width="w-full"
                className="group-hover:scale-125 transition duration-500"
              />
            </div>
            <h3 className="font-semibold text-dark text-xl mt-5 mb-3 ">
              Business
            </h3>
            <p className="font-medium text-base text-secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo a commodi veniam.
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2 ">
            <div className="rounded shadow-md overflow-hidden group hover:scale-95 transition duration-500 hover:border-2 hover:border-primary">
              <img
                src={satu}
                alt="E-commerce"
                width="w-full"
                className="group-hover:scale-125 transition duration-500"
              />
            </div>
            <h3 className="font-semibold text-dark text-xl mt-5 mb-3 ">
              M-Store
            </h3>
            <p className="font-medium text-base text-secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo a commodi veniam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
