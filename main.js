/* slider */
let slideIndex = 1;

$(document).ready(function () {
  slideIndex = 1;
  showDivs(slideIndex);
});
function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("slides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex - 1].style.display = "block";
}

/* menu toggle */
/* const toggleButton = document.getElementById("menuToggleButton");
const navList = document.getElementById("navList");

toggleButton.addEventListener("click", () => {
  navList.classList.toggle("active");
}); */

/* cart */
function toggleCart() {
  $("#cart-window").toggleClass("active");
}

/* counter */
let counter = 0;

const counterValue = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");

// To increment the value of counter
incrementBtn.addEventListener("click", () => {
  counter++;
  counterValue.innerHTML = counter;
});

// To decrement the value of counter
decrementBtn.addEventListener("click", () => {
  counter--;
  counterValue.innerHTML = counter;
});
