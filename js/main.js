const listaBombe = [];
let punti = 0;
function renderGriglia() {
    const containerGriglia = document.getElementById("containerGriglia");
    const numeroCelle = 8 * 8;


    for (let i = 0; listaBombe.length < 16; i++) {
        const randomNumber = Math.floor(Math.random() * numeroCelle) + 1;
        if (listaBombe.indexOf(randomNumber)) {
            listaBombe.push(randomNumber);
        }
    }


    for (let i = 0; i < numeroCelle; i++) {
        let cella = document.createElement("div");
        cella.classList.add("cella");
        cella.textContent = i + 1;
        cella.dataset.indice = i + 1;
        cella.addEventListener("click", function () {
            const cellIndex = +this.dataset.indice;
            console.log(cellIndex);

            if (listaBombe.includes(cellIndex)) {
                cella.style.backgroundColor = "red";
                alert("hai perso");
                containerGriglia.innerHTML = "";
                renderGriglia();

            } else if (punti == 48) {
                alert("hai vinto");
                containerGriglia.innerHTML = "";
                renderGriglia();
            } else {
                punti = punti + 1;
                cella.style.backgroundColor = "blue";
            }
        });
        containerGriglia.append(cella);

    }

}


renderGriglia();

