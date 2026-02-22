"use client";

import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";

const GITHUB_REPO = "congphuong1703/ai-context";
const API_URL = `https://api.github.com/repos/${GITHUB_REPO}`;

export function useGitHubStars() {
  const query = useQuery({
    queryKey: ["githubStars", GITHUB_REPO],
    queryFn: async () => {
      const { data } = await api.get(API_URL, {
        headers: { Accept: "application/vnd.github.v3+json" },
      });
      return data.stargazers_count ?? 0;
    },
    staleTime: 60 * 60 * 1000,
  });

  return {
    stars: query.data ?? null,
    loading: query.isPending,
    error: query.error,
  };
}
