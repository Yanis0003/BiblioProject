let trigger = document.querySelector("#news-trigger");
let aside = document.querySelector("aside");
let close = document.querySelector("#close");



function showNew(){
    aside.style.right = "25px";
    trigger.style.opacity = "0";
}

function closeNews (){
aside.style.right = "-33%";
trigger.style.opacity = "1";
}
/* remettre les elements de style aux valeurs de départ*/

trigger.addEventListener("click", showNew);

close.addEventListener("click", closeNews);

