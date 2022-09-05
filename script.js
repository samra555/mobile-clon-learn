const p = document.querySelectorAll("p");
console.log(p);

function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  // script.async = false;
  document.body.append(script);
}
loadScript("test.js");
loadScript("other-test.js");

// window.addEventListener("DOMContentLoaded", () => {
//   const box = document.querySelector(".box");
//
//   box.addEventListener("touchstart", (e) => {
//     e.preventDefault();
//     console.log("start");
//     console.log(e.targetTouches);
//   });
//
//   box.addEventListener("touchmove", (e) => {
//     e.preventDefault();
//     console.log(e.targetTouches[0].pageX);
//   });
//   //
//   // box.addEventListener("touchend", (e) => {
//   //   e.preventDefault();
//   //   console.log("end");
//   // });
// });
