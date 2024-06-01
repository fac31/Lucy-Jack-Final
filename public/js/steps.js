import { fadeIn, fadeOut, fadeInSVG } from "./fade.js";
import {
  changeSize,
  hideDataPoints,
  moveBlueCircle,
  restartDataViz,
  revertChangeSize,
  revertHideDataPoints,
  revertMoveBlueCircle,
  startDataViz,
} from "./dataViz.js";
const introCircles = document.getElementById("circles-intro");
const dataViz1 = document.getElementById("dataviz_one"); //.firstChild;
const step1Viz = document.getElementById("step1Viz");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

export function enterStepOne() {
  for (const circle of introCircles.children) {
    fadeOut(circle, 20);
  }
  dataViz1.setAttribute("opacity", "0");
  dataViz1.firstChild.setAttribute("height", "300px");
  console.log("enter step one");
  step1Viz.append(dataViz1);
  startDataViz();
}
export function revertToStepOne() {
  step1Viz.append(dataViz1);
  restartDataViz();
}

export function exitStepOne() {
  for (const circle of introCircles.children) {
    fadeIn(circle, 20, 0.5);
  }
}

export function enterStepTwo() {
  console.log("enter step two");
  dataViz1.firstChild.setAttribute("opacity", "0");
  dataViz1.setAttribute("height", "600px");
  step2.append(dataViz1);
  fadeInSVG(dataViz1.firstChild, 10, 1);
  changeSize();
}
export function revertToStepTwo() {
  step2.append(dataViz1);
  fadeIn(dataViz1, 10, 1);
  revertChangeSize();
}
export function enterStepThree() {
  dataViz1.firstChild.setAttribute("opacity", "0");
  step3.append(dataViz1);
  fadeInSVG(dataViz1.firstChild, 10, 1);
  hideDataPoints();
  moveBlueCircle();
}
export function revertToStepThree() {
  step3.append(dataViz1);
  revertMoveBlueCircle();
  revertHideDataPoints();
}