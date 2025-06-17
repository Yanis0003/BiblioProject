/*

while(userNumber != targetNumber) {
    
    if ( userNumber > targetNumber){
        alert('raté trop grand');
    } else {
        alert ("c'est trop petit");
    }

    userNumber = prompt('devinez un nombre entre 1 et 100');
}

alert('gg wp');*/

let trigger = document.querySelector("#send-button");
let numberZone = document.querySelector("#user-number");
let displayZone = document.querySelector("#game-display");

let targetNumber = Math.floor(Math.random()*100)+1;

console.log(trigger, numberZone,displayZone,targetNumber);

function compareNumber() {
    /*console.log("ca marche");*/
    let userNumber = numberZone.value;
    let result;  
    /*console.log(userNumber);*/
    if(userNumber==targetNumber){
        result='gagné'}
    else if ( userNumber > targetNumber){
        result='raté trop grand';
    } else {
        result="c'est trop petit";
    }
    
    let resultZone = document.createElement('p');
    resultZone.innerHTML = result;
    resultZone.style.padding = "10px"
    resultZone.classList.add('result-line');


    /*console.log(resultZone);*/

    displayZone.appendChild(resultZone)
}

trigger.addEventListener('click',compareNumber);






/*
let firstname = prompt('Quel est votre prénom ?');
let lastname = prompt('Quel est votre Nom ?');

alert(`Bonjour ${firstname} ${lastname} ! `);
*/
