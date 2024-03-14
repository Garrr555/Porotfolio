import google from "./clients/googleg.png";
import gojek from "./clients/gojek.png";
import tokopedia from "./clients/tokopedia.png";
import shoppe from "./clients/shoppeg.png";

const Client = () => {
  return (
    <section id="clients" className="pt-36 pb-32 bg-slate-800 dark:bg-slate-700">
      <div className="container">
        <div className="w-full px-4">
          <div className=" mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Clients</h4>
            <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Yang Pernah Bekerjasama
            </h2>
            <p className="font-medium text-md text-secondary dark:text-slate-300 md:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium, reiciendis voluptates? Sapiente?
            </p>
          </div>
        </div>

        <div className="w-full px-4">
          <div className="flex flex-wrap justify-center items-center">
            <a
              href="#clients"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src={google} alt="google" />
            </a>
            <a
              href="#clients"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src={gojek} alt="gojek" />
            </a>
            <a
              href="#clients"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src={tokopedia} alt="tokopedia" />
            </a>
            <a
              href="#clients"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src={shoppe} alt="shoppe" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
