const IROHA_SEQ = ["イ","ロ","ハ","ニ","ホ","ヘ","ト","チ","リ","ヌ","ル","ヲ","ワ","カ","ヨ","タ","レ","ソ","ツ","ネ","ナ","ラ","ム","ウ","イ","ノ","オ","ク","ヤ","マ","ケ","フ","コ","エ","テ","ア","サ","キ","ユ","メ","ミ","シ","エ","ヒ","モ","セ","ス","ン"];

const MORSE_WABUN = {
  "イ": "・－",
  "ロ": "・－・－",
  "ハ": "－・・・",
  "ニ": "－・－・",
  "ホ": "－・・",
  "ヘ": "・",
  "ト": "・・－・・",
  "チ": "・・－・",
  "リ": "－－・",
  "ヌ": "・・・・",
  "ル": "－・－－・",
  "ヲ": "・－－－",
  "ワ": "－・－",
  "カ": "・－・・",
  "ヨ": "－－",
  "タ": "－・",
  "レ": "－－－",
  "ソ": "－－－・",
  "ツ": "・－－・",
  "ネ": "－－・－",
  "ナ": "・－・",
  "ラ": "・・・",
  "ム": "－",
  "ウ": "・・－",
  "ノ": "・・－－",
  "オ": "・－・・・",
  "ク": "・・・－",
  "ヤ": "・－－",
  "マ": "－・・－",
  "ケ": "－・－－",
  "フ": "－－・・",
  "コ": "－－－－",
  "エ": "－・－－－",
  "テ": "・－・－－",
  "ア": "－－・－－",
  "サ": "－・－・－",
  "キ": "－・－・・",
  "ユ": "－・・－－",
  "メ": "－・・・－",
  "ミ": "・・－・－",
  "シ": "－－・－・",
  "エ": "－・－－－",
  "ヒ": "－－・・－",
  "モ": "－・・－・",
  "セ": "・－－－・",
  "ス": "－－－・－",
  "ン": "・－・－・",
};

const IROHA_INFO = {
  "ア": {"mnemonic":"アーユートコーユー", "kanji":"ああ言うとこう言う"},
  "イ": {"mnemonic":"イトー", "kanji":"伊藤"},
  "ウ": {"mnemonic":"ウタゴー", "kanji":"疑う"},
  "エ": {"mnemonic":"エーゴエービーシー", "kanji":"英語ＡＢＣ"},
  "オ": {"mnemonic":"オモーココロ", "kanji":"思う心"},
  "カ": {"mnemonic":"カトーセキ", "kanji":"下等席"},
  "キ": {"mnemonic":"キーテホーコク", "kanji":"聞いて報告"},
  "ク": {"mnemonic":"クルシソー", "kanji":"苦しそう"},
  "ケ": {"mnemonic":"ケーカリョーコー", "kanji":"経過良好"},
  "コ": {"mnemonic":"コートーコーギョー", "kanji":"高等工業"},
  "サ": {"mnemonic":"サーイコーイコー", "kanji":"さあ行こう行こう"},
  "シ": {"mnemonic":"シュートーナチューイ", "kanji":"周到な注意"},
  "ス": {"mnemonic":"スージュージョーカコー", "kanji":"数十丈下降"},
  "セ": {"mnemonic":"セヒョーリョーコーダ", "kanji":"世評良好だ"},
  "ソ": {"mnemonic":"ソートーコーカ", "kanji":"相当高価"},
  "タ": {"mnemonic":"タール", "kanji":"タール"},
  "チ": {"mnemonic":"チカトーキ", "kanji":"地価騰貴"},
  "ツ": {"mnemonic":"ツゴードーカ", "kanji":"都合どうか"},
  "テ": {"mnemonic":"テスーナホーホー", "kanji":"手数な方法"},
  "ト": {"mnemonic":"トクトーセキ", "kanji":"特等席"},
  "ナ": {"mnemonic":"ナロータ", "kanji":"習うた"},
  "ニ": {"mnemonic":"ニューヒチョーカ", "kanji":"入費超過"},
  "ヌ": {"mnemonic":"ヌリモノ", "kanji":"塗物"},
  "ネ": {"mnemonic":"ネーソーダロー", "kanji":"ねえそうだろう"},
  "ノ": {"mnemonic":"ノギトーゴー", "kanji":"乃木東郷"},
  "ハ": {"mnemonic":"ハーモニカ", "kanji":"ハーモニカ"},
  "ヒ": {"mnemonic":"ヒョーコーソクテー", "kanji":"標高測定"},
  "フ": {"mnemonic":"フートーハル", "kanji":"封筒張る"},
  "ヘ": {"mnemonic":"ヘ", "kanji":"屁"},
  "ホ": {"mnemonic":"ホーコク", "kanji":"報告"},
  "マ": {"mnemonic":"マーマカソー", "kanji":"まあ任そう"},
  "ミ": {"mnemonic":"ミセヨーミヨー", "kanji":"見せよう見よう"},
  "ム": {"mnemonic":"ムー", "kanji":"ムー"},
  "メ": {"mnemonic":"メーゲツダロー", "kanji":"名月だろう"},
  "モ": {"mnemonic":"モーシトコーシ", "kanji":"孟子と孔子"},
  "ヤ": {"mnemonic":"ヤキュージョー", "kanji":"野球場"},
  "ユ": {"mnemonic":"ユーコクユーソー", "kanji":"憂国勇壮"},
  "ヨ": {"mnemonic":"ヨーコー", "kanji":"洋行"},
  "ラ": {"mnemonic":"ラムネ", "kanji":"ラムネ"},
  "リ": {"mnemonic":"リューコーチ", "kanji":"流行地"},
  "ル": {"mnemonic":"ルールシューセース", "kanji":"ルール修正す"},
  "レ": {"mnemonic":"レーソーヨー", "kanji":"礼装用"},
  "ロ": {"mnemonic":"ロジョーホコ－", "kanji":"路上歩行"},
  "ワ": {"mnemonic":"ワートユー", "kanji":"わーと言う"},
  "ヲ": {"mnemonic":"ヲショーショーコー", "kanji":"和尚焼香"},
  "ン": {"mnemonic":"ンメーンメーナ", "kanji":"旨めー旨めーな"},
};

