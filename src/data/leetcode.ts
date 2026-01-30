export interface LeetCodeStats {
	totalSolved: number;
	easy: number;
	medium: number;
	hard: number;
	acceptanceRate?: number;
	ranking?: number;
	reputation?: number;
	contributionPoints?: number;
}

/** API response from alfa-leetcode-api profile endpoint */
export interface LeetCodeProfileResponse {
	totalSolved: number;
	easySolved: number;
	mediumSolved: number;
	hardSolved: number;
	ranking: number;
	contributionPoint: number;
	reputation: number;
}

const PROFILE_URL =
	"https://alfa-leetcode-api.onrender.com/mukultarania/profile";

export async function fetchLeetCodeProfile(): Promise<LeetCodeStats> {
	const res = await fetch(PROFILE_URL);
	if (!res.ok) throw new Error("Failed to fetch LeetCode profile");
	const data: LeetCodeProfileResponse = await res.json();
	return {
		totalSolved: data.totalSolved,
		easy: data.easySolved,
		medium: data.mediumSolved,
		hard: data.hardSolved,
		ranking: data.ranking,
		reputation: data.reputation,
		contributionPoints: data.contributionPoint,
	};
}
