document.addEventListener("DOMContentLoaded", () => {

  const weddingDate = new Date("2026-02-06T00:00:00").getTime();
  const countdown = document.getElementById("countdown");

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = weddingDate - now;

    if (diff <= 0) {
      countdown.innerHTML = "💍 We Are Married 💍";
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    countdown.innerHTML = `
      <div class="time-box">${d}<span>Days</span></div>
      <div class="time-box">${h}<span>Hours</span></div>
      <div class="time-box">${m}<span>Minutes</span></div>
      <div class="time-box">${s}<span>Seconds</span></div>
    `;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
