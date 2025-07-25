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
const navLinks = document.querySelectorAll(".nav-link");
const navIndicator = document.querySelector(".nav-indicator");

function setIndicator(el) {
  const parent = el.parentElement;
  const offsetLeft = el.offsetLeft;
  const width = el.offsetWidth;

  navIndicator.style.left = `${offsetLeft}px`;
  navIndicator.style.width = `${width}px`;
}

navLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    setIndicator(link);
  });
});

window.addEventListener("scroll", () => {
  let currentSection = "";
  document.querySelectorAll("section").forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 120) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
      setIndicator(link);
    }
  });
});

// Init on load
window.addEventListener("load", () => {
  const active = document.querySelector(".nav-link.active") || navLinks[0];
  setIndicator(active);
});




