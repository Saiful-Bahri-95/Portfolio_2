document.addEventListener('DOMContentLoaded', () => {

  /* ================= NAVIGATION ================= */
  // Use event delegation since nav links exist on initial DOM,
  // but section anchors are loaded asynchronously.
  document.addEventListener('click', (e) => {
    const link = e.target.closest('.ul-list li a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    e.preventDefault();
    const targetId = href.substring(1);
    const targetSection = document.getElementById(targetId);
    if (!targetSection) return;

    window.scrollTo({
      top: targetSection.offsetTop - 60,
      behavior: 'smooth'
    });

    document.querySelectorAll('.ul-list li').forEach(li => li.classList.remove('active'));
    link.parentElement.classList.add('active');
  });

  /* ================= SCROLL SPY + BACK TO TOP ================= */
  // Create back-to-top button
  const backToTop = document.createElement('div');
  backToTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  backToTop.id = "back-to-top";
  document.body.appendChild(backToTop);

  backToTop.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );
  backToTop.addEventListener('mouseenter', () => backToTop.style.transform = 'scale(1.1)');
  backToTop.addEventListener('mouseleave', () => backToTop.style.transform = 'scale(1)');

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const sections = document.querySelectorAll('main > div[id]');
      const scrollPos = window.scrollY + 120;

      sections.forEach(section => {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          document.querySelectorAll('.ul-list li').forEach(li => li.classList.remove('active'));
          const activeLink = document.querySelector(`.ul-list li a[href="#${section.id}"]`);
          if (activeLink) activeLink.parentElement.classList.add('active');
        }
      });

      backToTop.style.display = window.scrollY > 500 ? 'flex' : 'none';
      ticking = false;
    });
  });

  /* ================= LOADING SCREEN ================= */
  const loadingScreen = document.getElementById("loading-screen");

  setTimeout(() => {
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      loadingScreen.style.visibility = 'hidden';
      setTimeout(() => loadingScreen.style.display = 'none', 800);
    }
  }, 2200);

});
