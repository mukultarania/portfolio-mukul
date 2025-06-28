import React from "react";
import { Code2, Brain, Rocket } from "lucide-react";
import { experience } from "../data/experience";

const About = () => {
	return (
		<section id="about" className="py-20 bg-white dark:bg-gray-900">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold text-center mb-16">
					About <span className="text-blue-600">Me</span>
				</h2>

				<div className="grid md:grid-cols-3 gap-8 mb-16">
					{features.map((feature, index) => (
						<div
							key={index}
							className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
							data-scroll
							data-scroll-speed={0.1 * (index + 1)}
						>
							<div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
								{feature.icon}
							</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
								{feature.title}
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								{feature.description}
							</p>
						</div>
					))}
				</div>

				<div className="space-y-8">
					<div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
						<h3 className="text-2xl font-semibold mb-6 text-blue-600">
							Experience
						</h3>
						<div className="space-y-6">
							<div>
								<h4 className="text-xl font-semibold text-gray-900 dark:text-white">
									{experience.current.position}
								</h4>
								<p className="text-gray-600 dark:text-gray-400">
									{experience.current.company}
								</p>
								<p className="text-sm text-gray-500">
									{experience.current.duration}
								</p>
								<ul className="mt-4 space-y-2">
									{experience.current.responsibilities
										.slice(0, 4)
										.map((resp, index) => (
											<li
												key={index}
												className="flex items-start"
											>
												<span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full"></span>
												<span className="text-gray-700 dark:text-gray-300">
													{resp}
												</span>
											</li>
										))}
								</ul>
								{/* Core Strengths for Current Experience */}
								{experience.current.coreStrengths &&
									experience.current.coreStrengths.length >
										0 && (
										<div className="mt-8">
											<h5 className="text-blue-600 font-semibold mb-2">
												Core Strengths
											</h5>
											<div className="grid grid-cols-2 gap-2">
												{experience.current.coreStrengths.map(
													(strength, i) => (
														<div
															key={i}
															className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
														>
															<span className="w-2 h-2 bg-blue-600 rounded-full"></span>
															<span>
																{strength}
															</span>
														</div>
													)
												)}
											</div>
										</div>
									)}
							</div>
							{/* Past Experience */}
							{experience.past && experience.past.length > 0 && (
								<div className="pt-8 border-t border-gray-200 dark:border-gray-700">
									<h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
										Past Experience
									</h4>
									{experience.past.map((exp, idx) => (
										<div key={idx} className="mb-6">
											<div className="font-semibold">
												{exp.position}
											</div>
											<div className="text-gray-600 dark:text-gray-400">
												{exp.company}
											</div>
											<div className="text-sm text-gray-500">
												{exp.duration}
											</div>
											<ul className="mt-2 space-y-1">
												{exp.responsibilities
													.slice(0, 4)
													.map((resp, i) => (
														<li
															key={i}
															className="flex items-start"
														>
															<span className="w-2 h-2 mt-2 mr-2 bg-blue-400 rounded-full"></span>
															<span className="text-gray-700 dark:text-gray-300">
																{resp}
															</span>
														</li>
													))}
											</ul>
											{/* Core Strengths for Past Experience */}
											{exp.coreStrengths &&
												exp.coreStrengths.length >
													0 && (
													<div className="mt-4">
														<h5 className="text-blue-600 font-semibold mb-2">
															Core Strengths
														</h5>
														<div className="grid grid-cols-2 gap-2">
															{exp.coreStrengths.map(
																(
																	strength,
																	i
																) => (
																	<div
																		key={i}
																		className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
																	>
																		<span className="w-2 h-2 bg-blue-400 rounded-full"></span>
																		<span>
																			{
																				strength
																			}
																		</span>
																	</div>
																)
															)}
														</div>
													</div>
												)}
										</div>
									))}
								</div>
							)}
							{/* Internship */}
							{experience.internship && (
								<div className="pt-8 border-t border-gray-200 dark:border-gray-700">
									<h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
										Internship
									</h4>
									<div>
										<div className="font-semibold">
											{experience.internship.position}
										</div>
										<div className="text-gray-600 dark:text-gray-400">
											{experience.internship.company}
										</div>
										<div className="text-sm text-gray-500">
											{experience.internship.duration}
										</div>
										<ul className="mt-2 space-y-1">
											{experience.internship.responsibilities
												.slice(0, 4)
												.map((resp, i) => (
													<li
														key={i}
														className="flex items-start"
													>
														<span className="w-2 h-2 mt-2 mr-2 bg-blue-300 rounded-full"></span>
														<span className="text-gray-700 dark:text-gray-300">
															{resp}
														</span>
													</li>
												))}
										</ul>
										{/* Core Strengths for Internship */}
										{experience.internship.coreStrengths &&
											experience.internship.coreStrengths
												.length > 0 && (
												<div className="mt-4">
													<h5 className="text-blue-600 font-semibold mb-2">
														Core Strengths
													</h5>
													<div className="grid grid-cols-2 gap-2">
														{experience.internship.coreStrengths.map(
															(strength, i) => (
																<div
																	key={i}
																	className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
																>
																	<span className="w-2 h-2 bg-blue-300 rounded-full"></span>
																	<span>
																		{
																			strength
																		}
																	</span>
																</div>
															)
														)}
													</div>
												</div>
											)}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const features = [
	{
		icon: <Code2 className="text-blue-600" size={28} />,
		title: "Clean Code",
		description:
			"Writing maintainable, efficient, and well-documented code is my top priority.",
	},
	{
		icon: <Brain className="text-blue-600" size={28} />,
		title: "Problem Solver",
		description:
			"I enjoy tackling complex challenges and finding innovative solutions.",
	},
	{
		icon: <Rocket className="text-blue-600" size={28} />,
		title: "Fast Learner",
		description:
			"Quickly adapting to new technologies and methodologies to stay current.",
	},
];

export default About;
