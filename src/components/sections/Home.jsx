import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <RevealOnScroll>
          <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-800 bg-clip-text text-transparent leading-right">
              Hi, I'm Ben Tech
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
              I'm a student attending Peoria High School and West-MEC for coding. I specialize in full-stack web development. I prioritize functionality, design, and security in my production websites. I play basketball and edit videos as my main hobbies.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="bg-orange-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-orange-400/50 text-orange-400 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-orange-400/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    );
}