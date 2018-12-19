//
// function diceRoll(){
//
// }

let button = document.querySelector('.roll-button').addEventListener('click', function(){
  let randomNumber1 = Math.floor((Math.random() * 6) + 1);
  let randomNumber2 = Math.floor((Math.random() * 6) + 1);
  let dieOne = document.querySelector('.die-one');
  let dieTwo = document.querySelector('.die-two');
  let title = document.querySelector('.title');

  if (randomNumber1 == 1){
    dieOne.setAttribute('src', 'images/dice1.png');
  } else if (randomNumber1 == 2){
    dieOne.setAttribute('src', 'images/dice2.png');
  } else if (randomNumber1 == 3){
    dieOne.setAttribute('src', 'images/dice3.png');
  } else if (randomNumber1 == 4){
    dieOne.setAttribute('src', 'images/dice4.png');
  } else if (randomNumber1 == 5){
    dieOne.setAttribute('src', 'images/dice5.png');
  } else if (randomNumber1 == 6){
    dieOne.setAttribute('src', 'images/dice6.png');
  }

  if (randomNumber2 == 1){
    dieTwo.setAttribute('src', 'images/dice1.png');
  } else if (randomNumber2 == 2){
    dieTwo.setAttribute('src', 'images/dice2.png');
  } else if (randomNumber2 == 3){
    dieTwo.setAttribute('src', 'images/dice3.png');
  } else if (randomNumber2 == 4){
    dieTwo.setAttribute('src', 'images/dice4.png');
  } else if (randomNumber2 == 5){
    dieTwo.setAttribute('src', 'images/dice5.png');
  } else if (randomNumber2 == 6){
    dieTwo.setAttribute('src', 'images/dice6.png');
  }

  if (randomNumber1 > randomNumber2){
    title.innerText = "Player One wins!";
  } else if (randomNumber1 < randomNumber2){
    title.innerText = "Player Two wins!";
  } else {
    title.innerText = "Draw!";
  }

});
