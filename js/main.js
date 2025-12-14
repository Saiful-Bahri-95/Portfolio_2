document.addEventListener('DOMContentLoaded', () => {

  /* ================= NAVIGATION ================= */
  const navLinks = document.querySelectorAll('.ul-list li a');
  const sections = document.querySelectorAll('section');

  function removeActive() {
    navLinks.forEach(link => link.parentElement.classList.remove('active'));
  }

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth'
      });

      removeActive();
      link.parentElement.classList.add('active');
    });
  });

  /* ================= SCROLL REVEAL ================= */
  const revealElements = document.querySelectorAll(
    '.home-container, .about-container, .projects-container, .services-container, .contact-content'
  );
  revealElements.forEach(el => el.classList.add('reveal'));

  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        removeActive();
        const activeLink = document.querySelector(
          `.ul-list li a[href="#${section.id}"]`
        );
        if (activeLink) activeLink.parentElement.classList.add('active');
      }
    });

    revealElements.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 150) {
        el.classList.add('active-reveal');
      }
    });

    backToTop.style.display = window.scrollY > 500 ? 'flex' : 'none';
  });

  /* ================= BACK TO TOP ================= */
  const backToTop = document.createElement('div');
  backToTop.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
  backToTop.id = "back-to-top";
  document.body.appendChild(backToTop);

  backToTop.style.cssText = `
    position: fixed;
    bottom: 40px;
    right: 40px;
    background: #474af0;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1000;
    transition: transform 0.3s ease;
  `;

  backToTop.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );
  backToTop.addEventListener('mouseenter', () => backToTop.style.transform = 'scale(1.2)');
  backToTop.addEventListener('mouseleave', () => backToTop.style.transform = 'scale(1)');

  /* ================= CARD HOVER ================= */
  const cards = document.querySelectorAll('.project-card, .c1, .service-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () =>
      card.style.transform = 'translateY(-8px) scale(1.07)'
    )
    card.addEventListener('mouseleave', () =>
      card.style.transform = 'translateY(0) scale(1)'
    );
  });

  /* ================= LOADING SCREEN ================= */
  const loadingText = document.getElementById("loading-text");
  const mainIcon = document.querySelector(".main-icon");
  const subIcons = document.querySelectorAll(".sub-icons i");
  const designerText = document.getElementById("designer-text");
  const mainPage = document.getElementById("main-page");
  const loadingScreen = document.getElementById("loading-screen");

  function showElement(el, delay = 0) {
    if (!el) return;
    setTimeout(() => {
      el.classList.remove("hidden");
      el.classList.add("fall");
    }, delay);
  }

  showElement(loadingText, 0);
  showElement(mainIcon, 800);
  subIcons.forEach((icon, i) => showElement(icon, 1600 + i * 400));
  showElement(designerText, 2800);

  setTimeout(() => {
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      setTimeout(() => loadingScreen.style.display = 'none', 500);
    }
    if (mainPage) mainPage.classList.add("visible");
  }, 4000);

});
