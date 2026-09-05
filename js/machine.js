/* Slot machine


 what is a slot machine?
    -A slot machine is a device that people give a bet or token to pull a lever and some wheels spin and you get a random result.
        -This is a particular implementation of a slot machine.

    -A function of your input (bet) to an output (Your potential winnings)

 How do slot machines work? 
        -Input
            -Bet (what is a bet)
                -Money
                -Risk
        -Process
            -Sets of values (Reels)
                -Randomly shuffled, and a value selected for each.
            -Shows our results
            -Decision (what is the decision)
               -Win/Lose
               -How do you decide what a win is?
        -Output
            -Money
                -This could be positive or zero
            -On a win
                - You get back you input + some winnings
                    -Winnings depoend on the optino that was picked by all reels
                    -
            -On a loss 
                - You lose your input

 Rules of a slot machine
        -Input (bet)
            -Needs to be positive
            -Between a minimum and maximum bet amount
            -Needs to be equal to or smaller than your current ballance or "wallet"
                -Can't bet more than you have
        -Process 
            -Reels need to randomize
            -Should give us one of our 5 options
            -Check if all reel value are the same
                -IF yes 
                    -Multiply the input by the winning factor based on the seleceted option
                        -Winning factor is the amount of money you get on top of your input back
                -IF no 
                    -They get nothing back
                    -They lose their input(bet) and get no winnings

        -Output 
            -The amount returned from the "process"
        -This loop back to the beginning 

    */




const minBet = 5;
const maxBet = 50;
let wallet = 500;
const symbols = ['🍌','🍉','🍓','🍒','💎'];
let smallBet = document.querySelector('#smallBet');
let bigBet = document.querySelector('#bigBet');




function runSlotMachine(bet) {
    let reels = document.querySelectorAll('.reels');
    let message = document.getElementById('resultMessage');

    if (wallet < bet) {
        message.innerText = 'Get your money up'
        document.getElementById('img').style.display = 'block';
    } else {
        wallet -= bet
        let firstReel = symbols[Math.floor(Math.random() * symbols.length)]
        let secondReel = symbols[Math.floor(Math.random() * symbols.length)]
        let thirdReel = symbols[Math.floor(Math.random() * symbols.length)]

        console.log(reels)
        reels[0].innerText = firstReel
        reels[1].innerText = secondReel
        reels[2].innerText = thirdReel

        if (firstReel === secondReel && secondReel === thirdReel) {
            message.innerText = 'You Won!!'
            let winnings = bet * 10
            wallet += winnings
        } else {
            message.innerText = 'You lost, try again'
        }
        document.querySelector('#wallet').innerText = wallet
    }
    
}


smallBet.addEventListener('click', function(){
    runSlotMachine(minBet)
})

bigBet.addEventListener('click', function(){
    runSlotMachine(maxBet)
})
