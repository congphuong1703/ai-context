/** NestJS rules */
export const RULE_NESTJS = `## NestJS Standards
- Module → Controller → Service → Repository layering — strict
- class-validator + class-transformer for all DTOs
- Global exception filter for consistent error shape
- Guards for auth; Interceptors for logging/transform; Pipes for validation
- ConfigModule with validation schema for all environment config`;
