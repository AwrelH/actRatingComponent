let ratingCircles = document.querySelectorAll(".rating-circle");
let submitB = document.querySelector("#submit");
let firstContent = document.querySelector(".first-content");
let thanksContent = document.querySelector(".thanks");
let spanValue = document.querySelector(".rating");


ratingCircles.forEach((element) => {
  element.addEventListener("click", () => {
    element.style.backGroundColor = "hsl(217, 12%, 63%)";
    spanValue.innerHTML = element.innerHTML;
  });
});

function submitF() {
  firstContent.classList.add("hidden");
  thanksContent.style.display = "block";
}
submitB.addEventListener("click", submitF);
