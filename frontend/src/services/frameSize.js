export function subscribe(callback) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

// export function snapshot() {
//   return window.innerHeight;
// }

// export function calculatedFrame(heightScreen) {
//   const heightFrame = heightScreen - 324;
//   const widthFrame = (heightFrame / 4) * 3;
//   return { heightFrame, widthFrame };
// }

export function snapshot() {
  return window.innerWidth;
}

export function calculatedFrame(widthScreen) {
  const widthFrame = widthScreen - 32;
  const heightFrame = widthFrame / (4 / 3);
  return { widthFrame, heightFrame };
}
