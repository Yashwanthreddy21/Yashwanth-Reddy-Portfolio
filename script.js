document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMsg").textContent = "📨 Message sent! I’ll get back to you soon.";
  this.reset();
});

const parts = [
  "Graduate Student",
  "ML Developer",
  "Web Enthusiast",
  "Blockchain Explorer"
];

let fullText = "";
let index = 0;
let charIndex = 0;
let typingSpeed = 100;

function typeFullLine() {
  if (index < parts.length) {
    const part = parts[index];
    if (charIndex < part.length) {
      fullText += part[charIndex++];
      document.getElementById("lineTyping").textContent = fullText;
      setTimeout(typeFullLine, typingSpeed);
    } else {
      // Add pipe between segments except the last one
      if (index < parts.length - 1) fullText += " | ";
      index++;
      charIndex = 0;
      setTimeout(typeFullLine, 600); // Pause between segments
    }
  }
}

typeFullLine();
// ScrollSpy
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


const links = document.querySelectorAll(".nav-link");
const indicator = document.querySelector(".nav-indicator");

function updateIndicator(el) {
  const rect = el.getBoundingClientRect();
  indicator.style.width = `${rect.width}px`;
  indicator.style.left = `${el.offsetLeft}px`;
}

links.forEach(link => {
  link.addEventListener("mouseenter", () => updateIndicator(link));
});

// ScrollSpy for indicator movement
window.addEventListener("scroll", () => {
  let currentSection = "";
  document.querySelectorAll("section").forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 120) {
      currentSection = section.getAttribute("id");
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
      updateIndicator(link);
    }
  });
});

// On load – align to current scroll position
window.addEventListener("load", () => {
  const active = document.querySelector(".nav-link.active") || links[0];
  updateIndicator(active);
});


  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});



