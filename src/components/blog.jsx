const Blog = () => {
  return (
    <section id="blog" className="pt-36 pb-32 bg-slate-100 dark:bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2 ">Blog</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">
              Tulisan Terkini
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              placeat consectetur. Est, aliquam?
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3 ">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
              <img
                src="https://source.unsplash.com/360x200?programming"
                alt="Programming"
                className="w-full"
              />
              <div className="py-8 px-6 dark:bg-slate-700 ">
                <h3 className="">
                  <a
                    href="#"
                    className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white"
                  >
                    Belajar Programming
                  </a>
                </h3>
                <p className="font-medium text-base mb-6 dark:text-slate-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur dolore omnis dolorum dolorem maxime qui.
                </p>
                <a
                  href="#"
                  className="font-medium text-sm text-white bg-primary py-3 px-6 rounded-lg hover:opacity-80"
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3 ">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
              <img
                src="https://source.unsplash.com/360x200?mechanical+keyboard"
                alt="Keyboard"
                className="w-full"
              />
              <div className="py-8 px-6 dark:bg-slate-700">
                <h3 className="">
                  <a
                    href="#"
                    className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white"
                  >
                    Keyboard Mechanical
                  </a>
                </h3>
                <p className="font-medium text-base mb-6 dark:text-slate-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Atque voluptatibus reprehenderit totam!
                </p>
                <a
                  href="#"
                  className="font-medium text-sm text-white bg-primary py-3 px-6 rounded-lg hover:opacity-80"
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3 ">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
              <img
                src="https://source.unsplash.com/360x200?setup+pc"
                alt="SetUp"
                className="w-full"
              />
              <div className="py-8 px-6 dark:bg-slate-700">
                <h3 className="">
                  <a
                    href="#"
                    className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white"
                  >
                    SetUp PC
                  </a>
                </h3>
                <p className="font-medium text-base mb-6 dark:text-slate-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Natus deserunt esse ducimus ullam ea?
                </p>
                <a
                  href="#"
                  className="font-medium text-sm text-white bg-primary py-3 px-6 rounded-lg hover:opacity-80"
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3 ">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
              <img
                src="https://source.unsplash.com/360x200?mouse+gaming"
                alt="Valorant"
                className="w-full"
              />
              <div className="py-8 px-6 dark:bg-slate-700">
                <h3 className="">
                  <a
                    href="#"
                    className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white"
                  >
                    Mouse Gaming
                  </a>
                </h3>
                <p className="font-medium text-base mb-6 dark:text-slate-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, dolore..
                </p>
                <a
                  href="#"
                  className="font-medium text-sm text-white bg-primary py-3 px-6 rounded-lg hover:opacity-80"
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
