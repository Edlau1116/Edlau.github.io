const taskList = document.querySelector(".taskList");
const addTaskButton = document.querySelector(".addTask");
const dates = document.querySelector("#date");
const taskdata = document.querySelector("#taskdata");
const divEl = document.querySelector(".container");
const timeEl = document.getElementById("count");
timeEl.style.marginLeft = "15%";

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
// setInterval(setDate, 1000);

// const taskList = document.querySelector(".taskList");
// const addTaskButton = document.querySelector(".addTask");
// const dates = document.querySelector("#date");
// const taskdata = document.querySelector("#taskdata");

// const currentDay = new Date().toDateString();

// dates.innerHTML = currentDay;
// console.log(currentDay);

// function addTask() {
//   let num = 0;
//   addTaskButton.addEventListener("click", () => {
//     let enterTask = prompt("Enter a task");
//     num++;

//     const newTask = document.createElement("li");
//     newTask.id = "NewtaskEl";
//     console.log(newTask.id);
//     newTask.innerHTML = `${num} | ${enterTask}`;

//     taskdata.appendChild(newTask);

//     let finishedTask = document.getElementById("NewtaskEl");
//     console.log(finishedTask);
//     finishedTask.addEventListener("click", () => {
//       finishedTask.classList.toggle("finishedTask");
//       // finishedTask.style.textDecoration = "line-through";
//     });
//   });
// }
// addTask();

// num = taskList.childElementCount + 1;
//   const taskInput = document.querySelector(".task");
//   const task = taskInput.value.trim();

//   if (task !== "") {
//     const newTask = document.createElement("li");
//     newTask.id = "NewtaskEl";
//     newTask.innerHTML = `${num} | ${task}`;

//     const removeButton = document.createElement("button");
//     removeButton.id = "removeButton";
//     removeButton.innerText = "Remove";
//     removeButton.addEventListener("click", () => {
//       newTask.remove();
//     });

//     newTask.appendChild(removeButton);
//     taskInput.value = "";
//   }

// const currentMonth = new Date();
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// console.log(months[currentMonth.getMonth()]);
