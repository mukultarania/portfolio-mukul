import React from "react";
import { ArrowRight, Download } from "lucide-react";
import { personalInfo } from "../data/personalInfo";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 flex items-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* LEFT CONTENT */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase">
              Welcome to my portfolio
            </h2>

            <h1 className="font-bold text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              {personalInfo.name.split(" ")[0]}
              <span className="block text-blue-600">
                {personalInfo.name.split(" ")[1]}
              </span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg max-w-xl">
              A highly motivated and performance-driven professional with a strong
              foundation in Software Development with 4+ years of experience,
              targeting assignments in Back-end & Front-end Development.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
              >
                View Projects <ArrowRight className="ml-2" size={20} />
              </a>

              <a
                href="/mukul-resume.pdf"
                download
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition flex items-center justify-center"
              >
                Download CV <Download className="ml-2" size={20} />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=800"
                alt="Professional workspace"
                className="w-full max-w-lg rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-600/20 to-transparent"></div>

              {/* Glow */}
              <div className="absolute -inset-4 bg-blue-600/10 rounded-2xl blur-2xl -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
