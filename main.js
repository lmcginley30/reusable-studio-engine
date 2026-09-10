const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// --------------------------------------------------
// CANVAS SETUP
// --------------------------------------------------

let width;
let height;
let pixelRatio;

function resizeCanvas() {
  pixelRatio = window.devicePixelRatio || 1;

  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;

  canvas.style.width = width + "px";
  canvas.style.height = height + "px";

  ctx.setTransform(
    pixelRatio,
    0,
    0,
    pixelRatio,
    0,
    0
  );
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();

// --------------------------------------------------
// MOUSE INPUT
// --------------------------------------------------

// The mouse is our ONE input signal.

const mouse = {
  x: width / 2,
  y: height / 2
};

window.addEventListener("mousemove", function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

// --------------------------------------------------
// VISUAL OBJECT
// --------------------------------------------------

const orb = {
  x: width / 2,
  y: height / 2,

  // How strongly the mouse pulls the orb.
  gravity: 0.035,

  // How much movement the orb remembers.
  friction: 0.88,

  velocityX: 0,
  velocityY: 0,

  radius: 55
};

const trail = [];
const trailLength = 18;

// --------------------------------------------------
// ANIMATION LOOP
// --------------------------------------------------

function animate() {

  // Dark background.
  ctx.fillStyle = "rgba(8, 8, 8, 0.15)";
  ctx.fillRect(0, 0, width, height);

  // ------------------------------------------------
  // MOUSE → MOVEMENT
  // ------------------------------------------------

  const differenceX = mouse.x - orb.x;
  const differenceY = mouse.y - orb.y;

  // The mouse pulls the orb toward itself.
  orb.velocityX += differenceX * orb.gravity;
  orb.velocityY += differenceY * orb.gravity;

  // Friction keeps the movement smooth.
  orb.velocityX *= orb.friction;
  orb.velocityY *= orb.friction;

  // Move the orb.
  orb.x += orb.velocityX;
  orb.y += orb.velocityY;

  trail.unshift({
    x: orb.x,
    y: orb.y,
    velocityX: orb.velocityX,
    velocityY: orb.velocityY
  });

  if (trail.length > trailLength) {
    trail.pop();
  }

  // ------------------------------------------------
  // DRAW ORB
  // ------------------------------------------------

  const distanceFromMouse = Math.sqrt(
    differenceX * differenceX +
    differenceY * differenceY
  );

  const stretch = Math.min(distanceFromMouse * 0.12, 55);
  const angle = Math.atan2(
    differenceY || orb.velocityY,
    differenceX || orb.velocityX
  );

  // Draw older positions first so the current ring stays crisp.
  trail.slice(1).reverse().forEach(function (point, index) {
    const fade = (index + 1) / trail.length;
    const trailStretch = Math.min(
      Math.sqrt(
        point.velocityX * point.velocityX +
        point.velocityY * point.velocityY
      ) * 3,
      24
    );

    ctx.beginPath();
    ctx.ellipse(
      point.x,
      point.y,
      orb.radius + trailStretch,
      Math.max(orb.radius - trailStretch * 0.35, 18),
      Math.atan2(point.velocityY, point.velocityX),
      0,
      Math.PI * 2
    );
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.035 * fade})`;
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  // The force stretches the ring along the direction of the cursor.
  const majorRadius = orb.radius + stretch;
  const minorRadius = Math.max(orb.radius - stretch * 0.35, 18);

  // Outer glow.
  ctx.beginPath();

  ctx.ellipse(
    orb.x,
    orb.y,
    majorRadius + 12,
    minorRadius + 12,
    angle,
    0,
    Math.PI * 2
  );

  ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Main circle.
  ctx.beginPath();

  ctx.ellipse(
    orb.x,
    orb.y,
    majorRadius,
    minorRadius,
    angle,
    0,
    Math.PI * 2
  );

  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 2;
  ctx.stroke();

  // ------------------------------------------------
  // CONNECTION TO MOUSE
  // ------------------------------------------------

  ctx.beginPath();

  ctx.moveTo(orb.x, orb.y);
  ctx.lineTo(mouse.x, mouse.y);

  ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
  ctx.lineWidth = 1;
  ctx.stroke();

  // Continue animation.
  requestAnimationFrame(animate);
}

// Start the engine.
animate();
