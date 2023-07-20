# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![desktop screenshot](<images/screenshots/E-commerce product page desktop screenshot.png>)
![lightbox screenshot](<images/screenshots/E-commerce product page lightbox screenshot.png>)
![mobile screenshot](<images/screenshots/E-commerce product page mobile screenshot.png>)
![mobile menu screenshot](<images/screenshots/E-commerce product page mobile menu screenshot.png>)
![mobile cart window screenshot](<images/screenshots/E-commerce product page mobile cart window screenshot.png>)

### Links

- Solution URL: [Solution URL](https://github.com/JaBoe97/ecommerce_product_page)
- Live Site URL: [Live site URL](https://jaboe97.github.io/ecommerce_product_page)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- normalize.css

### What I learned

```css
/* working with z-index */
#cart-window {
  z-index: 1;
}

/* fade effect on pictures */
@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
```

```js
/* media queries in jquery */
if ($(window).width() < 910) {
  $("#dropdown-menu").css("display", "flex");
}

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
```

## Useful resources

- github.com/necolas/normalize.css

## Author

- GitHub - [@JaBoe97](https://github.com/JaBoe97)
- Frontend Mentor - [@JaBoe97](https://www.frontendmentor.io/profile/JaBoe97)
