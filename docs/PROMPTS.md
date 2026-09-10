# Copilot Prompt System

These prompts keep AI assistance focused on the Mouse Gravity site and the
reusable engine around it.

## Context Block

I am building a browser-based creative coding experiment with vanilla HTML,
CSS, JavaScript, and Canvas. The current site is called **Mouse Gravity**.

The page has one interaction: pointer position attracts a white outlined orb.
The orb has velocity, friction, directional stretch, and a short fading trail.
The current live implementation is in `main.js`; the files in `src/` are being
shaped into reusable modules.

Project structure:

- `index.html` — document structure and interaction copy
- `style.css` — full-screen layout and typography
- `main.js` — current runtime and composition point
- `src/canvas/` — Canvas setup and loop modules
- `src/input/` — pointer input module
- `src/utils/` — reusable math helpers
- `docs/` — system rules, roadmap, and prompts
- `process/` — changelog and screenshot evidence

Constraints:

- Keep pointer movement as the only primary input.
- Keep attraction toward the pointer as the dominant behavior.
- Keep one primary visual form: the orb.
- Do not add external libraries or a control panel unless requested.
- Preserve HiDPI Canvas scaling and responsive behavior.
- Keep `main.js` focused on composition after modular extraction.
- Do not rewrite unrelated files.

## Prompt 1: Change the Physics

I need to adjust the Mouse Gravity physics.

Current behavior:
[DESCRIBE WHAT THE ORB DOES]

Desired behavior:
[DESCRIBE THE CHANGE IN PLAIN LANGUAGE]

Relevant parameter:
[gravity, friction, radius, trailLength, or another parameter]

Constraints:
- Keep pointer movement as the only input.
- Keep the orb readable and centered in the visual hierarchy.
- Change the smallest possible number of files.

Identify the controlling code path, propose the smallest edit, and explain how
the change affects attraction, momentum, or stretch.

## Prompt 2: Extract a Module

I want to extract this responsibility from `main.js`:

[Canvas setup, pointer input, physics state, or drawing loop]

The current behavior must remain unchanged. Show the smallest module boundary,
the API between the module and the runtime, and the files that need updating.
Do not reorganize unrelated code or add abstractions without a concrete use.

## Prompt 3: Diagnose a Visual Bug

Mouse Gravity is not behaving as expected.

Expected behavior:
[DESCRIBE THE VISIBLE RESULT]

Actual behavior:
[DESCRIBE THE VISIBLE PROBLEM]

Reproduction steps:
[LIST THE POINTER, RESIZE, OR VIEWPORT ACTIONS]

Relevant files:
[LIST FILES]

Trace the smallest controlling code path first. Suggest one focused fix and one
cheap browser check that could confirm or reject the diagnosis.

## Prompt 4: Review a Visual Change

Review this proposed change to Mouse Gravity:

[DESCRIBE THE CHANGE]

Check whether it improves the relationship between pointer movement and orb
motion. Look for unnecessary decoration, loss of readability, resize bugs,
performance problems, and behavior that conflicts with the System Charter.
Return findings first, ordered by severity, followed by missing tests.

## AI Collaboration Rule

After each AI-assisted change, record:

1. What changed.
2. Which file changed.
3. Why the change was necessary.
4. How the change affects the pointer-to-orb relationship.

AI-generated code is unfinished until its behavior can be explained in plain
language and checked in the browser.
