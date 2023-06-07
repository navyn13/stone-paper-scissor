var computerChoiceDisplay = document.getElementById('computerChoice')
var userChoiceDisplay = document.getElementById('userChoice')
var resultDisplay = document.getElementById('result')
var possibleChoices = document.querySelectorAll('button')
let userChoice;

// possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
//     userChoice= e.target.innerHTML
//     userChoiceDisplay.innerHTML = userChoice 

// }))
    
for( var i=0; i<possibleChoices.length; i++){
    possibleChoices[i].addEventListener('click', function(e){
        userChoice=e.target.innerHTML;
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
    })
}
function generateComputerChoice(){
    var randomNumber= Math.floor(Math.random()*3 ) + 1;
    if(randomNumber===1){
        computerChoice =  'Stone🗿'
    }
    if(randomNumber===2){
        computerChoice =  'Paper📔'
    }
    if(randomNumber===3){
        computerChoice =  'Scissor✂️'
    }
    computerChoiceDisplay.innerHTML = computerChoice
    if(userChoice=== 'Stone🗿'){
        if(computerChoice==='Paper📔'){
            resultDisplay.innerHTML = 'You Lost😑'
        }
        else if(computerChoice==='Scissor✂️'){
            resultDisplay.innerHTML = 'You Won🎉'
        }
        else{
            resultDisplay.innerHTML = 'DRAW'
        }

    }

if(userChoice=== 'Paper📔'){
    if(computerChoice==='Scissor✂️'){
        resultDisplay.innerHTML = 'You Lost😑'
    }
    else if(computerChoice==='Stone🗿'){
        resultDisplay.innerHTML = 'You Won🎉'
    }
    else{
        resultDisplay.innerHTML = 'DRAW'
    }
}
if(userChoice=== 'Scissor✂️'){
    if(computerChoice==='Stone🗿'){
        resultDisplay.innerHTML = 'You Lost😑'
    }
    else if(computerChoice==='Paper📔'){
        resultDisplay.innerHTML = 'You Won🎉'
    }
    else{
        resultDisplay.innerHTML = 'DRAW'
    }
}
}
