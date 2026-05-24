// ---------- TO DO LIST ----------
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function saveTasks() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
  taskList.innerHTML =
    localStorage.getItem("tasks") || "";
}

function addTask() {
  if (taskInput.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = taskInput.value;

  li.onclick = () => {
    li.remove();
    saveTasks();
  };

  taskList.appendChild(li);

  taskInput.value = "";
  saveTasks();
}

loadTasks();

// ---------- POMODORO TIMER ----------
let timeLeft = 1500;
let timer;

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  document.getElementById("timer")
    .textContent =
    `${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;
}

function startTimer() {
  clearInterval(timer);

  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimer();
    } else {
      clearInterval(timer);
      alert("Pomodoro complete!");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 1500;
  updateTimer();
}

updateTimer();

// ---------- STREAK ----------
let streak =
  localStorage.getItem("streak") || 0;

document.getElementById(
  "streakCount"
).textContent = `${streak} Days`;

function increaseStreak() {
  streak++;
  localStorage.setItem(
    "streak",
    streak
  );

  document.getElementById(
    "streakCount"
  ).textContent = `${streak} Days`;
}
