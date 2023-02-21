"use strict";
console.log("connected");
const img = Array.from(document.querySelectorAll(".ts"));
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const video = document.querySelector("video");
const pause = document.querySelector(".pause");
const play = document.querySelector(".play");
//nav
const navShort = document.querySelector(".navShort");
const navClose = document.querySelector(".navClose");
const navList2 = document.querySelector(".navList2");
console.log(img);
//login inputs
const btn = document.querySelector(".btn");
const userName = document.getElementById("name");
const email = document.getElementById("inputEmail4");
const mobile = document.getElementById("mobile");
const address = document.getElementById("address");
const city = document.getElementById("city");
const premium = document.getElementById("premium");
const formDetails = document.querySelector(".formDetails");
const inputs = Array.from(document.querySelectorAll("input"));
console.log(inputs);
const error = document.querySelector(".error");
const formSubmitt = document.querySelector(".formSubmitt");
//
//nav function for mobile devices
navShort.addEventListener("click", function (e) {
  console.log("nav short btn clicked");
  console.log(navList);
  navList2.classList.remove("hidden");
  navClose.classList.remove("hidden");
  navShort.classList.add("hidden");
});
navClose.addEventListener("click", function () {
  console.log("nav short btn clicked");
  navList2.classList.add("hidden");
  navShort.classList.remove("hidden");
  navClose.classList.add("hidden");
});
///
let render = function () {
  formDetails.classList.add("hidden");
  formSubmitt.classList.remove("hidden");
  formSubmitt.innerHTML = "";
  formSubmitt.innerHTML = `<p>Thanks for selecting the premium <br><span class="highlight" style="font-size:2rem">←${String(
    userName.value
  ).toUpperCase()}→</span><br>will be contacting you shortly</p>`;
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(
    userName.value,
    email.value,
    mobile.value,
    address.value,
    city.value,
    premium.value
  );
  if (
    email.value != "" &&
    mobile.value != "" &&
    address.value != "" &&
    city.value != "" &&
    premium.value != ""
  ) {
    render();
    const timeout1 = setTimeout(function () {
      email.value =
        mobile.value =
        address.value =
        city.value =
        premium.value =
          "";
    }, 1000);
    timeout1;
  } else {
    inputs.forEach((x) => x.classList.add("error"));
  }
  const timeout2 = setTimeout(function () {
    inputs.forEach((y) => y.classList.remove("error"));
  }, 1000);
  timeout2;
});

let counter = 0;
let maxCounter = img.length - 1;
console.log(maxCounter);

const loop = function (counter) {
  img.forEach((x, y) => {
    console.log(x, y);
    x.style.transform = `translateX(${100 * (y - counter)}%)`;
  });
};
/////initalizations
let PageInit = function () {
  loop(counter);
  previous.style.opacity = 0;
};
PageInit();
//////////
console.log(`half of the array : ${counter / 2}`);
let nextSlide = function () {
  if (counter < maxCounter) {
    counter++;
  }
  // else {
  //   next.style.opacity = 0;
  //   // counter = 0;
  // }
  console.log(`${counter}👈`);
  console.log("next button clicked");
  loop(counter);
};
let previousSlide = function () {
  if (counter > 0) {
    counter--;
  }
  // else if (counter === 0) {
  //   // counter = maxCounter;
  //   previous.style.opacity = 0;
  // }

  console.log(`${counter}👈`);
  console.log("previous button clicked");
  loop(counter);
};
//actions
next.addEventListener("click", function () {
  previous.style.opacity = 0;
  next.style.opacity = 1;
  if (counter == maxCounter - 1) {
    next.style.opacity = 0;
    previous.style.opacity = 1;
  }
  nextSlide();
});
previous.addEventListener("click", function () {
  previous.style.opacity = 1;
  next.style.opacity = 0;
  if (counter == 1) {
    previous.style.opacity = 0;
    next.style.opacity = 1;
  }
  previousSlide();
});
// document.addEventListener("keydown", function (e) {
//   e.preventDefault();
//   console.log(e);
//   if (e.key == "ArrowRight") {
//     nextSlide();
//   } else if (e.key == "ArrowLeft") {
//     previousSlide();
//   }
// });
// smooth scrolling
const allLinks = document.querySelectorAll("a");
console.log(allLinks);
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);
    //for scroll
    if (href === "#")
      window.scrollTo({
        top: 0,
        behaviour: "smooth",
      });
  });
});
// sticky nav
const sectionHeroEl = document.querySelector(".heroSection");
const featureSection = document.querySelector(".featureSection");
const featureSectionImage2 = document.querySelector(".fs-container-s1-image2");
const featureSectionImage3 = document.querySelector(".fs-container-s1-image3");
const featureSectionImage4 = document.querySelector(".fs-container-s1-image4");
const mobileNav = document.querySelector(".mobileNav");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      mobileNav.style.opacity = 1;
    }

    if (ent.isIntersecting === true) {
      mobileNav.style.opacity = 0;
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-20px",
  }
);
obs.observe(sectionHeroEl);
//trial of data-src image
const cardIimages = document.querySelectorAll(".card-image");
const fsS2Image = document.querySelector(".fs-container-s2-image");
const imgTargets = Array.from(document.querySelectorAll("img[data-src]"));
console.log(imgTargets);
//
const obs2 = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent.target);
    if (ent.isIntersecting === false) {
      featureSectionImage2.classList.remove("animation2");
      featureSectionImage3.classList.remove("animation3");
      featureSectionImage4.classList.remove("animation4");
      imgTargets.forEach((img) => (img.src = img.src));

      cardIimages.forEach((cardImage) =>
        cardImage.classList.remove("lazy-img")
      );
      fsS2Image.classList.add("lazy-img");
    }
    if (ent.isIntersecting === true) {
      featureSectionImage2.classList.add("animation2");
      featureSectionImage3.classList.add("animation3");
      featureSectionImage4.classList.add("animation4");
      imgTargets.forEach((img) => (img.src = img.dataset.src));

      cardIimages.forEach((cardImage) => cardImage.classList.add("lazy-img"));
      fsS2Image.classList.remove("lazy-img");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);
obs2.observe(featureSection);
