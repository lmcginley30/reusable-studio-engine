export function createInput(canvas) {
  const input = {
    mouseX: window.innerWidth / 2,
    normalizedX: 0.5
  };

  function updatePosition(event) {
    const bounds = canvas.getBoundingClientRect();

    input.mouseX = event.clientX - bounds.left;

    input.normalizedX =
      input.mouseX / bounds.width;

    input.normalizedX = Math.max(
      0,
      Math.min(1, input.normalizedX)
    );
  }

  canvas.addEventListener("pointermove", updatePosition);

  return input;
}
