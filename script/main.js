const btnNode = document.getElementById("bored__app-btn");
const actionNode = document.getElementById("bored__app-action");
const titleNode = document.getElementById("bored__app-title");
const appNode = document.getElementById("bored__app");

// функции--------------------------------------------------
function getActivity() {
  fetch("https://www.boredapi.com/api/activity/")
    .then((data) => data.json())
    .then((res) => (actionNode.innerHTML = res.activity));
}

function changeAction() {
  titleNode.innerHTML = `Ура, теперь не скучно 🔥`;
  appNode.style.background =
    "linear-gradient(180deg, rgba(0, 176, 28, 0.20) 24.48%, rgba(255, 255, 255, 0.00) 100%)";
  getActivity();
}

// слушатели событий
btnNode.addEventListener("click", changeAction);
