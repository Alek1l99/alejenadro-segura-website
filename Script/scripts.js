const numVersion = "Beta 0.0.025";
let version = (document.getElementById("version").innerHTML = numVersion);
let Seconds = 812100;
let count_down = document.getElementById("counter-container");
let contentBody = document.getElementById("counter-container");
let countdownTimer;
function timer() {
  let days = Math.floor(Seconds / 24 / 60 / 60);
  let hoursLeft = Math.floor(Seconds - (days * 86400));
  let hours = Math.floor(hoursLeft / 3600);
  let minutesLeft = Math.floor((hoursLeft) - (hours*3600));
  let minutes     = Math.floor(minutesLeft/60);
  let remainingSeconds = Seconds % 60;

  let contdown_complete =`<div><h2 class="Secundary-Tititle">${pad(
    days
  )}</h2><p class="Secundary-text-paragraph">Days</p></div><div><h2 class="Secundary-Tititle">${pad(
    hours
  )}</h2><p class="Secundary-text-paragraph">Hour</p></div><div><h2 class="Secundary-Tititle">${pad(
    minutes
  )}</h2><p class="Secundary-text-paragraph">Minutes</p></div>`;
  let contdownOnlySec=`<div><h2 class="Secundary-Tititle">${pad(
    remainingSeconds
  )}</h2><p class="Secundary-text-paragraph">Seconds</p></div>`;
  let countdown_ends = `<h2 class="Principal-Tititle">In a few minutes you will be released</h2>`

  function pad(n) {
    return n < 10 ? "0" + n : n;
  }

  if (days == 00 && hours == 00 && minutes == 00) {
    count_down.innerHTML = contdownOnlySec ;
  } else {
    count_down.innerHTML = contdown_complete;
  }
  if (Seconds == 0) {
    clearInterval(countdownTimer);
    document.getElementById('showTitle').style.display = 'none';
    document.getElementById('showSubtitle').style.display = 'none';
    count_down.innerHTML = countdown_ends;
  } else {
    Seconds--;
  }
}
timer();
countdownTimer = setInterval("timer()", 1000);
