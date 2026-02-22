import { create } from "zustand";

export const useAppStore = create((set) => ({
  // Example state — extend as needed
  theme: "dark",
  setTheme: (theme) => set({ theme }),
}));
