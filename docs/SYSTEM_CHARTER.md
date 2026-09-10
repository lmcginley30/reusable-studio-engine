# System Charter

Reusable Studio Engine is a small browser-based creative coding system. Its
current experiment, **Mouse Gravity**, turns the position of the pointer into a
physical-looking response: a white orb is pulled toward the cursor, eases into
motion through friction, stretches in the direction of the force, and leaves a
short fading trail.

The engine is not trying to simulate reality. It is trying to make a simple
relationship feel immediate, legible, and reusable.

## Core Relationship

- **Signal:** pointer position on the viewport
- **State:** orb position, velocity, and recent positions
- **Behavior:** spring-like attraction with friction
- **Visual form:** one outlined orb with an elastic ellipse, glow, trail, and
	connection line
- **Readability test:** moving the pointer should visibly pull and stretch the
	orb within five seconds, without needing instructions beyond the page label

## Constraints

1. Keep one primary input signal: pointer movement.
2. Keep one dominant visual behavior: attraction toward the pointer.
3. Keep the orb and its motion readable before adding effects.
4. Preserve smooth motion across viewport sizes and HiDPI displays.
5. Prefer a small number of meaningful parameters over a feature-heavy control
	 panel.
6. Build the smallest working interaction before polishing it.

## Tensions

- Control vs. momentum
- Precision vs. organic motion
- Minimalism vs. visible feedback
- Reusable structure vs. experiment-specific character

## Taste Vow

Do not add an effect because it looks impressive in isolation. Every glow,
trail, stretch, or line must clarify the force, velocity, or relationship
between the pointer and the orb. If removing an effect does not reduce
understanding, remove the effect.

## Architecture

- `index.html` owns the page structure, title, and interaction instructions.
- `style.css` owns the full-screen presentation and typographic overlay.
- `main.js` is the current runtime entry point and owns the live Mouse Gravity
	prototype: canvas setup, pointer state, physics, trail state, and drawing.
- `src/canvas/` contains reusable Canvas setup and loop candidates for the next
	modular extraction.
- `src/input/` contains the reusable pointer input candidate.
- `src/utils/` contains reusable math helpers.
- `docs/` owns the system rules, roadmap, and AI collaboration prompts.
- `process/` owns iteration notes and screenshot evidence.
- `assets/` is reserved for media only when the interaction needs it.

The reusable modules should earn their connection to the runtime through a
small, behavior-preserving extraction. Do not split `main.js` merely to make
the folder structure look complete.
