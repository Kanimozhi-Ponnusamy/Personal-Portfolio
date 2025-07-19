// src/Projects.jsx
export default function Projects() {
  const projectList = [
    {
      title: "HTML & CSS",
      description:
        "A personal portfolio website built using HTML and CSS to showcase skills, projects, and resume.",
      link: "https://github.com/Kanimozhi-Ponnusamy/html-css-projectt",
      tech: ["HTML", "CSS"],
    },
    {
      title: "Dynamic Counter",
      description:
        "A simple and interactive counter built with HTML, CSS, and JavaScript. Includes increment, decrement, and reset features with responsive styling.",
      link: "https://github.com/Kanimozhi-Ponnusamy/Dynamic-Counter",
      tech: ["HTML", "CSS", "JavaScript"],
    },

    {
      title: "Personal Portfolio",
      description:
        "A personal portfolio built using React and Tailwind CSS to showcase projects, skills, and resume in a modern responsive layout.",
      link: "https://github.com/Kanimozhi-Ponnusamy/Personal-Portfolio",
      tech: ["React", "Tailwind CSS"],
    },
  ];

  return (
    <section className="px-4 py-12 dark:bg-black-900" id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white-800 text-white">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-lg border border-indigo-500/40 hover:border-indigo-400 hover:shadow-indigo-500/30 transition duration-300 bg-gray-900 text-white"
          >
            <h3 className="text-xl font-semibold mb-2 text-indigo-400">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-sm px-2 py-1 bg-indigo-700 text-white rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-indigo-400 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
