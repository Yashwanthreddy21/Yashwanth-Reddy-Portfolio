document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMsg").textContent = "📨 Message sent! I’ll get back to you soon.";
  this.reset();
});

const lines = [
  "Graduate Student",
  "ML Developer",
  "Web Enthusiast",
  "Blockchain Explorer"
];

lines.forEach((text, idx) => {
  setTimeout(() => {
    const lineElement = document.getElementById(`line${idx + 1}`);
    lineElement.textContent = text;
  }, 200 + idx * 1700); // slower pace between lines
});

