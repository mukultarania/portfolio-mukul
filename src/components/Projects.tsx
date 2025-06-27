import React, { useEffect, useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/projects";
import ProjectCard from "./Projects/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
	const sectionRef = useRef(null);
	const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
	const filteredProj = projects.filter((project) => project.flag);

	useEffect(() => {
		const ctx = gsap.context(() => {
			projectRefs.current.forEach((project, index) => {
				gsap.fromTo(
					project,
					{
						opacity: 0,
						y: 50,
					},
					{
						opacity: 1,
						y: 0,
						duration: 1,
						ease: "power3.out",
						scrollTrigger: {
							trigger: project,
							start: "top bottom-=100",
							end: "bottom center",
							toggleActions: "play none none reverse",
						},
						delay: index * 0.2,
					}
				);
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			id="projects"
			className="py-20 bg-gradient-to-b from-white to-gray-50"
		>
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold text-center mb-16">
					Featured <span className="text-blue-600">Projects</span>
				</h2>

				<div className="grid lg:grid-cols-2 gap-8">
					{filteredProj.map((project, index) => (
						<ProjectCard
							key={index}
							project={project}
							index={index}
						/>
					))}
				</div>
				{/* Add "See All Projects" button */}
				<div className="text-center mt-12">
					<Link
						to="/projects"
						className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-200"
					>
						See All Projects
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Projects;
