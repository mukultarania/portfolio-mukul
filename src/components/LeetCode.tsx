import React from "react";
import { motion } from "framer-motion";
import {
	CheckCircle2,
	Target,
	Trophy,
	TrendingUp,
	ExternalLink,
	Zap,
	Loader2,
	AlertCircle,
} from "lucide-react";
import { useLeetCodeProfile } from "../hooks/useLeetCodeProfile";
import { personalInfo } from "../data/personalInfo";

const LeetCode = () => {
	const { data: leetcodeStats, isLoading, error } = useLeetCodeProfile();

	const stats = leetcodeStats
		? [
				{
					label: "Total Solved",
					value: leetcodeStats.totalSolved,
					icon: <CheckCircle2 className="text-blue-600" size={28} />,
				},
				{
					label: "Easy",
					value: leetcodeStats.easy,
					icon: <Zap className="text-green-600" size={24} />,
				},
				{
					label: "Medium",
					value: leetcodeStats.medium,
					icon: <Target className="text-amber-600" size={24} />,
				},
				{
					label: "Hard",
					value: leetcodeStats.hard,
					icon: <Trophy className="text-red-600" size={24} />,
				},
			]
		: [];

	const extraStats = leetcodeStats
		? ([
				leetcodeStats.ranking != null && {
					label: "Ranking",
					value: `#${leetcodeStats.ranking.toLocaleString()}`,
				},
				leetcodeStats.reputation != null &&
					leetcodeStats.reputation > 0 && {
						label: "Reputation",
						value: leetcodeStats.reputation,
					},
				leetcodeStats.contributionPoints != null &&
					leetcodeStats.contributionPoints > 0 && {
						label: "Contribution",
						value: leetcodeStats.contributionPoints,
					},
			].filter(Boolean) as { label: string; value: string | number }[])
		: [];

	return (
		<section id="leetcode" className="py-20 bg-gray-50 dark:bg-gray-900/50">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold text-gray-900 dark:text-white">
						LeetCode <span className="text-blue-600">Progress</span>
					</h2>
					<p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
						Problem-solving practice and algorithmic challenges
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					viewport={{ once: true }}
					className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
				>
					{isLoading && (
						<div className="flex flex-col items-center justify-center py-16 gap-4">
							<Loader2
								className="text-blue-600 animate-spin"
								size={48}
							/>
							<p className="text-gray-600 dark:text-gray-400">
								Loading LeetCode stats…
							</p>
						</div>
					)}

					{error && (
						<div className="flex flex-col items-center justify-center py-16 gap-4">
							<AlertCircle className="text-amber-500" size={48} />
							<p className="text-gray-600 dark:text-gray-400 text-center">
								Could not load LeetCode profile. You can still
								visit the profile below.
							</p>
						</div>
					)}

					{!isLoading && !error && leetcodeStats && (
						<>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
								{stats.map((stat, index) => (
									<div
										key={stat.label}
										className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:shadow-md transition-shadow"
										data-scroll
										data-scroll-speed={0.05 * (index + 1)}
									>
										<div className="flex items-center justify-between mb-2">
											<span className="text-sm font-medium text-gray-600 dark:text-gray-400">
												{stat.label}
											</span>
											{stat.icon}
										</div>
										<p className="text-2xl font-bold text-gray-900 dark:text-white">
											{stat.value}
										</p>
									</div>
								))}
							</div>

							{extraStats.length > 0 && (
								<div className="flex flex-wrap gap-4 mb-6 pt-6 border-t border-gray-200 dark:border-gray-700">
									<span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
										<TrendingUp
											size={18}
											className="mr-2 text-blue-600"
										/>
										More stats:
									</span>
									{extraStats.map((item) => (
										<span
											key={item.label}
											className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium"
										>
											{item.label}: {item.value}
										</span>
									))}
								</div>
							)}
						</>
					)}

					<a
						href={personalInfo.profiles.leetcode}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center px-5 py-2.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
					>
						View Profile on LeetCode
						<ExternalLink size={16} className="ml-2" />
					</a>
				</motion.div>
			</div>
		</section>
	);
};

export default LeetCode;
