

//utility

function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const BOMB_NUMBER = 16;
const bombs = [];
let max_attempt;
let attemps = 0;

//main

let selector = document.getElementById("difficulty");
let btn = document.getElementById("btn");


function stampareGriglia(numerocolonne, nomeClasse){
    let main = document.getElementById("app");
    main.innerHTML = '';
    let row = document.createElement("div");
    row.setAttribute("class", "row justify-content-center align-items-center align-content-center");
    for(let i = 1; i <= numerocolonne; i++){
        let cols = creaColonne(nomeClasse);
        cols.innerHTML = i;
        row.append(cols);
    }
    main.append(row);
}
function creaColonne(classMod){

   let cols = document.createElement("div");
   cols.setAttribute("class", "mycol pointer");
   cols.classList.add(classMod);
   cols.addEventListener('click', coloraCella);
   return cols;
}
function coloraCella(){

    let num = parseInt(this.innerText);
    attemps++;
    if(bombs.includes(num)){
        this.style.backgroundColor = '#B70000';
        this.innerHTML = `<img src="img/bomb.png">`
        gameover();
    }else{
        this.style.backgroundColor = '#6495ed';
    }
    this.classList.remove("pointer");
    this.removeEventListener('click', coloraCella)
}
function generateBombs(colNumber){

    max_attempt = colNumber - BOMB_NUMBER;
    while(bombs.length < BOMB_NUMBER){
        let bombNumber = getRandomNumber(1, colNumber); 
        if(!bombs.includes(bombNumber)){
            bombs.push(bombNumber);
        }
    }
    console.log(bombs);
}
function gameover(){

}

btn.addEventListener('click', function(){
    
    let flag = selector.value;


    switch(flag){

        case "easy":
            const easycolNumber = 100;
            const easyclassMod = "easy-width";
            stampareGriglia(easycolNumber, easyclassMod);
            generateBombs(easycolNumber);
        break;

        case "hard":
            const hardcolNumber = 81;
            const hardclassMod = "hard-width";
            stampareGriglia(hardcolNumber, hardclassMod);
            generateBombs(hardcolNumber);
        break;
        
        case "crazy":
            const crazycolNumber = 49;
            const crazyclassMod = "crazy-width";
            stampareGriglia(crazycolNumber, crazyclassMod);
            generateBombs(crazycolNumber);
        break;

    }



})
