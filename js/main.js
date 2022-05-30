const containerGriglia = document.getElementById("containerGriglia");

function generateRandomNumbers(min, max) {

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    return result;
}

function generateUniqueRandomNumbers(min, max, listaNumeriGiaGenerati) {
    let numeroRandom;
    do {

        numeroRandom = generateRandomNumbers(min, max);
    } while (listaNumeriGiaGenerati.includes(numeroRandom));

    return numeroRandom;
}
const numeriGenerati = [];
let bombeGenerate = [];

function generaBombe() {
    let numeroRandom;
    do {
        numeroRandom = generateUniqueRandomNumbers(1, 64, numeriGenerati);
    } while (bombeGenerate.includes(numeroRandom));
    bombeGenerate.push(numeroRandom);

}
let c = 0;

for (let i = 0; i < 64; i++) {
    const randomNumber = generateUniqueRandomNumbers(1, 64, numeriGenerati);
    numeriGenerati.push(randomNumber);
    generaBombe();
    if (bombeGenerate.includes(randomNumber)) {
        c++;
    }
    let cella = document.createElement("div");
    cella.classList.add("cella");
    cella.innerHTML = `<span>${randomNumber}</span>`;
    containerGriglia.append(cella);
    cella.addEventListener("click", function () {

        cella.style.backgroundColor = "blue";


    })
}