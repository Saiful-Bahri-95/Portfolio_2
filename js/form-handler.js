function initializeFormHandler() {
  const form = document.getElementById("contactEmail");
  if (!form) return;

  const btn = form.querySelector("button");
  const originalBtnHTML = btn.innerHTML;

  // Inject toast styles once
  if (!document.getElementById('sb-toast-style')) {
    const style = document.createElement('style');
    style.id = 'sb-toast-style';
    style.textContent = `
      .sb-toast {
        position: fixed;
        bottom: 100px;
        right: 30px;
        padding: 14px 20px;
        background: rgba(15, 15, 30, 0.95);
        backdrop-filter: blur(16px);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 14px;
        color: #e8e8f0;
        font-family: 'Space Grotesk', sans-serif;
        font-size: 0.92rem;
        display: flex;
        align-items: center;
        gap: 12px;
        z-index: 10000;
        box-shadow: 0 12px 40px rgba(0,0,0,0.5);
        transform: translateX(120%);
        transition: transform 0.4s cubic-bezier(.2,.8,.2,1);
        max-width: 360px;
      }
      .sb-toast.show { transform: translateX(0); }
      .sb-toast.success { border-color: #00ff88; box-shadow: 0 0 0 1px rgba(0,255,136,0.2), 0 12px 40px rgba(0,0,0,0.5); }
      .sb-toast.error { border-color: #ff5f57; box-shadow: 0 0 0 1px rgba(255,95,87,0.2), 0 12px 40px rgba(0,0,0,0.5); }
      .sb-toast i { font-size: 1.1rem; }
      .sb-toast.success i { color: #00ff88; }
      .sb-toast.error i { color: #ff5f57; }
      @media (max-width: 720px) {
        .sb-toast { bottom: 90px; right: 16px; left: 16px; max-width: none; }
      }
    `;
    document.head.appendChild(style);
  }

  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `sb-toast ${type}`;
    const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation';
    toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${message}</span>`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i><span>Sending...</span>';

    fetch("send-email.php", {
      method: "POST",
      body: new FormData(form)
    })
      .then(response => response.text())
      .then(result => {
        if (result.trim() === "success") {
          form.reset();
          showToast("Message sent! I'll get back to you soon.", 'success');
        } else {
          showToast("Failed to send message. Please try again or email me directly.", 'error');
        }
      })
      .catch(() => {
        showToast("Connection error. Please check your internet and try again.", 'error');
      })
      .finally(() => {
        btn.disabled = false;
        btn.innerHTML = originalBtnHTML;
      });
  });
}
