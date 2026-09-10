import { startLoop } from "./src/canvas/loop.js";
import { setupCanvas } from "./src/canvas/setupCanvas.js";
import { createInput } from "./src/input/input.js";

const canvas = document.getElementById("canvas");
const context = setupCanvas(canvas);
const input = createInput(canvas);

startLoop(context, input);
