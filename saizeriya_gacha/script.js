const gachaBtn = document.getElementById("gachaBtn");
const resultDiv = document.getElementById("result");

let menuData = [];

fetch("saizeriya-menus/saizeriya.json")
  .then(res => {
    if (!res.ok) throw new Error("json load failed");
    return res.json();
  })
  .then(data => {
    menuData = data.menus;   // ← ★ここが重要
    console.log("読み込み完了:", menuData.length);
  })
  .catch(err => {
    resultDiv.innerHTML = "❌ メニューの読み込みに失敗しました";
    console.error(err);
  });

gachaBtn.addEventListener("click", () => {
  if (menuData.length === 0) {
    resultDiv.innerHTML = "メニューを読み込み中です…";
    return;
  }

  const item = menuData[Math.floor(Math.random() * menuData.length)];

  resultDiv.innerHTML = `
    <div style="text-align:center;">
      <div style="font-size:48px;">${item.icon}</div>
      <h3>${item.name}</h3>
      <p>${item.category} / ${item.genre}</p>
      <hr>
      <p>💴 税込価格：<b>${item.price_with_tax} 円</b></p>
      <p>🔥 カロリー：${item.calorie} kcal</p>
      <p>🧂 塩分：${item.salt} g</p>
    </div>
  `;
});
