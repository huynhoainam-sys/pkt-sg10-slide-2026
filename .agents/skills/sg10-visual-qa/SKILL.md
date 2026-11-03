---
name: sg10-visual-qa
description: Review SG10 HTML slide UX, typography, popup and TV 4K rendering with explicit evidence.
---
# SG10 Visual QA
Inspect index.html, meeting.html and ranking-2027/index.html; meeting has fourteen fragments. Run node scripts/sg10-qa.mjs. Use browser screens at 1920x1080 and 3840x2160 (also mobile 390x844 if UI changed), check slides, navigation, menu, popups, image integrity, Vietnamese text, contrast, overflow, raster scaling, font sharpness and loading states. Compare source-of-truth data if supplied. Do not claim browser or 4K PASS without actual screenshots and observations. Mask PII before attaching evidence. Return PASS/FAIL/NOT RUN with relevant file/slide pointers and repair proposal.
