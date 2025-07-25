document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMsg").textContent = "📨 Message sent! I’ll get back to you soon.";
  this.reset();
});

const words = ["Graduate Student", "ML Developer", "Web Enthusiast", "Blockchain Explorer"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function type() {
  currentWord = words[i];
  let display = isDeleting ? currentWord.substring(0, j--) : currentWord.substring(0, j++);

  document.getElementById("typing").textContent = display;

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, 100);
}
type();
