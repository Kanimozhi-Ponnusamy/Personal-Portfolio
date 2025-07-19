import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 md:px-12">
      <div className="max-w-5xl mx-auto text-white">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Let's <span className="text-indigo-500">Connect</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Email */}
          <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-indigo-500/40 hover:border-indigo-400 shadow-lg hover:shadow-indigo-500/30 transition duration-300">
            <Mail className="text-indigo-400 mb-4 w-8 h-8" />
            <h4 className="text-xl font-semibold mb-2 text-indigo-300">Email</h4>
            <p className="text-gray-300">kanimozhiponnusamy9976@gamail.com</p>
            <div className="absolute inset-0 rounded-2xl border border-indigo-500 opacity-0 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
          </div>

          {/* Card 2: Phone */}
          <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-indigo-500/40 hover:border-indigo-400 shadow-lg hover:shadow-indigo-500/30 transition duration-300">
            <Phone className="text-indigo-400 mb-4 w-8 h-8" />
            <h4 className="text-xl font-semibold mb-2 text-indigo-300">Phone</h4>
            <p className="text-gray-300">+91 9976967974</p>
            <div className="absolute inset-0 rounded-2xl border border-indigo-500 opacity-0 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
          </div>

          {/* Card 3: Location */}
          <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-indigo-500/40 hover:border-indigo-400 shadow-lg hover:shadow-indigo-500/30 transition duration-300">
            <MapPin className="text-indigo-400 mb-4 w-8 h-8" />
            <h4 className="text-xl font-semibold mb-2 text-indigo-300">Location</h4>
            <p className="text-gray-300">Salem, Tamilnadu</p>
            <div className="absolute inset-0 rounded-2xl border border-indigo-500 opacity-0 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
          </div>
        </div>

        {/* Optional CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400">I’m currently available for freelance or full-time opportunities.</p>
          <p className="text-indigo-400 text-lg font-semibold mt-2">Let’s build something amazing together!</p>
        </div>
      </div>
    </section>
  );
}
