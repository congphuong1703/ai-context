/** AI Agent / RAG agent skill — Universal Skill Standard (7 parts). */
export const SKILL_AI_AGENT = {
  metadata: {
    name: "AI Agent / RAG",
    version: "1.0",
    author: "ai-context",
    tags: ["ai-agent", "rag", "llm", "domain"],
  },
  trigger: "When building AI agent pipelines, RAG systems, or LLM-powered features.",
  prerequisites: "Read this rules file and the relevant rules section above.",
  process: [
    "Separate into three distinct stages: retrieval → reasoning → generation — never merge them.",
    "Validate ALL LLM output before acting on it: parse, type-check, sanity-check values.",
    "Set max_tokens, temperature, and timeout explicitly on every single LLM call.",
    "Implement exponential backoff with jitter on every LLM API call.",
    "Add a circuit breaker with max_iterations to abort runaway agent loops.",
    "Log every pipeline step: prompt tokens, completion tokens, latency, model name, cost estimate.",
    "Use a persistent vector store — never re-embed documents on every request.",
  ],
  output: "Code and changes that follow the process; brief summary when requested.",
  constraints: [
    "Do not act on raw LLM string output — always parse and validate the structured response.",
    "Do not expose system prompts, tool schemas, or internal chain steps to end users.",
    "Do not re-embed documents on every request — use a persistent vector store with incremental updates.",
    "Do not allow agents to run indefinitely — enforce a hard max_iterations limit.",
  ],
  examples: [
    {
      input: "User wants an agent to answer questions from a document corpus.",
      output:
        "Stage 1 Retrieval: embed query, similarity search top-k from Chroma. Stage 2 Reasoning: pass chunks + query to LLM with structured output schema. Stage 3 Generation: validate parsed response, format for user. Log: retrieval_ms, llm_ms, input_tokens, output_tokens.",
    },
  ],
};
