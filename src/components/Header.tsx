import React from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data/personalInfo";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	return (
		<header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm transition-colors duration-200">
			<nav className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					<Link
						to="/"
						className="text-2xl font-bold text-gray-800 dark:text-white"
					>
						{personalInfo.name.split(" ")[0]}
						<span className="text-blue-600">.dev</span>
					</Link>

					<div className="hidden md:flex items-center space-x-8">
						<NavLinks />
						<div className="flex items-center space-x-4">
							<SocialLinks />
							<ThemeToggle />
						</div>
					</div>

					<div className="md:hidden flex items-center space-x-4">
						<ThemeToggle />
						<button
							className="text-gray-800 dark:text-white"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{isMenuOpen && (
					<div className="md:hidden py-4">
						<div className="flex flex-col space-y-4">
							<NavLinks />
							<div className="flex justify-center space-x-6 pt-4">
								<SocialLinks />
							</div>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
};

const NavLinks = () => (
	<>
		<Link
			to="/"
			className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
		>
			Home
		</Link>
		<a
			href="#about"
			className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
		>
			About
		</a>
		<a
			href="#projects"
			className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
		>
			Featured Projects
		</a>
		<a
			href="#contact"
			className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
		>
			Contact
		</a>
	</>
);

const SocialLinks = () => (
	<>
		<a
			href={personalInfo.profiles.github}
			className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Github size={20} />
		</a>
		<a
			href={personalInfo.profiles.linkedin}
			className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Linkedin size={20} />
		</a>
		<a
			href={`mailto:${personalInfo.email}`}
			className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
		>
			<Mail size={20} />
		</a>
	</>
);

export default Header;
