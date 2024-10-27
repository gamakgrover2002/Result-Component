const data = [
  {
    title: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
    colorText: "red",
    backgroundColor: "#fdfcf5",
  },
  {
    title: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
    colorText: "yellow",
    backgroundColor: "#fbfdef",
  },
  {
    title: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
    colorText: "green",
    backgroundColor: "#f2fdf9",
  },

  {
    title: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
    colorText: "blue",
    backgroundColor: "#f3f3fd",
  },
];

const statisticsSection = document.getElementsByClassName("stats")[0];
console.log(statisticsSection);

data.forEach((e) => {
  const section = document.createElement("div");
  section.className = "section";
  section.innerHTML = `
  <div >
  <div class="stats-icon">
<img src="${e.icon}" alt="${e.icon}">
    <p class="stats">${e.title}</p></div>
    <p class="stats-score">${e.score}/100</p>
  </div>
`;
  section.style.color = e.colorText;
  section.style.backgroundColor = e.backgroundColor;
  statisticsSection.appendChild(section);
});
