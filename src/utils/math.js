export function mapRange(
  value,
  inputMin,
  inputMax,
  outputMin,
  outputMax
) {
  const normalized =
    (value - inputMin) /
    (inputMax - inputMin);

  return (
    outputMin +
    normalized * (outputMax - outputMin)
  );
}

export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
