/* TODO000000000

1. choose winning nuymber bt 1-100
    generate random number using mathrandom x 100 console log to see if it works

2. player inputs text in input field
https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_input_test

3. player clicks nutton to submit guess
    add event listener to buttons
    
4. IF If the player guesses the winning number, they win! Otherwise, they are allowed to try again.
5. ELSE IF The game should give a hint after each guess, letting them know whether to guess higher or lower as well as how close they are.
6. ELSE After five unsuccessful guesses, the game is over and the player lose*/

//choosing random number 1-100 when page reloads
let winNum = Math.floor(Math.random() * 100);
let tryCount = 0;
let countsAllowed = 5;


//when window loads it will do all things under neath nested in window onload function
window.onload = function () {
  console.log(winNum);

  //place to store input and submit button
  let submitPress = document.getElementById("submitButton");
  //putting the text in the else if statements on lines 36 to 41  it prints them on page in the hint id on html part
  let hintText = document.getElementById("hint");

  //when submit tells us its been clicked, records answer in guess box-acesses input text turns it into number (bc it sthinks it string) and sees if it equals === the winning number.
  //if it does- we win if it doesnt we return the guess number and out that into the first part of the list, clear inpput box 5x
  //declare the inpout text within function
  submitPress.addEventListener("click", function () {
    let savedGuess = document.querySelector(`.guess${tryCount}`);
    //if the try count doesnt exceed counts allowed, add another try
    if (tryCount <= countsAllowed) {
      tryCount++;
      //stores input object(search for the ckass term and bring back whatever was put in there)
      let inputText = document.getElementById("inputText");
      //parseint - u see this string?? can u sgive me number out of it?? ex 20jgheruig returns just 20
      let currentGuess = parseInt(inputText.value);
    
      console.log(currentGuess);
      savedGuess.innerHTML = `${currentGuess}`;

      if (currentGuess > winNum) {
        hintText.innerHTML = "try lower number!";
      } else if (currentGuess < winNum) {
        hintText.innerHTML = "try higher number!";
      } else if (currentGuess === winNum) {
        hintText.innerHTML = "you win!";
      }
    } else hintText.innerHTML = "too many tries, you LOSE!";
  });
};
