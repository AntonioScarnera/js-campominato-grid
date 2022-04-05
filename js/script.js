



let selector = document.getElementById("difficulty");
let btn = document.getElementById("btn");



function stampareGriglia(numerocolonne, nomeClasse){
    let main = document.getElementById("app");
    main.innerHTML = '';
    let row = document.createElement("div");
    row.setAttribute("class", "row");
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
   cols.addEventListener('click', coloraCella)
   return cols;
}

function coloraCella(){
    this.style.backgroundColor = '#6495ed';
    this.classList.remove("pointer");
    this.removeEventListener('click', coloraCella)
}


btn.addEventListener('click', function(){
    
    let flag = selector.value;


    switch(flag){

        case "easy":
            const easycolNumber = 100;
            const easyclassMod = "easy-width";
            stampareGriglia(easycolNumber, easyclassMod);
            let easyCol = document.getElementsByClassName("mycol");
            let test = easyCol;
            console.log(test);
        break;

        case "hard":
            const hardcolNumber = 81;
            const hardclassMod = "hard-width";
            stampareGriglia(hardcolNumber, hardclassMod);
            let hardCol = document.getElementsByClassName("mycol");
            console.log(hardCol);
        break;
        
        case "crazy":
            const crazycolNumber = 49;
            const crazyclassMod = "crazy-width";
            stampareGriglia(crazycolNumber, crazyclassMod);
            let crazyCol = document.getElementsByClassName("mycol");
            console.log(crazyCol);
        break;

    }



})
