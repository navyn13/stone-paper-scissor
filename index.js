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
    })
}