const DOT_THRESHOLD = 0.2; 

let currentIndex = 0;
let currentChar = "";
let correctSignal = "";
let currentSignal = "";
let correctCount = 0;
let missCount = 0;
let gameRunning = false;
let waitingNext = false;

const questionElem = document.getElementById("question");
const signalElem = document.getElementById("signal");
const feedbackElem = document.getElementById("feedback");
const scoreElem = document.getElementById("score");
const startBtn = document.getElementById("startBtn");

const dotBtn = document.getElementById("dotBtn");
const dashBtn = document.getElementById("dashBtn");

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

let oscillator = null;
let gainNode = null;

function startTone() {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  if (oscillator) return;
  oscillator = audioCtx.createOscillator();
  gainNode = audioCtx.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = 700;
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  gainNode.gain.setValueAtTime(0.4, audioCtx.currentTime);
  oscillator.start();
}

function stopTone() {
  if (oscillator) {
    oscillator.stop();
    oscillator.disconnect();
    gainNode.disconnect();
    oscillator = null;
    gainNode = null;
  }
}

function addSymbol(sym) {
  if (!gameRunning || waitingNext) return;
  const tentativeInput = currentSignal + sym;
  if (!correctSignal.startsWith(tentativeInput)) {
    missCount++;
    const info = IROHA_INFO[currentChar] || {};
    const mnemonic = info.mnemonic || "";
    const kanji = info.kanji || "";
    feedbackElem.textContent = `❌ 不正解 \n正解は: ${correctSignal} \n覚え方: ${mnemonic} 漢字: ${kanji}`;
    waitingNext = true;
    updateScore();
    setTimeout(() => {
      waitingNext = false;
      nextQuestion();
    }, 2000);
    return;
  }
  currentSignal = tentativeInput;
  signalElem.textContent = currentSignal;

  if (currentSignal === correctSignal) {
    correctCount++;
    const info = IROHA_INFO[currentChar] || {};
    const mnemonic = info.mnemonic || "";
    const kanji = info.kanji || "";
    feedbackElem.textContent = `✅ 正解！\n覚え方: ${mnemonic} 漢字: ${kanji}`;
    waitingNext = true;
    updateScore();
    setTimeout(() => {
      waitingNext = false;
      nextQuestion();
    }, 2000);
  }
}

function clearInput() {
  if (!gameRunning || waitingNext) return;
  currentSignal = "";
  signalElem.textContent = "";
  feedbackElem.textContent = "";
}

function startGame() {
  if (gameRunning) return;
  gameRunning = true;
  currentIndex = 0;
  correctCount = 0;
  missCount = 0;
  currentSignal = "";
  updateScore();
  nextQuestion();
  feedbackElem.textContent = "";
  startBtn.disabled = true;
}

function endGame() {
  gameRunning = false;
  questionElem.textContent = "ゲーム終了！お疲れ様でした。";
  signalElem.textContent = "";
  feedbackElem.textContent = `正解数: ${correctCount}\nミス数: ${missCount}`;
  startBtn.disabled = false;
}

function nextQuestion() {
  if (!gameRunning || waitingNext) return;
  if (currentIndex >= IROHA_SEQ.length) {
    endGame();
    return;
  }
  currentChar = IROHA_SEQ[currentIndex];
  correctSignal = MORSE_WABUN[currentChar] || "";
  currentIndex++;
  currentSignal = "";
  questionElem.textContent = currentChar;
  signalElem.textContent = "";
  feedbackElem.textContent = "";
  updateScore();
}

function updateScore() {
  scoreElem.textContent = `正解: ${correctCount} ミス: ${missCount} 進捗: ${currentIndex}/${IROHA_SEQ.length}`;
}

startBtn.addEventListener("click", startGame);

dotBtn.addEventListener("click", () => {
  addSymbol("・");
  playClickTone();
});
dashBtn.addEventListener("click", () => {
  addSymbol("－");
  playClickTone();
});

let pressStartTime = null;
let spaceKeyDown = false;

window.addEventListener("keydown", (e) => {
  if (!gameRunning || waitingNext) return;
  if (e.code === "Space" && !spaceKeyDown) {
    e.preventDefault();
    spaceKeyDown = true;
    pressStartTime = performance.now();
    startTone();
  }
});

window.addEventListener("keyup", (e) => {
  if (!gameRunning || waitingNext) return;
  if (e.code === "Space" && spaceKeyDown) {
    e.preventDefault();
    spaceKeyDown = false;
    const pressDuration = (performance.now() - pressStartTime) / 1000;
    pressStartTime = null;
    stopTone();
    if (pressDuration < DOT_THRESHOLD) {
      addSymbol("・");
    } else {
      addSymbol("－");
    }
  }
});

function playClickTone() {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.frequency.value = 700;
  osc.type = 'sine';
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  gain.gain.setValueAtTime(0.4, audioCtx.currentTime);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.1);
  osc.onended = () => {
    gain.disconnect();
    osc.disconnect();
  };
}
