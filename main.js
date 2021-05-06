const display = document.getElementById("display");
const number = document.getElementById("number");
const touchButton = document.getElementById("touch-button");

let count = 0;

touchButton.onclick = function () {
  count += 1;
  number.textContent = count;
};

if (number >= 100) {
  display.textContent = "家族！！";
} else if (number >= 80) {
  display.textContent = "神友！！";
} else if (number >= 60) {
  display.textContent = "親友！！";
} else if (number >= 40) {
  display.textContent = "友達以上恋人未満！！";
} else if (number >= 20) {
  display.textContent = "俺らズッ友だね！！";
} else if (number >= 10) {
  display.textContent = "楽しいね！！";
} else if (number >= 1) {
  display.textContent = "ありがとう！！";
}
