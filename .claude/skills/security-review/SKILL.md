---
name: security-review
description: Comprehensive security audit. Use when reviewing code for vulnerabilities, before deployments, or when the user mentions security concerns, OWASP, or penetration testing.
allowed-tools: Read, Grep, Glob
---

Analyze the codebase for security vulnerabilities:

## Security Review Checklist

### Input Validation
- SQL injection risks (check raw queries)
- XSS vulnerabilities (unescaped user input in JSX)
- Command injection (user input in shell commands)
- Path traversal (user input in file paths)

### Authentication & Authorization
- Authentication bypass opportunities
- Missing authorization checks on API routes
- Insecure session management
- Weak password policies

### Data Protection
- Exposed credentials or secrets in code
- Sensitive data in logs or error messages
- Missing encryption for data at rest/in transit
- PII exposure in API responses

### Configuration
- Insecure default configurations
- Missing security headers
- CORS misconfiguration
- Debug mode enabled in production

Report findings with severity ratings (Critical/High/Medium/Low) and specific remediation steps.
