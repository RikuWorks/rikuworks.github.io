document.getElementById("startBtn").addEventListener("click", () => {
  const input = document.getElementById("signal").innerText.trim();
  const feedback = document.getElementById("feedback");

  feedback.innerHTML = "";

  const match = input.match(/\/item\/(m\d+)/);
  if (!match) {
    feedback.innerText = "正しい商品ページURLを入力してください．";
    return;
  }

  const itemId = match[1];

  for (let i = 1; i <= 20; i++) {
    const img = document.createElement("img");
    img.src = `https://static.mercdn.net/item/detail/orig/photos/${itemId}_${i}.jpg`;

    img.onerror = () => img.remove();
    feedback.appendChild(img);
  }
});
