function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";
}

/* WORD COUNTER */
function countWords() {
  let text = document.getElementById("textInput").value;
  let words = text.trim().split(/\s+/).length;
  document.getElementById("wordResult").innerText = "Words: " + words;
}

/* CASE CONVERTER */
function toUpper() {
  let t = document.getElementById("textInput");
  t.value = t.value.toUpperCase();
}

function toLower() {
  let t = document.getElementById("textInput");
  t.value = t.value.toLowerCase();
}

/* PASSWORD */
function generatePassword() {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let pass = "";
  for (let i = 0; i < 8; i++) {
    pass += chars[Math.floor(Math.random() * chars.length)];
  }
  document.getElementById("password").innerText = pass;
}

/* GAME */
let number = Math.floor(Math.random() * 10) + 1;
function guessNumber() {
  let g = document.getElementById("guessInput").value;
  let res = document.getElementById("gameResult");
  if (g == number) {
    res.innerText = "🎉 Correct!";
  } else {
    res.innerText = "❌ Try again!";
  }
}

/* TODO */
function addTodo() {
  let text = document.getElementById("todoInput").value;
  let li = document.createElement("li");
  li.innerText = text;
  document.getElementById("todoList").appendChild(li);
}
