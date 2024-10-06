// document.addEventListener("DOMContentLoaded", () => {
  // your code here
document.querySelector("#create-task-form").addEventListener("submit",(event) => {
  event.preventDefault();
  const des=document.getElementById("new-task-description").value;
const tasks=document.getElementById("tasks");
tasks.innerHTML += `<li> ${des} 
<button id="remove">x</button></li>`;
const remove = document.getElementById("remove")
remove.addEventListener("click", (et) => {
  et.target.parentNode.remove()
})





});
 