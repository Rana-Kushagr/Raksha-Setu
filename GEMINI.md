# RakshaSetu Project & Hackathon Guidelines

These rules govern the development, localization, and submission of features for the RakshaSetu project.

## 1. Hackathon Submissions & Tech Match
- **Honest Tracking:** Only enter award categories that directly match the active technology stack of this project (Vanilla PWA, JavaScript, HTML5).
- If a specific tool, platform, or library (e.g., Kotlin Multiplatform, Galaxy Store, RevenueCat Ads) is not implemented or present in the repository, leave the corresponding submission field blank.

## 2. Document Generation (PDF-to-HTML)
- When generating project stories or problem statements as HTML for PDF printing:
  - Utilize A4 page layout standards (`@page { size: A4; margin: 0; }` and `.page { width: 210mm; min-height: 297mm; }`).
  - Style with explicit color variables, high contrast typography (`Syne` / `Inter`), and advise the user to enable the "Background graphics" option in their browser's print dialog.

## 3. Bilingual Indian Localization
- Always keep local Indian terms (e.g., **PITT** for hives, **Kapoor** for camphor, **Neem** for neem leaves, **Ajwain** for carom seeds) prominently visible in the UI cards and titles. 
- Do not scrub local terms from titles to satisfy generic Western categories, as local familiarity is a key requirement for Indian users.
- Ensure all triage instructions are written and spoken side-by-side in both **English** and **Hindi (हिंदी)**.

## 4. Deployment Sync
- After modifying `index.html` or secondary files, execute a file copy to sync to the desktop shortcut path: `C:\Users\Lakshit Rana\OneDrive\Desktop\RakshaSetu-Emergency-App.html`.
- Run the local Node sync script `push-to-github.js` immediately following a desktop sync to publish changes to the live environment.

## 5. Automatic Skill Orchestration
- **Active Scanning:** For every task or instruction provided by the user, dynamically check the list of installed workspace skills (`.agents/skills/*`) and match the intent.
- **Auto-Activation:** Do not wait for the user to explicitly invoke slash commands (like `/review` or `/qa`). When a task calls for:
  - Plan / Architecture changes: Auto-activate `office-hours` or `plan-eng-review`.
  - Visual Audit / UI tweaks: Auto-activate `design-review` or `design-html`.
  - Bug checks / Quality assurance: Auto-activate `qa` or `investigate`.
  - Before pushing / landing changes: Auto-activate `review` or `ship`.
- **Preemptive Reading:** When a match is found, immediately read the corresponding `SKILL.md` using `view_file` and execute the steps internally without requiring user intervention.

