# SG10 Codex Board — Pilot v1
This is a supervised Codex workflow inspired by Super-board, not the upstream autonomous daemon.

## Workflow
1. READY: one GitHub Issue with verifiable acceptance criteria, source data and target screenshots.
2. BUILD: Codex changes only required files on a dedicated branch.
3. QA: execute `node scripts/sg10-qa.mjs` plus browser interaction/visual inspection when available.
4. REVIEW: independent diff/regression/privacy review and a draft PR with evidence.
5. DONE: **only after owner approves and merges**.

Use `$sg10-board` to coordinate a task, and `$sg10-visual-qa` for visual regression. One task in flight at first; do not auto-merge, force-push, publish customer-level data, or change Pages settings.

## Repository details
- `meeting.html` assembles 14 parts, numbered 000–013, dynamically.
- `ranking-2027/index.html` is a separate deck.
- GitHub Pages is served from the default branch. CI static checks do not prove 4K rendering.
- Review in-browser at 1920x1080 and 3840x2160; include screenshots only after anonymizing data.
- Test popup, slide navigation, menu, broken images, font clarity, loading failure and mobile.
- Tag test results PASS, FAIL or NOT RUN. Never invent QA evidence.

## Rollback
Close draft PR and delete its branch if unmerged. The pilot introduces no changes to deployed slide HTML. To use branch protection, configure required CI and human review in GitHub settings manually.
