# Contributing to DevNest

Thanks for contributing.

## Workflow

1. Fork the repo.
2. Create a branch from `main`.
3. Make focused changes.
4. Run checks locally.
5. Open a PR with clear context and screenshots for UI updates.

## Branch Naming

Use one of these:

- `feat/<short-description>`
- `fix/<short-description>`
- `docs/<short-description>`
- `chore/<short-description>`

## Local Checks

```bash
npm run lint
npm run build
```

## Pull Request Checklist

- [ ] Scope is focused and clear
- [ ] No unrelated file churn
- [ ] UI changes include before/after screenshots or video
- [ ] Build passes locally
- [ ] README/docs updated when behavior changes

## Coding Guidelines

- Keep components small and composable
- Reuse shared tokens/classes from `globals.css`
- Keep visual consistency with existing theme
- Prefer explicit naming over clever naming

## Commit Message Style

Use concise, imperative messages:

- `feat: add branded loading logo to auth guard`
- `fix: correct icon rendering in footer`
- `docs: rewrite readme with setup and structure`

## Questions

Open an issue first if you plan a large refactor or behavior change.
