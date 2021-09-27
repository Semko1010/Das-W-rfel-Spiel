//variablen
var button =document.querySelector(".btn");
const würfelZahl = [1,2,3,4,5,6,7,8,9,10,11];
const input = document.querySelector(".textfield");
var newVersuche = document.querySelector(".newVersuche");
var punkteDiv = document.querySelector(".punkte");
var punkteNew = document.querySelector(".punkteNew");
//var versuche = 0;
var highscore = document.querySelector(".highscoreNew");
var punkt = localStorage.getItem("score");
var refreshBtn = document.querySelector(".refresh");
var zurück = document.querySelector(".zurücksetzen");

//eventlistener
button.addEventListener("click", enter)
refreshBtn.addEventListener("click", refresh);
zurück.addEventListener("click", setzen);
//function


function setzen(){
localStorage.setItem("score",0);
window.location.reload(true);
}

function refresh(){
    punkteDiv.innerHTML = 0;
    newVersuche.innerHTML = 0;
    button.disabled = false;
    document.getElementById("btn").innerText= "Würfeln";
    document.getElementById("btn").style.backgroundColor = "white";
    window.location.reload(true);
}


function enter(){
 
 newVersuche.textContent = parseInt(newVersuche.textContent)+1;


newZahl = Math.floor(Math.random()*würfelZahl.length);

var audio = new Audio('audio.mp3');
audio.play();

//if function
if(newZahl ==0){
    document.getElementById("packet").setAttribute("src", "bild1.png");
    punkteDiv.textContent = parseInt(punkteDiv.textContent) + 1;
    //highscore.textContent = parseInt(highscore.textContent) + 1;
}

if(newZahl ==1){
    document.getElementById("packet").setAttribute("src", "bild2.png");
    punkteDiv.textContent = parseInt(punkteDiv.textContent) + 2;
    //highscore.textContent = parseInt(highscore.textContent) + 2;
}

if(newZahl ==2){
    document.getElementById("packet").setAttribute("src", "bild3.png");
    punkteDiv.textContent = parseInt(punkteDiv.textContent) + 3;
    //highscore.textContent = parseInt(highscore.textContent) + 3;
}

if(newZahl ==3){
    document.getElementById("packet").setAttribute("src", "bild4.png");
    punkteDiv.textContent = parseInt(punkteDiv.textContent) + 4;
   // highscore.textContent = parseInt(highscore.textContent) + 4;
}

if(newZahl ==4){
    document.getElementById("packet").setAttribute("src", "bild5.png");
    punkteDiv.textContent = parseInt(punkteDiv.textContent) + 5;
    //highscore.textContent = parseInt(highscore.textContent) + 5;

}

if(newZahl ==5){
    document.getElementById("packet").setAttribute("src", "bild6.png");
    punkteDiv.textContent = parseInt(punkteDiv.textContent) + 6;
    //highscore.textContent = parseInt(highscore.textContent) + 6;
}


if(newZahl ==6){
    document.getElementById("packet").setAttribute("src", "bild1.png");
    punkteDiv.textContent = parseInt(punkteDiv.textContent) + 1;
    //highscore.textContent = parseInt(highscore.textContent) + 1;
}
if(newZahl ==7){
    document.getElementById("packet").setAttribute("src", "bild2.png");
    punkteDiv.textContent = parseInt(punkteDiv.textContent) + 2;
    //highscore.textContent = parseInt(highscore.textContent) + 2;

}

if(newZahl ==8){

    document.getElementById("packet").setAttribute("src", "bild3.png");
    punkteDiv.textContent = parseInt(punkteDiv.textContent) + 3;
    //highscore.textContent = parseInt(highscore.textContent) + 3;
}

if(newZahl ==9){
    document.getElementById("packet").setAttribute("src", "bild4.png");
    punkteDiv.textContent = parseInt(punkteDiv.textContent) + 4;
    //highscore.textContent = parseInt(highscore.textContent) + 4;
}

if(newZahl ==10){
    document.getElementById("packet").setAttribute("src", "bild5.png");
    punkteDiv.textContent = parseInt(punkteDiv.textContent) + 5;
    //highscore.textContent = parseInt(highscore.textContent) + 5;
}
if(newZahl ==11){
    document.getElementById("packet").setAttribute("src", "bild6.png");
    punkteDiv.textContent = parseInt(punkteDiv.textContent) + 6;
   // highscore.textContent = parseInt(highscore.textContent) + 6;
}

//Versuche function
if(newVersuche.textContent ==25){
    document.getElementById("btn").innerText= "FERTIG";
    button.classList.add("btnNew");

    button.disabled= true;
    
    if (punkt <= punkteDiv.textContent){
        localStorage.setItem("score", punkteDiv.textContent);
        highscore.textContent = punkteDiv.textContent;
    }
    
    
}




}




highscore.textContent = punkt;