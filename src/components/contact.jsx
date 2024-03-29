const Contact = () => {
  return (
    <section id="contact" className="pt-36 pb-32 bg-slate-100 dark:bg-dark">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Contact</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">
              Hubungi Saya
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              architecto?
            </p>
          </div>
        </div>

        <form action="">
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full mb-8 px-4">
              <label
                htmlFor="name"
                className="text-base text-pretty font-bold text-primary"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              />
            </div>
            <div className="w-full mb-8 px-4">
              <label
                htmlFor="email"
                className="text-base text-pretty font-bold text-primary"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
              />
            </div>
            <div className="w-full mb-8 px-4">
              <label
                htmlFor="message"
                className="text-base text-pretty font-bold text-primary"
              >
                Pesan
              </label>
              <textarea
                type="email"
                id="email"
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
              ></textarea>
            </div>
            <div className="w-full px-4">
              <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full transition duration-500 hover:shadow-lg hover:opacity-80">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
