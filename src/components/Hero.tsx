import React from "react";
import { ArrowRight, Download } from "lucide-react";
import { personalInfo } from "../data/personalInfo";

const Hero = () => {
	return (
		<section
			id="home"
			className="h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50"
		>
			<div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
			<div className="container mx-auto px-6 relative">
				<div className="mt-96 sm:mt-50 md:mt-0 flex flex-col md:flex-row items-center justify-between gap-12">
					<div className="md:w-1/2 space-y-8">
						<div className="space-y-4">
							<h2 className="text-blue-600 font-semibold tracking-wide uppercase">
								Welcome to my portfolio
							</h2>
							<h1 className="text-5xl md:text-7xl font-bold text-gray-900">
								{personalInfo.name.split(" ")[0]}
								<span className="block text-blue-600 mt-2">
									{personalInfo.name.split(" ")[1]}
								</span>
							</h1>
							<p className="text-xl text-gray-600 max-w-2xl">
								A highly motivated and performance-driven
								professional with a strong foundation in
								Software Development with 4+ years of experience, targeting assignments in
								Back-end & Front-end Development.
							</p>
						</div>
						<div className="flex flex-col sm:flex-row gap-4">
							<a
								href="#projects"
								className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center"
							>
								View Projects
								<ArrowRight className="ml-2" size={20} />
							</a>
							{/* Note: Files for download must be placed in the public directory for Vercel/Vite to serve them. */}
							<a
								href="/mukul-resume.pdf"
								className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center justify-center"
								download
							>
								Download CV
								<Download className="ml-2" size={20} />
							</a>
						</div>
					</div>
					<div className="md:w-1/2 relative">
						<div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
							<img
								src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=800"
								alt="Professional workspace"
								className="rounded-2xl shadow-2xl"
							/>
							<div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-600/20 to-transparent"></div>
						</div>
						<div className="absolute -inset-4 bg-blue-600/10 rounded-2xl -z-10 blur-2xl"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
