# SG10 Codex Board — repository instructions

Applies to all files in this repository. Repository is PUBLIC; GitHub Pages serves the default branch.

## Mission
Maintain the interactive SG10 presentation (HTML/CSS/JavaScript) without losing approved content, image quality, accessibility, performance or customer-data safeguards. Prefer small, independently reviewable fixes.

## Architecture
- `index.html`: home page.
- `meeting.html`: loads `parts/000.txt` through `parts/013.txt` and dynamically injects styles/scripts. Do not treat the loader as a typical static single-page app.
- `ranking-2027/`: independent deck, CSS/JS and images.
- There is no npm build chain; use `node scripts/sg10-qa.mjs` for baseline source checks.

## Human-controlled five gates
1. SCOPE: Read the issue, record exact acceptance criteria and original source of truth; distinguish code bug from content update.
2. VISUAL: Preserve existing visual assets. Generate or replace backgrounds only when the task explicitly requires it; respect text-safe areas, Vietnamese diacritics and 16:9.
3. BUILD: Work on a feature branch/worktree, change only the needed files, keep mobile and 4K presentation usable. For data edits, cite the validated source and snapshot date.
4. QA: Run `node scripts/sg10-qa.mjs`; when a browser is available, capture 1920x1080 and 3840x2160 screenshots, test slide navigation, popups, load failures, text contrast and overflow. If no browser, mark visual QA NOT VERIFIED.
5. APPROVAL: Provide diff summary, testing evidence, risks and rollback method in a draft PR. Never self-approve, merge or deploy.

## Security and change controls
- Do not put real customer names, phone numbers, contract numbers, IDs, tokens, credentials or unmasked customer-level spreadsheets into public source, build output, PR descriptions, screenshots or logs.
- Historical exposure is a separate incident. Do not rewrite Git history, force-push, delete data or change repository visibility without explicit owner authorization.
- Never directly push to `main`. Do not modify production Pages configuration or enable auto-merge.
- Do not claim a visual check, privacy audit or end-to-end test passed unless actually performed.
- Prefer regression fixes over wholesale rewrites; keep rollback straightforward.
- Avoid adding runtime dependencies unless acceptance criteria require them.

## Completion report (required)
- Scope/Issue and files changed.
- Tests actually executed (PASS/FAIL/NOT RUN), with 4K visual result clearly labeled.
- Screenshots/links or explicit reason unavailable.
- Data privacy check and residual risks.
- Rollback reference (branch/commit/PR); request human approval before merge.

See `docs/CODEX_BOARD.md`. For local skills, use `$sg10-board` and `$sg10-visual-qa`.
