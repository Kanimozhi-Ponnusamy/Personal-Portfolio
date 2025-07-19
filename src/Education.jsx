export default function Education() {
  const educationList = [
    {
      degree: "Master of Business Administration (MBA)",
      institution: "K.S.Rangasamy College of Technology (Autonomous)",
      year: "2022 - 2024",
      specialization: "HR & Marketing",
    },
    {
      degree: "Bachelor of Commerce (Computer Applications) - B.Com (CA)",
      institution: "Vivekanandha College of Arts and Science (Autonomous)",
      year: "2018 - 2022",
      specialization: "Computer Application",  
    },
  ];

  return (
    <section id="education" className="py-12 px-4 md:px-12">
      <div className="max-w-5xl mx-auto text-white">
        <h2 className="text-4xl font-extrabold text-center mb-10">Education</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900 shadow-lg rounded-2xl p-6 border border-indigo-600 hover:shadow-indigo-500/40 transition transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
                {edu.degree}
              </h3>
              <p className="text-gray-300 font-medium">{edu.institution}</p>
              <p className="text-gray-400 text-sm">{edu.year}</p>
              {edu.specialization && (
                <p className="mt-2 text-sm text-gray-200">
                  <span className="font-semibold text-indigo-300">
                    Specialization:
                  </span>{" "}
                  {edu.specialization}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
