import { mapRange } from "../utils/math.js";

export function startLoop(context, input) {
  let time = 0;

  function draw() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    time += 0.016;

    // Clear the previous frame.
    context.fillStyle = "#111111";
    context.fillRect(0, 0, width, height);

    // Mouse X controls pulse speed.
    const pulseSpeed = mapRange(
      input.normalizedX,
      0,
      1,
      1,
      6
    );

    // The radius stays readable while the
    // breathing/pulsing changes with input.
    const baseRadius = Math.min(width, height) * 0.12;

    const pulse =
      Math.sin(time * pulseSpeed) * 0.25 + 1;

    const radius = baseRadius * pulse;

    const centerX = width / 2;
    const centerY = height / 2;

    // Draw the single visual form: a ring.
    context.beginPath();
    context.arc(
      centerX,
      centerY,
      radius,
      0,
      Math.PI * 2
    );

    context.strokeStyle = "#f2f2f2";
    context.lineWidth = 2;
    context.stroke();

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}
