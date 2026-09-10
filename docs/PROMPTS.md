# Copilot Prompt System

## Context Block

I am building a browser-based creative coding system using vanilla HTML, CSS,
JavaScript, and Canvas.

The project has this structure:

- `index.html` — document structure
- `style.css` — visual styling
- `main.js` — application entry point
- `src/canvas/` — Canvas setup and animation
- `src/input/` — user input
- `src/utils/` — reusable utilities
- `docs/` — planning and prompt documentation
- `process/` — screenshots and iteration notes

The system must remain modular and understandable.

My current constraints are:

- one primary input signal
- one dominant visual behavior
- one primary visual form
- no external libraries
- Canvas must use HiDPI scaling
- `main.js` should remain a simple entry point

Do not invent additional features unless explicitly requested.

## Prompt Template 1 — Canvas Draw Loop

I need technical help implementing the Canvas animation loop.

Current behavior:
[DESCRIBE BEHAVIOR]

Input:
[DESCRIBE INPUT]

Parameter:
[DESCRIBE PARAMETER]

Constraints:
[LIST CONSTRAINTS]

Tell me which file should change and explain why.
Keep the implementation minimal and modular.

## Prompt Template 2 — Input Mapping

I need to connect this input:

[DESCRIBE INPUT]

to this parameter:

[DESCRIBE PARAMETER]

The input should be mapped from:

[INPUT RANGE]

to:

[OUTPUT RANGE]

Do not change the visual design or add new behavior.
Explain the mapping in plain language.

## Prompt Template 3 — Debugging

Something is not behaving correctly.

Expected behavior:
[DESCRIBE EXPECTED RESULT]

Actual behavior:
[DESCRIBE ACTUAL RESULT]

Relevant files:
[LIST FILES]

Help me identify the smallest change needed to fix it.
Do not rewrite unrelated code.

## AI Collaboration Rule

Every AI response must be followed by my own explanation of:

1. What changed.
2. Which file changed.
3. Why the change was necessary.
4. How the change affects the system.

AI-generated code is not considered finished until I can explain what it does
in plain language.
