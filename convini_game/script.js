// =====================
// ユーティリティ
// =====================
function getItems() {
  const ids = ["item1","item2","item3","item4","item5","item6"];
  return ids.map(id => document.getElementById(id).value.trim());
}

function rollDice() {
  // 1〜6
  return Math.floor(Math.random() * 6) + 1;
}

function escapeHtml(s) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// =====================
// DOM
// =====================
const startBtn = document.getElementById("startBtn");
const feedback = document.getElementById("feedback");
const tweetBtn = document.getElementById("tweetBtn");
const treatEmptyAsLose = document.getElementById("treatEmptyAsLose");

// 直近の結果をツイート用に保持
let lastTweetText = "";

// =====================
// ガチャ本体
// =====================
function runDiceGacha() {
  const items = getItems();
  const dice = rollDice();          // 1〜6
  const picked = items[dice - 1];   // 該当スロット

  const isEmpty = picked.length === 0;
  const loseMode = treatEmptyAsLose.checked;

  // 表示用HTML
  let resultHtml = `
    <div style="text-align:center;">
      <div style="font-size:56px;">🎲</div>
      <h3>出目：<b>${dice}</b></h3>
  `;

  // ツイート文（プレーンテキスト）を作る
  // ※ハッシュタグは好きに変えてOK
  if (isEmpty && loseMode) {
    resultHtml += `<p style="font-size:18px;">結果：<b>ハズレ</b>（空欄）</p>`;
    lastTweetText = `🎲 コンビニゲーム：サイコロ商品ガチャ\n出目：${dice}\n結果：ハズレ（空欄）\n#コンビニゲーム #サイコロ`;
  } else {
    const shown = picked.length ? picked : "（空欄）";
    resultHtml += `<p style="font-size:18px;">選ばれた商品：<b>${escapeHtml(shown)}</b></p>`;
    lastTweetText = `🎲 コンビニゲーム：サイコロ商品ガチャ\n出目：${dice}\n商品：${shown}\n#コンビニゲーム #サイコロ`;
  }

  resultHtml += `</div>`;

  // 画面に反映
  feedback.innerHTML = resultHtml;

  // ツイートボタン表示
  tweetBtn.style.display = "inline-block";
}

// =====================
// イベント
// =====================
startBtn.addEventListener("click", () => {
  runDiceGacha();
});

tweetBtn.addEventListener("click", () => {
  if (!lastTweetText) return;

  // X (Twitter) の投稿画面へ（URLエンコード必須）
  const url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(lastTweetText);

  // 新しいタブで開く
  window.open(url, "_blank", "noopener,noreferrer");
});
