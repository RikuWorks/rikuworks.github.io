document.addEventListener("DOMContentLoaded", () => {
  const signal = document.getElementById("signal");
  const feedback = document.getElementById("feedback");

  signal.addEventListener("paste", (event) => {
    event.preventDefault();

    const clipboard = event.clipboardData;
    const html = clipboard.getData("text/html");
    const text = clipboard.getData("text/plain");

    // 表示
    signal.innerHTML = html || text;

    // HTMLにfont-familyが含まれる場合
    if (html) {
      const fontMatch = html.match(/font-family:([^;\"]+)/i);
      if (fontMatch) {
        feedback.textContent = "検出されたフォント: " + fontMatch[1].trim();
        return;
      }
    }

    // 文字幅で推測する候補フォント
    const candidates = [
      "Arial", "Helvetica", "Times New Roman", "Georgia",
      "Meiryo", "Yu Gothic", "Noto Sans JP", "Noto Serif JP"
    ];

    const tester = document.createElement("span");
    tester.style.visibility = "hidden";
    tester.style.fontSize = "32px";
    tester.textContent = text;
    document.body.appendChild(tester);

    let bestFont = "不明";
    let bestWidth = Infinity;

    candidates.forEach(font => {
      tester.style.fontFamily = font;
      const w = tester.offsetWidth;
      if (w < bestWidth) {
        bestWidth = w;
        bestFont = font;
      }
    });

    document.body.removeChild(tester);

    feedback.textContent = `推定フォント: ${bestFont}`;
  });
});
