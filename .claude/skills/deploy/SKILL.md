---
name: deploy
description: Deployment preparation and CI/CD setup. Use when the user mentions deploying, releasing, CI/CD pipelines, Vercel, Docker, or production readiness.
allowed-tools: Read, Grep, Glob, Bash
---

Guide the deployment process:

## Pre-Deployment Checklist
- All tests passing (`npm run test`)
- TypeScript builds without errors (`npm run build`)
- No console.logs or debugging code
- Environment variables configured
- Secrets not in code
- Dependencies updated (`npm audit`)
- Database migrations ready (`npx prisma migrate status`)

## Deployment Steps
1. Run pre-deployment checks
2. Prepare database migrations
3. Configure environment variables
4. Deploy to staging first
5. Run smoke tests on staging
6. Deploy to production
7. Verify production health

## Rollback Plan
- Document the current working version
- Ensure database migrations are backwards compatible
- Have a rollback command ready
