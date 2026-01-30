import { useState, useEffect } from "react";
import { fetchLeetCodeProfile, type LeetCodeStats } from "../data/leetcode";

export function useLeetCodeProfile() {
	const [data, setData] = useState<LeetCodeStats | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		let cancelled = false;
		setIsLoading(true);
		setError(null);
		fetchLeetCodeProfile()
			.then((stats) => {
				if (!cancelled) setData(stats);
			})
			.catch((err) => {
				if (!cancelled)
					setError(
						err instanceof Error ? err : new Error(String(err)),
					);
			})
			.finally(() => {
				if (!cancelled) setIsLoading(false);
			});
		return () => {
			cancelled = true;
		};
	}, []);

	return { data, isLoading, error };
}
