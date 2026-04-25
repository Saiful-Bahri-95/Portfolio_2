/* ================= TYPING EFFECT ================= */
function initTypingEffect() {
  const typingElement = document.querySelector('.info-home .typed');
  if (!typingElement) return;

  const words = [
    "Frontend Developer",
    "UI/UX Designer",
    "Web Designer",
    "Flutter Developer",
    "Problem Solver"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 90;

  function type() {
    const currentWord = words[wordIndex];
    typingElement.innerHTML =
      currentWord.substring(0, charIndex) + '<span class="cursor">|</span>';

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, typingSpeed / 2);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        wordIndex = (wordIndex + 1) % words.length;
      }
      setTimeout(type, isDeleting ? 1500 : 400);
    }
  }
  type();
}
