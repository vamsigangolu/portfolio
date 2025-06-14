
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");
  // Typewriter effect (one-time, then remove cursor)
const typewriterText = "Vamsi Gangolu";
const typewriterTarget = document.getElementById("typewriter");
let index = 0;

function typeCharacter() {
  if (index < typewriterText.length) {
    typewriterTarget.textContent += typewriterText.charAt(index);
    index++;
    setTimeout(typeCharacter, 100); // typing speed
  } else {
    // Remove blinking cursor after typing is done
    typewriterTarget.classList.remove("blinking-cursor");
  }
}

typeCharacter();

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const promptBlocks = document.querySelectorAll(".prompt-template code");
  promptBlocks.forEach(codeBlock => {
    codeBlock.addEventListener("click", () => {
      const text = codeBlock.textContent;
      navigator.clipboard.writeText(text).then(() => {
        alert("Prompt copied to clipboard!");
      });
    });
  });

  const fadeIns = document.querySelectorAll(".fade-in");
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  fadeIns.forEach(el => fadeObserver.observe(el));
});

// Scroll-triggered fade-in animations
const faders = document.querySelectorAll('.fade-in, .fade-in-heading'); // include headings
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

faders.forEach(fader => observer.observe(fader));


