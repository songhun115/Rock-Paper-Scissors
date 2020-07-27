const user__rock = document.querySelector(".rock");
const user__paper = document.querySelector(".paper");
const user__scissors = document.querySelector(".scissors");
const Who = document.querySelector(".winer");

function game(user__number, computer__number) {
  if (user__number === 1) {
    if (computer__number === 2) {
      alert("졌다..");
    } else if (computer__number === 3) {
      alert("이겼다!!");
      winer.innerText = `승자는${user__number}`;
    } else {
      alert("무승부군");
    }
  }
  if (user__number === 2) {
    if (computer__number === 3) {
      alert("졌다..");
    } else if (computer__number === 1) {
      alert("이겼다!!");
    } else {
      alert("무승부군");
    }
  }
  if (user__number === 3) {
    if (computer__number === 1) {
      alert("졌다..");
    } else if (computer__number === 2) {
      alert("이겼다!!");
    } else {
      alert("무승부군");
    }
  }
}

function add(user__number) {
  let computer__number = Math.floor(Math.random() * 3 + 1);
  game(user__number, computer__number);
}
