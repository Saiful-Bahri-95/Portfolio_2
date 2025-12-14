/* ================= TYPING EFFECT ================= */
  function initTypingEffect() {
    const typingElement = document.querySelector('.info-home h3');
    if (typingElement) {
      const words = [
        "Frontend Developer",
        "UI/UX Designer",
        "Web Enthusiast",
        "Flutter Developer"
      ];
  
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typingSpeed = 100;
  
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
          setTimeout(type, 1000);
        }
      }
  
      type();
    }
  }