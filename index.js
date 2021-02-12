
const h2 = document.querySelector("h2");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const today = new Date().getTime();
  const gap = xmasDay - today;
  const days = Math.ceil(gap / (1000 * 60 * 60 * 24));
  const hours = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.ceil((gap % (1000 * 60)) / 1000);

  h2.innerText = `${days}일 ${hours < 10 ? `0${hours}` : hours}시간 ${
    minutes < 10 ? `0${minutes}` : minutes
  }분 ${seconds < 10 ? `0${seconds}` : seconds}초`;
}

function init() {
  setInterval(getTime, 1000);
}
init();