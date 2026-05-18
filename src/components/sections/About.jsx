import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "JavaScript", "TypeScript", "Bootstrap"];
  const backendSkills = ["Node.js", "Express", "Droplet", "MongoDB", "SQLite"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-orange-800 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Throughout my coding career, I have picked up some languages I
              have used before.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-400/10 text-orange-400 py-1 px-3 rounded-fill text-sm hover:bg-orange-400/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-400/10 text-orange-400 py-1 px-3 rounded-fill text-sm hover:bg-orange-400/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Diploma</strong> - Peoria High School (2022-2026)
                </li>
                <li>
                  Relevant Coursework: Coding & Programming (CPT), Calculus AB,
                  Calculus BC
                </li>
              </ul>
              <br />
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Program Completion</strong> - West-MEC Coding
                  (2024-2026)
                </li>
                <li>
                  Relevant Coursework: ITS Certifications (HTML & CSS,
                  Javascript, HTML5)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">FBLA Regionals</h4>
                  <p>
                    Competed in Office 365 Applications and Coding &
                    Programming.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">FBLA State</h4>
                  <p>
                    Competed in Coding & Programming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
