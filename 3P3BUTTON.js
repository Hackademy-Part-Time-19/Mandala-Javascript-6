function colorerandomico() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function cambiacoloredeltesto() {
    let paragrafo1 =document.getElementById(`Paragrafo1`);
    let paragrafo2 =document.getElementById(`Paragrafo2`);
    let paragrafo3 =document.getElementById(`Paragrafo3`);

    let colore1 = colorerandomico();
    let colore2 = colorerandomico();
    let colore3 = colorerandomico();

    paragrafo1.style.color = colore1;
    paragrafo2.style.color = colore2;
    paragrafo3.style.color = colore3;
}

document.getElementById(`buttonfirst`).addEventListener(`click`, cambiacoloredeltesto)

function paragrafigrassetto() {
    let paragrafo1 =document.getElementById(`Paragrafo1`);
    let paragrafo2 =document.getElementById(`Paragrafo2`);
    let paragrafo3 =document.getElementById(`Paragrafo3`);

    if (paragrafo1.style.fontWeight == 100) {
        paragrafo1.style.fontWeight = 900;

    } else {
        paragrafo1.style.fontWeight = 100;
    }

    if (paragrafo2.style.fontWeight == 100) {
        paragrafo2.style.fontWeight = 900;

    } else {
        paragrafo2.style.fontWeight = 100;
    }

    if (paragrafo3.style.fontWeight == 100) {
        paragrafo3.style.fontWeight = 900;

    } else {
        paragrafo3.style.fontWeight = 100;
    }

}

document.getElementById(`buttonsecond`).addEventListener(`click`, paragrafigrassetto)

function appariscompari() {
    let paragrafo1 = document.getElementById(`Paragrafo1`);
    let paragrafo2 = document.getElementById(`Paragrafo2`);
    let paragrafo3 = document.getElementById(`Paragrafo3`);

    if (paragrafo1.style.display == `none`) {
        paragrafo1.style.display = `block`;

    } else {
        paragrafo1.style.display = `none`;
    }

    if (paragrafo2.style.display == `none`) {
        paragrafo2.style.display = `block`;

    } else {
        paragrafo2.style.display = `none`;
    }

    if (paragrafo3.style.display == `none`) {
        paragrafo3.style.display = `block`;

    } else {
        paragrafo3.style.display = `none`;
    }

}

document.getElementById(`buttonthird`).addEventListener(`click`, appariscompari)