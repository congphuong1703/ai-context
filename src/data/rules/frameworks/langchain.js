/** LangChain / AI rules */
export const RULE_LANGCHAIN = `## LangChain / AI Standards
- Separate retrieval, reasoning, generation as distinct pipeline stages
- Validate ALL LLM output before acting on it
- Exponential backoff + jitter on every API call
- Set max_tokens, temperature, timeout explicitly on every request
- Log every LLM call: prompt, response, tokens, latency
- Circuit breaker with max_iterations to prevent runaway loops
- Persistent vector store — never re-embed per request`;
