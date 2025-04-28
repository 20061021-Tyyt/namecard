document.addEventListener("DOMContentLoaded", function () {
  const skillData = {
    courses: ["玩貓戰", "看vtuber看動畫", "強項寫物理"],
    skills: [
      { name: "求助人問題解決", level: 95 },
      { name: "寫寫物理", level: 90 },
      { name: "學習狀況", level: 40 }
    ]
  };

  const imageUrls = [
    "https://media1.tenor.com/m/9R9NPE8Qi5wAAAAd/%E5%B8%B8%E9%97%87%E3%83%88%E3%83%AF-%E3%83%9B%E3%83%AD%E3%83%A9%E3%82%A4%E3%83%96.gif",
    "https://i.pinimg.com/originals/0e/b7/98/0eb79898902ebd45e7248bc7c20be53c.gif",
    "https://i.makeagif.com/media/2-03-2023/ijZlxS.gif"
  ];

  const coursesSection = document.getElementById("courses");
  const skillsSection = document.getElementById("skills");

  // 生成學習內容
  coursesSection.innerHTML = `
    <h4>學習內容</h4>
    <ul>
      ${skillData.courses.map((course) => `<li>✅ ${course}</li>`).join("")}
    </ul>
  `;

  // 生成技能條
  skillsSection.innerHTML = `
    <h4>技能條</h4>
    ${skillData.skills.map(skill => `
      <div class="skill-bar">
        <label>${skill.name}</label>
        <div class="bar">
          <div class="level" style="width: ${skill.level}%"></div>
        </div>
      </div>
    `).join("")}
  `;

  const squareImages = document.querySelectorAll(".square-image");

  function initializeImages() {
    squareImages.forEach((img, index) => {
      img.style.backgroundImage = `url('${imageUrls[index]}')`;
    });
  }

  function shuffleImages() {
    let shuffledUrls = [...imageUrls].sort(() => Math.random() - 0.5);
    squareImages.forEach((img, index) => {
      img.style.backgroundImage = `url('${shuffledUrls[index]}')`;
    });
  }

  document.querySelector(".square-images").addEventListener("click", shuffleImages);

  initializeImages();
});