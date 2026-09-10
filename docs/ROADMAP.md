# Roadmap

This roadmap is for the current site: a full-screen Canvas experiment called
**Mouse Gravity** and the reusable engine around it.

## Working Now

- Full-screen responsive Canvas with device-pixel-ratio scaling
- Pointer movement as the single input signal
- Orb attraction with configurable gravity and friction
- Velocity-based ellipse stretch
- Fading motion trail
- Subtle glow and line connecting the orb to the pointer
- Minimal instructional overlay: title and two-sentence interaction cue

## Phase 1: Verify the Experience

1. Open the page at desktop and narrow viewport sizes.
2. Confirm the orb starts centered and follows the pointer smoothly.
3. Confirm the stretch communicates direction rather than obscuring the orb.
4. Confirm the trail fades and does not permanently dirty the canvas.
5. Confirm resize keeps the drawing aligned with the viewport.
6. Capture a screenshot and record any perceptual issues in
	`process/changeLog.md`.

## Phase 2: Make the Engine Reusable

1. Extract Canvas setup from `main.js` into `src/canvas/setupCanvas.js`.
2. Extract pointer state and event handling into `src/input/input.js`.
3. Extract the animation and drawing loop into `src/canvas/loop.js`.
4. Reuse `src/utils/math.js` for clamping, distance, and range mapping where
	those helpers improve clarity.
5. Keep the behavior unchanged while extracting each boundary.
6. Keep `main.js` responsible for composition and configuration only.

## Phase 3: Test the System

- Test pointer movement near each viewport edge.
- Test a slow pointer, a fast pointer, and a stationary pointer.
- Test resize during motion.
- Test a high-DPI display or browser device emulation.
- Check that the page remains usable without scrolling or accidental selection.
- Check that a reduced-motion preference can be supported before adding more
  animation polish.

## Phase 4: Publish and Iterate

1. Deploy the working version through the existing GitHub Pages path.
2. Capture a milestone screenshot before each meaningful visual change.
3. Adjust only one physical or visual parameter at a time.
4. Keep the interaction legible before adding new input modes, controls, or
	decorative media.

## Definition of Done

The current experiment is done when the relationship is obvious without
explanation, the motion is stable on common viewport sizes, the code is split
at useful boundaries, and the documentation describes the behavior that is
actually running.
