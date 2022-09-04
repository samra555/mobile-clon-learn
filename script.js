//cloone
console.log(1);

window.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box");

  box.addEventListener("touchstart", (e) => {
    e.preventDefault();
    console.log("start");
  });
});
