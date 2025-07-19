import Plmage from "./assets/PImage.jpg";
export default function HeroSection() {
  return (
    <section className="animation-bg-animate1 p-8 mt-14">
      <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-10">
        {/* Left Side */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="text-teal-400">Kani Mozhi</span>
          </h1>
          <h2 className="text-xl md:text-3xl text-gray-300">
            A Passionate Front-End Developer
          </h2>
          <p className="text-gray-400 max-w-md mx-auto md:mx-0">
            I create responsive and interactive websites using React, Tailwind
            CSS, and JavaScript.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="border-2 px-6 py-3 rounded-lg hover:bg-amber-50 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border-teal-500 border-2 px-6 py-3 rounded-lg hover:bg-amber-50 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-teal-400 overflow-hidden">
            <img
              src={Plmage}
              alt="Kani Mozhi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
