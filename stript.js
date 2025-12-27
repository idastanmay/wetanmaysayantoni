document.addEventListener("DOMContentLoaded", function () {

  const weddingDate = new Date("2026-02-06T00:00:00").getTime();

  const countdownEl = document.getElementById("countdown");

  setInterval(() => {
    const now = new Date().getTime();
    const diff = weddingDate - now;

    if (diff < 0) {
      countdownEl.innerHTML = "💍 We are Married 💍";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.innerHTML = `
      <div class="time-box">${days}<span>Days</span></div>
      <div class="time-box">${hours}<span>Hours</span></div>
      <div class="time-box">${minutes}<span>Minutes</span></div>
      <div class="time-box">${seconds}<span>Seconds</span></div>
    `;
  }, 1000);

});
