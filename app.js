let body = document.getElementById("app");

const choices = {
  rock: { loseTo: "paper", winTo: "scissors" },
  paper: { loseTo: "scissors", winTo: "rock" },
  scissors: { loseTo: "rock", winTo: "paper" },
};

function handleClick(element) {
  const keys = Object.keys(choices);
  let player = element.value;

  const button = document.getElementsByTagName("button");

  Array.from(button).forEach((x) => {
    x.style.background = "rgb(222, 222, 222)";
  });

  element.style.background = "green";

  let ai = keys[Math.floor(Math.random() * 3)];

  const ai_button = document.getElementsByClassName("ai_button");
  Array.from(ai_button).forEach((x)=>{
    if(x.value == ai){
        x.style.background = "red";
    }
  })

  const winner = getWinner(player, ai);
  if (winner != "draw") {
    document.getElementById("result").innerHTML = `<h2> ${winner} WINS </h2>`;
  } else {
    document.getElementById("result").innerHTML = `<h2>DRAW </h2>`;
  }
}

function getWinner(x, y) {
  if (choices[x].loseTo == y) {
    return "AI";
  }
  if (choices[x].winTo == y) {
    return "YOU";
  }
  return "draw";
}
