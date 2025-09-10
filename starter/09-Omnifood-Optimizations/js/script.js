// console.log("Hello world!");

// const myName = "Denis Vlăsceanu";

// const h1 = document.querySelector(".heading-primary");
// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "#f0f";
//   h1.style.padding = "5rem";
// });
// console.log(h1);

// Make mobile navigation work
const nav_button = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
nav_button.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// Set the current year
const footer_copyright_year = document.querySelector(".year");
const current_year = new Date().getFullYear();
footer_copyright_year.textContent = current_year;

// Smooth scrolling animation
// SCROLL BEHAVIOR DOESN'T WORK FOR PC, WORKS FOR IPHONE
const all_links = document.querySelectorAll("a:link");
all_links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);
    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      // Close the mobile navigation upon clicking/pressing one of its buttons
      if (link.classList.contains("main-nav-link"))
        header.classList.remove("nav-open");
      // Actually scroll
      const target_section = document.querySelector(href);
      target_section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Sticky navigation
const section_hero = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    const body = document.body;
    if (ent.isIntersecting === false) body.classList.add("sticky");
    if (ent.isIntersecting === true) body.classList.remove("sticky");
  },
  {
    // Inside the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(section_hero);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
