// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Navbar background on scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("bg-gray-900", window.scrollY > 50);
  navbar.classList.toggle("shadow-lg", window.scrollY > 50);
});

// Hamburger menu
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close menu when link clicked
mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// Typing effect
const textArray = [
  "MCA Student",
  "Front-End Developer",
  "C Programmer"
];

let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const eraseSpeed = 60;
const delayBetweenTexts = 1500;

const typingElement = document.getElementById("typing-text");

function typeText() {
  if (charIndex < textArray[textIndex].length) {
    typingElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, delayBetweenTexts);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typingElement.textContent =
      textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, eraseSpeed);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeText, typingSpeed);
  }
}

// Start typing effect after page loads
document.addEventListener("DOMContentLoaded", typeText);

//navbarfunctionality
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

  let currentSection = "";

  function setActiveLink() {
    navLinks.forEach(link => {
      link.classList.remove("text-cyan-400", "after:w-full");

      if (
        currentSection &&
        currentSection !== "home" &&
        link.getAttribute("href") === `#${currentSection}`
      ) {
        link.classList.add("text-cyan-400", "after:w-full");
      }
    });
  }

  // 🔹 Scroll spy
  window.addEventListener("scroll", () => {
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    setActiveLink();
  });

  // 🔹 Hover behavior (THIS is the change you want)
  navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
      // hide current active underline
      navLinks.forEach(l =>
        l.classList.remove("text-cyan-400", "after:w-full")
      );
    });

    link.addEventListener("mouseleave", () => {
      // restore scroll-based active link
      setActiveLink();
  });
});

//scroll-to-top button
   (function() {
  const scrollBtn = document.getElementById("scrollTopBtn");
  const aboutSection = document.getElementById("about");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // About section 10% visible → show button
        scrollBtn.classList.remove("hidden");
      } else if (window.scrollY < aboutSection.offsetTop) {
        // Still in Home section → hide button
        scrollBtn.classList.add("hidden");
      }
      // Otherwise (after About), button stays visible
    });
  }, { threshold: 0.1 });

  observer.observe(aboutSection);
})();










