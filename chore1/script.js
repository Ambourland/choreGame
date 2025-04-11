let stars = 0;

function completeChore(name, starValue) {
  stars += starValue;
  document.querySelector('.star-count').textContent = stars;
  alert(`You completed "${name}" and earned ${starValue}⭐!`);
}

function getPowerUp() {
  const powerUps = [
    "🧙 Wizard's Double: Double stars for today's chores!",
    "⏱ Speed Run: Finish a chore in 10 mins for a bonus star!",
    "🎩 Magic Trade: Trade a chore with someone else!",
    "🛡 Shield: Skip a chore today – no stars lost!",
    "💥 Mega Boost: Instantly gain 5 stars!"
  ];
  const randomIndex = Math.floor(Math.random() * powerUps.length);
  const result = powerUps[randomIndex];

  if (result.includes("5 stars")) stars += 5;
  document.querySelector('.star-count').textContent = stars;
  document.getElementById('powerup-result').textContent = result;
}