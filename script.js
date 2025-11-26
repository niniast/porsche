// საბოლოო დრო — შეცვალე შენი თარიღით და საათით
const countdownDate = new Date("2025-12-31T23:59:59").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    document.getElementById("timer").innerHTML = "Time is up!";
    return;
  }

  // გამოთვლები
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // ფორმატირება (თუ <10, წინ "0" ეწერება)
  const formatted =
    (days > 0 ? days + "d " : "") +
    String(hours).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");

  document.getElementById("timer").innerHTML = formatted;
}

// ყოველ 1 წამში განახლება
setInterval(updateTimer, 1000);
