---
name: sg10-board
description: Supervised Codex Issue-to-draft-PR workflow for the SG10 slide project.
---
# SG10 Board
1. Read AGENTS.md, docs/CODEX_BOARD.md and the selected GitHub Issue.
2. Check scope and acceptance criteria, including data provenance and privacy.
3. Work on a new branch/worktree. Never directly edit main.
4. Implement a minimal change. Run node scripts/sg10-qa.mjs.
5. For visual tasks, read $sg10-visual-qa and collect evidence with a real browser if available.
6. Review the diff independently for regressions, security, UX and data leakage.
7. Open a draft PR summarizing PASS/FAIL/NOT RUN, remaining risks and rollback. Never auto-merge/deploy.
