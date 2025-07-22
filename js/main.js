let emojiGrid = document.getElementById("emojiGrid");
let message = document.getElementById("message");
let play_again = document.getElementById("play_again");
let message_timer = document.getElementById("message_timer");
let Start = document.getElementById("Start");
let interval;

Start.addEventListener("click" , function () {
  Start.classList.add("none");
let differentTile = null;
let emojiList = [
  "😐", "😑", "😶", "🙄", "😬", "😕", "😒", "😔", "😟", "😧",
  "😳", "🫤", "🫠", "🥺", "🫣", "😯", "😮", "😲", "😵", "😵‍💫",
  "🤯", "🤐", "😷", "🤢", "🤧", "🫥", "😥", "😓", "😰", "😨",
  "😩", "😫", "😞", "😣", "😖", "😤", "😡", "😠", "😾", "🙁",
  "☹️", "😦", "😧", "😬", "😐", "😑", "😶", "😟", "😕", "😒",
  "😔", "🙃", "🙂", "😯", "😲", "😳", "😰", "😱", "🥶", "🥵",
  "🤕", "🤒", "😷", "😪", "😴", "🫣", "🫤", "🫥", "🤧", "🤢",
  "🤐", "😵", "😮", "😟", "😬", "😤", "😩", "😫", "😞", "😖",
  "😣", "😓", "😥", "😰", "😨", "😱", "😳", "🥺", "😢", "😭",
  "😦", "😧", "😯", "🙁", "☹️", "😒", "😑", "😐", "😶", "🙄"
];

let gameEnded = false;
let similarEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];
let differentEmoji;
do {
  differentEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];
} while (differentEmoji === similarEmoji);
let differentIndex = Math.floor(Math.random() * 120);
for (let i = 0; i < 120; i++) {
  let tile = document.createElement("button");
  tile.classList.add("tile");
  tile.textContent = i === differentIndex ? differentEmoji : similarEmoji;
  if (i === differentIndex) {
    differentTile = tile;
  }
  tile.addEventListener("click", function () {
    if (gameEnded) return;
    if (i === differentIndex) {
      message.textContent = "🎉 Bravo! You found the Different emoji!";
      message.classList.add("win");
      tile.style.border = "3px solid green";
      tile.style.transform = "scale(1.1)";
      gameEnded = true;
      clearInterval(interval);
      message_timer.classList.remove("last-seconds-animation");
    } else {
      message.textContent = "❌ Try again!";
      message.classList.add("lose");
      setTimeout(() => {
        message.classList.remove("lose");
      }, 500);
    }
    play_again.classList.remove("none");
  });

  emojiGrid.appendChild(tile);
}
timer();
})
let timer = () => {
  let counter = 10;

  interval = setInterval(() => {
    message_timer.textContent = `Time Remaining : ${counter}`;
    if (counter === 0) {
      clearInterval(interval);

      document.querySelectorAll(".tile").forEach((tile) => {
        tile.disabled = true;
        tile.style.opacity = "1";
      });
      message_timer.classList.remove("last-seconds-animation");
      message_timer.textContent = "⏰ Time's up!";
      message_timer.style.color = "red";
      play_again.classList.remove("none");
      differentTile.classList.add("highlight-different");
    }
    if (counter == 3) {
      message_timer.classList.add("last-seconds-animation");
    }
    if (counter <= 10) {
      message_timer.classList.add("first-seconds-animation");
    }
    counter--;
  }, 1000);
};




play_again.addEventListener("click", function () {
  window.location.reload();
});
