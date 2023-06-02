const left = document.querySelector(".left");
const right = document.querySelector(".right");
const images = document.querySelector(".images");
const button = document.querySelectorAll(".button");
console.log(button.length);
let initImage = 1;
const length = button.length;
button[0].style.backgroundColor = "black";

right.addEventListener("click", () => {
  reset();
  if (initImage < length) {
    button[initImage].style.backgroundColor = "black";
    images.style.transform = `translateX(-${initImage * 800}px)`;
    initImage++;
  } else {
    images.style.transform = `translateX(0px)`;
    initImage = 1;
    button[initImage - 1].style.backgroundColor = "black";
  }
  console.log(initImage);
});

left.addEventListener("click", () => {
  reset();
  if (initImage > 1) {
    images.style.transform = `translateX(-${800 * (initImage - 2)}px)`;
    initImage--;
    button[initImage - 1].style.backgroundColor = "black";
  } else {
    images.style.transform = `translateX(-${(length - 1) * 800}px)`;
    initImage = length;
    console.log(initImage);
    button[initImage - 1].style.backgroundColor = "black";
  }
});

const reset = () => {
  button.forEach((button) => {
    button.style.backgroundColor = "white";
  });
};

button.forEach((buttons, index) => {
  buttons.addEventListener("click", () => {
    reset();
    images.style.transform = `translateX(-${800 * index}px)`;
    button[index].style.backgroundColor = "black";
  });
});
