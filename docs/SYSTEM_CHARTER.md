# System Charter

The engine is designed to turn a simple input into a readable visual behavior.

My intent is to build systems where meaning comes from relationships rather than decoration.

## Constraints

1. I will use one primary input signal at a time.
2. I will keep the dominant behavior understandable within five seconds.
3. I will build the smallest working system before adding polish.

## Tensions

- Control vs. unpredictability
- Order vs. organic movement

## Taste Vow

I refuse to add effects just because they look impressive.

The visual form should earn its place through behavior.

## Template Sketch

Signal: mouse X position

Parameter: pulse speed

Behavior: the ring chanes shape the faster the mouse moves.

Readability test: moving the mouse around makes  the ring visibly change shape faster within five seconds.

## Architecture

- `index.html` owns the document structure.
- `style.css` owns basic presentation.
- `main.js` is the entry point and wires modules together.
- `src/canvas/` owns Canvas setup and animation.
- `src/input/` owns user input.
- `src/utils/` owns reusable mathematical helpers.
- `docs/` owns planning and AI collaboration rules.
- `process/` owns evidence of iteration and development.
- `assets/` is reserved for future media.
