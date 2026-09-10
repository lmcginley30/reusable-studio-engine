export function createInput(canvas) {
  const input = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  };

  function updatePosition(event) {
    const bounds = canvas.getBoundingClientRect();

    input.x = event.clientX - bounds.left;
    input.y = event.clientY - bounds.top;
  }

  canvas.addEventListener("pointermove", updatePosition);

  return input;
}
