const texts = [
  "Security Consultant",
  "VAPT Specialist",
  "Offensive Security Enthusiast"
];
let index = 0;
let charIndex = 0;
const typewriter = document.getElementById('typewriter');

function typeEffect() {
  if (charIndex < texts[index].length) {
    typewriter.textContent += texts[index].charAt(charIndex);
    typewriter.setAttribute("data-text", typewriter.textContent);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      typewriter.textContent = "";
      typewriter.setAttribute("data-text", "");
      charIndex = 0;
      index = (index + 1) % texts.length;
      typeEffect();
    }, 2000);
  }
}

typeEffect();
