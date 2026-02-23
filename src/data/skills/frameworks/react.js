/** React agent skill — Universal Skill Standard (7 parts). */
export const SKILL_REACT = {
  metadata: { name: "React", version: "1.0", author: "ai-context", tags: ["react", "framework"] },
  trigger: "When writing React components, hooks, or state management code.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Use functional components with hooks only — no class components.",
    "Co-locate state as close to usage as possible — lift only when siblings need it.",
    "Extract logic used in 2 or more components into a custom hook in the hooks/ directory.",
    "Always return a cleanup function from useEffect when subscribing to events, timers, or external stores.",
    "Use Suspense and lazy() for route-level code splitting.",
    "Never use array index as key when the list can reorder.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not use useEffect to derive state from props — compute it inline instead.",
    "Do not call hooks conditionally, inside loops, or inside nested functions.",
    "Do not use React.memo, useMemo, or useCallback preemptively — profile first.",
    "Do not mutate state directly — always return a new value.",
  ],
  examples: [
    {
      input: "User wants a component that subscribes to a window resize event.",
      output:
        "function useWindowWidth() {\n  const [width, setWidth] = useState(window.innerWidth)\n  useEffect(() => {\n    const handler = () => setWidth(window.innerWidth)\n    window.addEventListener('resize', handler)\n    return () => window.removeEventListener('resize', handler) // cleanup required\n  }, [])\n  return width\n}",
    },
  ],
};
