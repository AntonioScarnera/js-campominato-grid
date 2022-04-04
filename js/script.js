



let selector = document.getElementById("difficulty");
let btn = document.getElementById("btn");

console.log(selector, btn);


function stampareGriglia(numCol, nomeClasse){
    let main = document.getElementById("app");
    main.innerHTML = '';
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    let cols = creaColonne(numCol, nomeClasse);
    row.innerHTML = cols;
    main.append(row);
}
function creaColonne(numerocolonne, classMod){
    let cols = "";
    for (let i = 1; i <= numerocolonne; i++){
        cols +=`
        <div class="mycol ${classMod}">${i}</div>
        `;
    }
    return cols;
}



btn.addEventListener('click', function(){
    
    let flag = selector.value;


    switch(flag){

        case "easy":
        const easycolNumber = 100;
        const easyclassMod = "easy-width";
        stampareGriglia(easycolNumber, easyclassMod);
        let easyCol = document.getElementsByClassName("mycol");
        console.log(easyCol);
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