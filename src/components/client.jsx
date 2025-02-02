
import react from "./clients/react-seeklogo.svg";
import next from "./clients/next-js.svg";
import tailwind from "./clients/tailwind-css-2.svg";
import ts from "./clients/typescript.svg";
import css from "./clients/css-3.svg";
import firebase from "./clients/firebase-1.svg";
import html from "./clients/html-1.svg";
import js from "./clients/logo-javascript.svg";
import word from "./clients/word-1.svg";
import point from "./clients/powerpoint-2.svg";
import excel from "./clients/excel-4.svg";
import bs from "./clients/bootstrap-5-1.svg";


const Client = () => {
  return (
    <section
      id="clients"
      className="pt-36 pb-32 bg-slate-800 dark:bg-slate-700"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className=" mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Skills</h4>
            <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Skill yang dikuasai
            </h2>
            <p className="font-medium text-md text-secondary dark:text-slate-300 md:text-lg">
              Ini adalah beberapa skill yang telas saya kuasai sebagai penunjang
              dalam karir Front-end Developer
            </p>
          </div>
        </div>

        <div className="w-full px-4">
          <div className="flex flex-wrap justify-center items-center">
            <a
              href="#clients"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src={html} alt="tokopedia" />
            </a>
            <a
              href="#clients"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src={css} alt="tokopedia" />
            </a>
            <a
              href="#clients"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src={js} alt="tokopedia" />
            </a>
            <a
              href="#clients"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src={ts} alt="tokopedia" />
            </a>
            <a
              href="#clients"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src={react} alt="google" />
            </a>
            <a
              href="#clients"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src={next} alt="gojek" />
            </a>
            <a
              href="#clients"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src={tailwind} alt="tokopedia" />
            </a>
            <a
              href="#clients"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src={bs} alt="tokopedia" />
            </a>

            <a
              href="#clients"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src={firebase} alt="tokopedia" />
            </a>
            <a
              href="#clients"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src={word} alt="tokopedia" />
            </a>
            <a
              href="#clients"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src={point} alt="tokopedia" />
            </a>
            <a
              href="#clients"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src={excel} alt="tokopedia" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
