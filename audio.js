
  const audio = document.getElementById("bgMusic");
  const btn = document.getElementById("audioBtn");

  btn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      btn.textContent = "Pause Music";
    } else {
      audio.pause();
      btn.textContent = "Play Music";
    }
  });
