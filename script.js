
const timeElement = document.querySelector('.time');

function updateTime() {
  timeElement.textContent = Date.now();
}

updateTime();

setInterval(updateTime, 1000);
