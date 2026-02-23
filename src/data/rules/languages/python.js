/** Python rules */
export const RULE_PYTHON = `## Python Standards
- Type hints on ALL public functions and class methods — mandatory
- PEP 8 enforced via Black + Ruff
- Pydantic models for all structured data — no raw dicts at boundaries
- Context managers (\`with\`) for all file/resource handling
- Avoid mutable default arguments
- Docstrings on all public modules, classes, and functions`;
