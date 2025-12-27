document.addEventListener("DOMContentLoaded", () => {

  const weddingDate = new Date("2026-02-06T00:00:00").getTime();
  const countdown = document.getElementById("countdown");

/* ===== GALLERY LIGHTBOX ===== */
function openLightbox(src){
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = src;
}

function closeLightbox(){
  document.getElementById("lightbox").style.display = "none";
}

/* ===== RSVP POPUP ===== */
function showRSVP(){
  setTimeout(()=>{
    document.getElementById("rsvp-popup").style.display = "flex";
  }, 800);
}

function closeRSVP(){
  document.getElementById("rsvp-popup").style.display = "none";
}


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
