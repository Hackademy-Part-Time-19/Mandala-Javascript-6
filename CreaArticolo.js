function stampaParagrafo() {

    let Titolo = document.getElementById("Titolo").value;
    let Paragrafo = document.getElementById("Paragrafo").value;

    console.log += `<div class="DivArticoli"><div class="DivH2"><h2>${Titolo}</h2></div><div class="DivP"><p>${Paragrafo}</p></div></div>`;
}

document.getElementById("Bottone").addEventListener("click", stampaParagrafo())