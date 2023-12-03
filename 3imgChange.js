let indiceImmagine = 2;

setInterval(() => {
    if (indiceImmagine == 1) {

        document.getElementById("Immagine").style.opacity = 0;

        setTimeout(() => {
            
            document.getElementById("Immagine").src = "https://www.uradio.org/wp-content/uploads/2020/12/Luffy-Sorridente.jpg";

            document.getElementById("Immagine").style.opacity = 1;

        }, 1000);
    
        indiceImmagine ++;
        
    } else if (indiceImmagine == 2) {
        
        document.getElementById("Immagine").style.opacity = 0;

        setTimeout(() => {
            
            document.getElementById("Immagine").src = "https://www.hallofseries.com/wp-content/uploads/2020/02/un-indiscrezione-rivelato-attore-zoro-live-action-one-piece-v3-424681-1280x720-1.jpg";

            document.getElementById("Immagine").style.opacity = 1;

        }, 1000);

        indiceImmagine ++;

    } else if (indiceImmagine == 3){

        document.getElementById("Immagine").style.opacity = 0;

        setTimeout(() => {
            
            document.getElementById("Immagine").src = "https://www.tomshw.it/storage/wp/new-images/2023/02/one-piece-retroscena-dietro-la-morte-di-ace-268417.jpg";

            document.getElementById("Immagine").style.opacity = 1;

        }, 1000);

        indiceImmagine = 1;
    }
}, 3000);