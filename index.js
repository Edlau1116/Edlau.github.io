const taskList = document.querySelector(".taskList");
const addTaskButton = document.querySelector(".addTask");
const dates = document.querySelector("#date");
const taskdata = document.querySelector("#taskdata");
const divEl = document.querySelector(".container");
const timeEl = document.getElementById("count");
const timerEl = document.getElementById("time");
const btnEl = document.querySelector("#btn");
const timeSetEl = document.querySelector("#settimer");
const newsEl = document.querySelector(".news");
const rootEl = document.querySelector(".root");
timeEl.style.marginLeft = "15%";
timeEl.style.fontSize = "60px";
divEl.style.fontSize = "60px";

const currentDay = new Date().toDateString();

dates.innerHTML = currentDay;
console.log(currentDay);

function addTask() {
  let num = 0;
  addTaskButton.addEventListener("click", () => {
    let enterTask = prompt("Enter a task");
    if (enterTask === null) return;
    num++;

    const newTask = document.createElement("li");
    const delTask = document.createElement("button");
    const taskClass = newTask.classList.add("NewtaskEl");

    console.log(taskClass);
    const taskId = `task-${num}`; // Generate a unique id for the task

    // console.log(taskId);
    newTask.id = taskId;
    // console.log(newTask.id);
    // newTask.innerHTML = `${num}  ${enterTask}`;
    newTask.innerHTML = `<h5 id="mun">${num}.</h5>  <h5>${enterTask}</h5>`;

    taskdata.appendChild(newTask);
    taskdata.appendChild(delTask);

    let finishedTask = document.getElementById(taskId);
    // console.log(finishedTask);
    finishedTask.addEventListener("click", () => {
      finishedTask.classList.toggle("finishedTask");
    });
    delTask.classList.add("delTask");

    delTask.innerHTML = "Delete";
    delTask.addEventListener("click", () => {
      finishedTask.remove();
      delTask.remove();
      num--;
    });
  });
}
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();
  timeEl.innerHTML = `${hours} : ${mins} : ${seconds}  `;
  // console.log(hours, mins, seconds);
}
setInterval(setDate, 1000);
addTask();

async function news() {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=hk&apiKey=28ea0b454b5c421b84a911144c1d18d4"
  );
  const newsResult = await response.json();

  const { articles } = newsResult;
  articles.forEach((article) => {
    rootEl.innerHTML += `</br><h4>${article.author}${article.title}</h4></br>${article.publishedAt}</br>`;
  });
}
news();

newsEl.addEventListener("click", () => {
  rootEl.classList.toggle("active");
});

// let minuteSet = prompt("Enter a time in minutes");
// let minute = parseInt(minuteSet);
// let minOverSixty = minute > 60 ? minute % 60 : minute;
// let second = parseInt(minute * 60); //second = 60 + second % 60;
// // let second = 0;
// // minute > 0 && (second = 0 + (second % 60));
// // let second = 60 + (secondBasic % 60);
// let hour = parseInt(minute / 60);

// console.log(second, minOverSixty, hour);

// let secondInput = prompt("Enter a time in seconds");
// let second = parseInt(secondInput);
// let min = parseInt(second / 60);
// let hour = parseInt(min / 60);

// let secondInput = prompt("Enter a time in seconds");
let secondInput = 60;
let second = parseInt(secondInput);

let min = Math.floor(second / 60); // Calculate minutes and round down using Math.floor
let hour = Math.floor(min / 60); // Calculate hours and round down using Math.floor

min = min % 60; // Calculate remaining minutes after subtracting hours

console.log(hour, min, second % 60); // Output the result

//output 0 2 120, if second = 120  should be print 0 2 0
//input second = 120, output 0 2 0 fix it first
// function setTimer() {
//   if (second > 0) {
//     second--;
//     if (second === 0 && minOverSixty > 0) {
//       second = 60;
//       minOverSixty--;
//     }
//     if (minOverSixty === 0 && hour > 0) {
//       minOverSixty = 60;
//       hour--;
//     }
//   }
//   // timerEl.innerHTML = `${hour} : ${minOverSixty} : ${second}`;
//   console.log(second, minOverSixty, hour);
// }
// setInterval(setTimer, 1000);
