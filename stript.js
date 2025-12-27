const weddingDate = new Date("Feb 6, 2026 00:00:00").getTime();

setInterval(()=>{
  const now = new Date().getTime();
  const diff = weddingDate - now;

  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const m = Math.floor((diff % (1000*60*60)) / (1000*60));
  const s = Math.floor((diff % (1000*60)) / 1000);

  document.getElementById("countdown").innerHTML =
  `${d} Days ${h} Hours ${m} Minutes ${s} Seconds`;
},1000);
