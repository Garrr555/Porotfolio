

export default function Back() {

  return (
    <a
      href="#home"
      id="back"
      className="hidden fixed z-[999] bottom-4 right-4 h-14 w-14 bg-primary rounded-full p-4 justify-center items-center transition duration-500 animate-bounce hover:animate-pulse"
    >
      <span className="block h-5 w-5 border-t-2 border-l-2 rotate-45 mt-2"></span>
    </a>
  );
}
