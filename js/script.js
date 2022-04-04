



let selector = document.getElementById("difficulty");
let btn = document.getElementById("btn");

console.log(selector, btn);


function stampareGriglia(){
    const colNumber = 100;
    let main = document.getElementById("app");
    main.innerHTML = '';
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    let cols = creaColonne(colNumber);
    row.innerHTML = cols;
    main.append(row);
}
function creaColonne(numerocolonne){
    let cols = "";
    for (let i = 1; i <= numerocolonne; i++){
        cols +=`
        <div class="mycol easy-width">${i}</div>
        `;
    }
    return cols;
}



btn.addEventListener('click', function(){
    
    let flag = selector.value;


    switch(flag){

        case "easy": stampareGriglia();
        let easyCol = document.querySelectorAll(".mycol");
        console.log(easyCol);
        break;

        case "hard": console.log(flag);
        break;
        
        case "crazy": console.log(flag);
        break;

    }



})