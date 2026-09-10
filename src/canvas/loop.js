export function startLoop(context, input) {
  const orb = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    gravity: 0.035,
    friction: 0.88,
    velocityX: 0,
    velocityY: 0,
    radius: 55
  };

  const trail = [];
  const trailLength = 18;

  function draw() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    context.fillStyle = "rgba(8, 8, 8, 0.15)";
    context.fillRect(0, 0, width, height);

    const differenceX = input.x - orb.x;
    const differenceY = input.y - orb.y;

    orb.velocityX += differenceX * orb.gravity;
    orb.velocityY += differenceY * orb.gravity;
    orb.velocityX *= orb.friction;
    orb.velocityY *= orb.friction;
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

    const distanceFromInput = Math.sqrt(
      differenceX * differenceX + differenceY * differenceY
    );
    const stretch = Math.min(distanceFromInput * 0.12, 55);
    const angle = Math.atan2(
      differenceY || orb.velocityY,
      differenceX || orb.velocityX
    );

    trail.slice(1).reverse().forEach(function (point, index) {
      const fade = (index + 1) / trail.length;
      const trailStretch = Math.min(
        Math.sqrt(
          point.velocityX * point.velocityX +
          point.velocityY * point.velocityY
        ) * 3,
        24
      );

      context.beginPath();
      context.ellipse(
        point.x,
        point.y,
        orb.radius + trailStretch,
        Math.max(orb.radius - trailStretch * 0.35, 18),
        Math.atan2(point.velocityY, point.velocityX),
        0,
        Math.PI * 2
      );
      context.strokeStyle = `rgba(255, 255, 255, ${0.035 * fade})`;
      context.lineWidth = 2;
      context.stroke();
    });

    const majorRadius = orb.radius + stretch;
    const minorRadius = Math.max(orb.radius - stretch * 0.35, 18);

    context.beginPath();
    context.ellipse(
      orb.x,
      orb.y,
      majorRadius + 12,
      minorRadius + 12,
      angle,
      0,
      Math.PI * 2
    );
    context.strokeStyle = "rgba(255, 255, 255, 0.08)";
    context.lineWidth = 2;
    context.stroke();

    context.beginPath();
    context.ellipse(
      orb.x,
      orb.y,
      majorRadius,
      minorRadius,
      angle,
      0,
      Math.PI * 2
    );
    context.strokeStyle = "#ffffff";
    context.lineWidth = 2;
    context.stroke();

    context.beginPath();
    context.moveTo(orb.x, orb.y);
    context.lineTo(input.x, input.y);
    context.strokeStyle = "rgba(255, 255, 255, 0.12)";
    context.lineWidth = 1;
    context.stroke();

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}
