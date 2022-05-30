
function generaBombe(maxNumber) {

    const listaBombe = [];
    do {
        const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        if (!listaBombe.includes(randomNumber)) {
            listaBombe.push(randomNumber);
        }
    }
    while (listaBombe.length < 16)
    return listaBombe;
}



function generaGriglia() {
    const numeroCelle = 8 * 8;
    let listaBombe = generaBombe(numeroCelle);
    console.log(listaBombe);
    renderGriglia(numeroCelle, listaBombe);
}

function renderGriglia(numeroCelle, listaBombe) {
    const containerGriglia = document.getElementById("containerGriglia");

    for (let i = 0; i < 64; i++) {
        let cella = document.createElement("div");
        cella.classList.add("cella");
        cella.textContent = i + 1;

        cella.addEventListener("click", function () {
            const cellIndex = +this.dataset.indice;
            console.log(cellIndex);
            if (listaBombe.includes(i + 1)) {
                cell.classList.add("bomba");
            }
        });
        containerGriglia.append(cella);
    }

}


renderGriglia();
