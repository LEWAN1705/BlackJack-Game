// getRandomCard()= firstCard;
let cards = []
let sum = 0; 
let hasBlackJack = false ;
let isAlive = false;

let message = "";
let messageEl  = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#card-el")


let player = {
    name: "Per",
    chips: 145
}


let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": $" + player.chips;


function getRandomCard() {
      // if 1     -> return 11
    // if 11-13 -> return 10
    let RandomNumber = Math.floor( Math.random() * 13);
    RandomNumber ++;
    if (RandomNumber > 10){
        return 10;
    }
    else if(RandomNumber === 1){
        return 11;
    }
    else{
        return RandomNumber;
    }
}



function startGame(){
    isAlive = true;
    let firstCard = getRandomCard(); 
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard ;;
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: " ;
    for(i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: "+ sum;


   if (sum <= 20){
        message = "do you want to draw a new card? 🙂";
   }
   else if (sum === 21){
       message = "wohoo! You got BlackJack 😊 "; 
       hasBlackJack = true; 
    }
    // else if (sum > 21){
    //     console.log("You're out of the game! 😭")
    // } 
    else {
        message ="You're out of the game! 😭";
        isAlive = false;
     }
     messageEl.textContent = message; 
}

if(isAlive === true && hasBlackJack === false){}

function newcard(){
    // console.log("Drawing a new card from the deck!");

    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard() ;
        sum += card;
        cards.push(card);
        renderGame()
    }
   
}

