function initializeFormHandler() {
  const form = document.getElementById("contactEmail");
  if (!form) return;

  const btn = form.querySelector("button");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // 🔒 DISABLE BUTTON SAAT KIRIM
    btn.disabled = true;
    btn.innerText = "Sending...";

    fetch("send-email.php", {
      method: "POST",
      body: new FormData(form)
    })
    .then(response => response.text())
    .then(result => {
      if (result.trim() === "success") {

        // ✅ RESET FORM
        form.reset();
        alert("Pesan berhasil dikirim!");

      } else {
        alert("Gagal mengirim pesan:\n" + result);
      }
    })
    .catch(() => {
      alert("Terjadi kesalahan koneksi.");
    })
    .finally(() => {
      // 🔓 AKTIFKAN KEMBALI BUTTON
      btn.disabled = false;
      btn.innerText = "Send Message";
    });
  });
}
