/* slider */
let slideIndex = 1;

$(document).ready(function () {
  slideIndex = 1;
  showDivs(slideIndex);
});
function plusDivs(n) {
  showDivs((slideIndex += n));
}
function lightboxPlusDivs(n) {
  slideIndex += n;
  let slideCount = document.getElementsByClassName("slides").length;
  if (slideIndex > slideCount) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slideCount;
  }
  currentDiv(slideIndex);
}

function currentDiv(n) {
  showDivs((slideIndex = n));
  /* thumbnail active border */
  $(".thumbnail-active").removeClass("thumbnail-active");
  $(".lightbox-thumbnail-active").removeClass("lightbox-thumbnail-active");
  $("#thumbnail-container").children()[n - 1].classList.add("thumbnail-active");
  /* Same as last row, but formatter splits it into two on save and breaks it
  --> split it up manually */
  let x = $("#lightbox-thumbnail-container").children();
  x[n - 1].classList.add("lightbox-thumbnail-active");
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("slides");
  let x2 = document.getElementsByClassName("lightbox-slides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    x2[i].style.display = "none";
  }

  x[slideIndex - 1].style.display = "block";
  x2[slideIndex - 1].style.display = "block";
}

/* counter */
let counter = 0;

// To increment the value of counter
function incrementCounter() {
  counter++;
  $("#counter-value").text(String(counter));
}

// To decrement the value of counter
function decrementCounter() {
  counter--;
  if (counter < 0) {
    counter = 0;
  }
  $("#counter-value").text(String(counter));
}

/* cart Button */
function toggleCart() {
  $("#cart-window").toggleClass("displayed");
  if ($(window).width() < 910) {
    closeMenu();
  }
}

/* delete cart items */
function deleteCart() {
  $("#cart-div").remove();
  $("#empty-cart-placeholder").css("display", "block");
  $("#checkout-button").removeClass("checkout-button-active");
  counter = 0;
  $("#counter-value").text(String(counter));
  $("#cart-counter-bubble").remove();
}

/* Add to cart button */
function addToCart() {
  $("#cart-div").remove();
  $("#cart-counter-bubble").remove();
  if (counter > 0) {
    $("#cart-window").addClass("displayed");
    $("#empty-cart-placeholder").css("display", "none");
    $("#checkout-button").addClass("checkout-button-active");
    const cartImage =
      '<img class="cart-image round-corners" src="images/image-product-1.jpg" alt="product picture" />';
    let cartText =
      '<div class="cart-text">Fall Limited Edition Sneakers $125.00 x &nbsp;' +
      counter +
      '<span class="cart-counter">' +
      "&nbsp; &nbsp;" +
      '<span class="sum">$' +
      counter * 125 +
      ".00";
    "</span>" + "</span>" + "</div>";
    const cartDelete =
      '<button class="delete-button" onclick="deleteCart()"><svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs> <path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/> </defs> <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" /></svg></button>';
    $("#checkout-button").before('<div id="cart-div" class="cart-div"></div>');
    $("#cart-div").append(cartImage).append(cartText).append(cartDelete);

    /* cart counter bubble */
    $("#cart-button").before(
      '<div id="cart-counter-bubble" class="cart-counter-bubble">' +
        counter +
        "</div>"
    );
  } else {
    $("#empty-cart-placeholder").css("display", "block");
    $("#checkout-button").removeClass("checkout-button-active");
  }
}

/* mobile menu open*/
function openMenu() {
  $("#cart-window").removeClass("displayed");
  if ($(window).width() < 910) {
    $("#dropdown-menu").css("display", "flex");
  }
}

/* mobile menu toggle close*/
function closeMenu() {
  $("#dropdown-menu").css("display", "none");
}

/* lightbox toggle open */
function openLightbox() {
  if (window.screen.width > 768) {
    $("#lightbox-container").css("display", "block");
  }
}

/* lightbox toggle close */
function closeLightbox() {
  $("#lightbox-container").css("display", "none");
}
