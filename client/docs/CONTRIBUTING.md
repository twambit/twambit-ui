
---

## 🤝 `docs/CONTRIBUTING.md`

```markdown
# Contributing Guide

Thanks for your interest in contributing to twambit!

## Workflow
1. Fork this repo
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit changes (lint + test before pushing)
4. Open a Pull Request into `dev`

## Branching Strategy
- `main` → production
- `production` > deploy to aws/azure servers secured with IAM
- `staging` → pre-release QA
- `dev` → integration
- feature branches → `dev`

## Code Standards
- Lint with `npm run lint` or Eslint
- Test with `npm test` React Testing Library using React Hooks
- Follow project coding conventions

## Issues
- Use GitHub Issues for bugs/features
- PRs should reference an issue

## Copilots
- Github copilot
- Roo Code
- Github hooks
- push checks 
- must clone repo "copilot-prompts-ui, copilot-prompts-api"
- Centralized prompts on seperate repo housed in MarkDown files ".md"
- Security and code integrity both "ui / api"  dev teams.

## UI/UX Collaboration
- Miro
- Figma

## CSS
- Tailwind

## AI
- langchaing
- prompt engineering
- LLMS
- GEN AI
- RAG
- OPENAI
