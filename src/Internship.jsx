export default function Internship() {
  const internships = [
    {
      company: "Panda eCe",
      role: "Web Developer Intern",
      duration: "3 Months",
      description:
        "I gained hands-on experience in building responsive and interactive web applications. I worked on real-time frontend tasks using modern frameworks and collaborated with the team to deliver quality output.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS", "MySQL"],
      status: "Completed",
    },
    {
      company: "Sirpi Products and Services Pvt Ltd",
      role: "React Developer Intern",
      duration: "Ongoing (1+ Month)",
      description:
        "Currently working as a React Developer Intern, where I’m involved in developing dynamic and component-based user interfaces. I am learning and applying advanced React concepts and improving performance optimization techniques.",
      skills: ["React", "JavaScript", "Tailwind CSS"],
      status: "In Progress",
    },
  ];

  return (
    <section id="internship" className="py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-white mb-10">Internship Experience</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {internships.map((intern, index) => (
            <div
              key={index}
              className="bg-gray-900 text-white shadow-lg rounded-2xl p-6 transition transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-xl font-bold text-indigo-400 mb-1">{intern.role}</h3>
              <p className="text-gray-300 font-medium mb-1">{intern.company}</p>
              <p className="text-sm text-gray-400 mb-3">{intern.duration} — <em>{intern.status}</em></p>
              <p className="text-gray-200 mb-4">{intern.description}</p>
              <div>
                <h4 className="font-semibold text-gray-100 mb-2">Technologies & Tools:</h4>
                <ul className="flex flex-wrap gap-2">
                  {intern.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-indigo-700 text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
