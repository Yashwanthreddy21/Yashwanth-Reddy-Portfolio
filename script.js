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


