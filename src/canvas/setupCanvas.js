export function setupCanvas(canvas) {
  const context = canvas.getContext("2d");

  function resize() {
    const pixelRatio = window.devicePixelRatio || 1;

    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    context.setTransform(
      pixelRatio,
      0,
      0,
      pixelRatio,
      0,
      0
    );
  }

  window.addEventListener("resize", resize);

  resize();

  return context;
}
