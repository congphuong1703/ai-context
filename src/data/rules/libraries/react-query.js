/** TanStack Query rules */
export const RULE_REACT_QUERY = `## TanStack Query
- Server state in QueryClient; no duplicate fetch in component tree
- Use queryKey as array with stable, serializable keys
- Mutations invalidate or update related queries; handle loading/error in UI`;
