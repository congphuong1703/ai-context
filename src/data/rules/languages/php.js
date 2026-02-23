/** PHP rules */
export const RULE_PHP = `## PHP Standards
- declare(strict_types=1) in every file — non-negotiable
- PHP 8.2+: typed properties, enums, readonly, named args
- Type hints on all params and return types
- No global variables — dependency injection only
- PSR-12 enforced via PHP-CS-Fixer`;
