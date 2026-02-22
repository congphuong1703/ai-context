"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const defaultOptions = {
  queries: {
    staleTime: 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  },
};

export function QueryProvider({ children }) {
  const [queryClient] = useState(() => new QueryClient({ defaultOptions }));

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
