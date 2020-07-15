const animateCSS = (element, animation, prefix = "animate__") =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);
  });

/* -  - - ------------------------------ - - - - */
/* -  - - -----  ticky navigation ------ - - - - */
/* -  - - ------------------------------ - - - - */

window.onscroll = () => {
  myFunction();
  featureAnimated();
  iPhoneAnimated();
  citiesAnimated();
  planAnimated();
};

// Get the navbar
let navbar = document.getElementsByTagName("nav")[0];
// Get the offset position of the navbar
let wayPoint =
  (document.getElementsByClassName("js--section-features")[0].offsetTop * 91) /
  100;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
const myFunction = () => {
  if (window.pageYOffset >= wayPoint) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

/* https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView */
const hungryClick = (e) => {
  e.preventDefault();
  let section = document.querySelector(".js--section-plans");
  section.scrollIntoView({ block: "center", behavior: "smooth" });
};

let featureWayPoint =
  (document.querySelector(".js--wp-1").offsetTop * 50) / 100;

let iPhoneWayPoint = (document.querySelector(".js--wp-2").offsetTop * 50) / 100;

let citiesWayPoint = (document.querySelector(".js--wp-3").offsetTop * 80) / 100;

let planWayPoint = (document.querySelector(".js--wp-4").offsetTop * 90) / 100;

const featureAnimated = () => {
  if (window.pageYOffset >= featureWayPoint) {
    animateCSS(".js--wp-1", "fadeIn");
  }
};

const iPhoneAnimated = () => {
  if (window.pageYOffset >= iPhoneWayPoint) {
    animateCSS(".js--wp-2", "fadeInUp");
  }
};

const citiesAnimated = () => {
  if (window.pageYOffset >= citiesWayPoint) {
    animateCSS(".js--wp-3", "fadeIn");
  }
};

const planAnimated = () => {
  if (window.pageYOffset >= planWayPoint) {
    animateCSS(".js--wp-4", "pulse");
  }
};

const slideDown = (elem) => {
  if (
    elem.style.height <= 0 ||
    (elem.style.height.split("px") && elem.style.height.split("px")[0] <= 0)
  ) {
    elem.style.height = `${elem.scrollHeight}px`;
    return;
  }

  if (elem.style.height.split("px") && elem.style.height.split("px")[0] > 0) {
    elem.style.height = 0;
    return;
  }
};

const mobileNavClick = (e) => {
  e.preventDefault();
  let nav = document.querySelector(".main-nav");
  let icon = document.querySelector("body > header > nav > div > a > ion-icon");
  if (icon.name === "menu-outline") {
    icon.name = "close-outline";
  } else {
    icon.name = "menu-outline";
  }
  slideDown(nav);
};
