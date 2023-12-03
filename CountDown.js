document.addEventListener("DOMContentLoaded", function () {
    let countdown = document.getElementById("CountDown");
    let immagine = document.getElementById("Immagine");

    function IniziaCountDown(secondi) {
        let intervallo = setInterval(() => {
            secondi--;
            countdown.textContent = secondi;

            if (secondi <= 0) {
                clearInterval(intervallo)
                countdown.style.display = "none";
                immagine.style.display = "block";

                setTimeout(() => {
                    immagine.style.opacity = 1;
                }, 500);
                
            }
        }, 1000);
    }

    IniziaCountDown(5);
});