const piedra = "piedra";
const papel = "papel";
const tijera = "tijera";

const TIE = 0;
const WIN = 1;
const LOST = 2;

let isPlaying = false;

const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

piedraBtn.addEventListener("click", () => {
    play(piedra);
});
papelBtn.addEventListener("click", () => {
    play(papel);
});
tijeraBtn.addEventListener("click", () => {
    play(tijera);
});

function play(userOption) {
    if(isPlaying) return;

    isPlaying = true;

    userImg.src = "img/" + userOption + ".svg";

    resultText.innerHTML = "Eligiendo...";

    const interval = setInterval(function(){
        const machineOption = calcMachineOption();
        machineImg.src = "img/" + machineOption + ".svg";
    }, 200);

    setTimeout(function () {

        clearInterval(interval);

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);

        machineImg.src = "img/" + machineOption + ".svg";

        switch (result) {
            case TIE:
                resultText.innerHTML = "Empatamos!";
                break;
            case WIN:
                resultText.innerHTML = "Ganaste!";
                break;
            case LOST:
                resultText.innerHTML = "Perdiste!";
                break;
        }
        isPlaying = false;
    }, 2000);
}

function calcMachineOption() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return piedra;
        case 1:
            return papel;
        case 2:
            return tijera;
    }
}

function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return TIE;

    } else if (userOption === piedra) {

        if (machineOption === papel) return LOST;
        if (machineOption === tijera) return WIN;

    } else if (userOption === papel) {

        if (machineOption === tijera) return LOST;
        if (machineOption === piedra) return WIN;

    } else if (userOption === tijera) {

        if (machineOption === piedra) return LOST;
        if (machineOption === papel) return WIN;

    }
}