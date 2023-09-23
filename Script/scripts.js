const releaseDate = new Date("2023-09-26T12:00:00"); // Fecha de entrega (por ejemplo, el 26 de septiembre de 2023 a las 12:00 PM)
const count_down = document.getElementById("counter-container");
const countdownTimer = setInterval(timer, 1000);

function timer() {
  const now = new Date();
  const timeLeft = releaseDate - now;

  if (timeLeft <= 0) {
    clearInterval(countdownTimer);
    document.getElementById('showTitle').style.display = 'none';
    document.getElementById('showSubtitle').style.display = 'none';
    count_down.innerHTML = `<h2 class="Principal-Tititle">In a few minutes, the site will be released. Thank you for waiting.</h2>`;
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  let countdownText = '';
  
  if (days > 0) {
    countdownText = `
      <div><h2 class="Secundary-Tititle">${pad(days)}</h2><p class="Secundary-text-paragraph">Days</p></div>
      <div><h2 class="Secundary-Tititle">${pad(hours)}</h2><p class="Secundary-text-paragraph">Hours</p></div>
      <div><h2 class="Secundary-Tititle">${pad(minutes)}</h2><p class="Secundary-text-paragraph">Minutes</p></div>
      <div><h2 class="Secundary-Tititle">${pad(seconds)}</h2><p class="Secundary-text-paragraph">Seconds</p></div>
    `;
  } else {
    countdownText = `
      <div><h2 class="Secundary-Tititle">${pad(hours)}</h2><p class="Secundary-text-paragraph">Hours</p></div>
      <div><h2 class="Secundary-Tititle">${pad(minutes)}</h2><p class="Secundary-text-paragraph">Minutes</p></div>
      <div><h2 class="Secundary-Tititle">${pad(seconds)}</h2><p class="Secundary-text-paragraph">Seconds</p></div>
    `;
  }

  count_down.innerHTML = countdownText;
}

function pad(n) {
  return n < 10 ? "0" + n : n;
}

timer();
