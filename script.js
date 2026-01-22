const decideBtn = document.getElementById("decideBtn");
const result = document.getElementById("result");

const outcomes = [
  "🐛 It's a bug.",
  "✨ It's a feature.",
  "👀 That's a you problem.",
  "💻 Works on my machine.",
  "🙄 Seems like the error is you.",
  "😒 Ugh, what?",
  "😑 Why are you here again?",
  "🥰 Aw, are you in trouble?",
  "What's up with kids these days? In my days we had... zzz...💤"
];

const weights = [40, 35, 20, 5, 55, 45, 54, 55, 29];

function weightedRandom(items, weights) {
  const total = weights.reduce((a, b) => a + b, 0);
  let rand = Math.random() * total;

  for (let i = 0; i < items.length; i++) {
    if (rand < weights[i]) return items[i];
    rand -= weights[i];
  }
}

decideBtn.addEventListener("click", () => {
  result.classList.remove("show");
  result.classList.add("hidden");

  setTimeout(() => {
    result.textContent = weightedRandom(outcomes, weights);
    result.classList.remove("hidden");
    result.classList.add("show");
  }, 300);
});
