let targetNumber = 12;

let userNumber = prompt('devinez un nombre entre 1 et 100 :');

while(userNumber != targetNumber) {
    
    if ( userNumber > targetNumber){
        alert('raté trop grand');
    } else {
        alert ("c'est trop petit");
    }

    userNumber = prompt('devinez un nombre entre 1 et 100');
}

alert('gg wp');

    








/*
let firstname = prompt('Quel est votre prénom ?');
let lastname = prompt('Quel est votre Nom ?');

alert(`Bonjour ${firstname} ${lastname} ! `);
*/