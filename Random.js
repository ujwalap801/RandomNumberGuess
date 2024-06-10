let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");

let randomNumber = Math.ceil(Math.random()*100);
console.log(randomNumber);


function checkGuess() {
 let guessNumber = parseInt(userInput.value);
  if(randomNumber == guessNumber)
    {
        gameResult.textContent ="Congrulations you are right!";
          gameResult.style.backgroundColor ="green"
    }
    else if(guessNumber < randomNumber)
        {
            gameResult.textContent ="too smaller number";
            gameResult.style.backgroundColor ="#1e217c"
        }
        else{
            gameResult.textContent ="too higer number";
              gameResult.style.backgroundColor ="#1e217c"
        }
}