import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "../components/Projects/ProjectCard";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
	return (
		<div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
			<div className="container mx-auto px-6 py-12">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<h1 className="text-4xl font-bold text-gray-900 dark:text-white">
						All <span className="text-blue-600">Projects</span>
					</h1>
					<p className="mt-4 text-gray-600 dark:text-gray-400">
						A comprehensive showcase of my work
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<ProjectCard
							key={project.title}
							project={project}
							index={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectsPage;
