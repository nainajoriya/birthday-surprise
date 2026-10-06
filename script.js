/* =================================
   OPEN BIRTHDAY SURPRISE
================================= */

function openSurprise() {

    const opening = document.getElementById("opening");
    const main = document.getElementById("mainContent");
    const song = document.getElementById("birthdaySong");
    const songStatus = document.getElementById("songStatus");

    opening.style.opacity = "0";

    setTimeout(function () {

        opening.style.display = "none";

        main.classList.add("show");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        // 🎵 Automatically start birthday song
        song.play()
            .then(function () {
                songStatus.textContent =
                    "🎵 Birthday song is playing... ❤️";
            })
            .catch(function () {
                songStatus.textContent =
                    "Tap Play to start the song.";
            });

        // 🎉 Confetti
        createConfetti();

    }, 800);
}



/* =================================
   BIRTHDAY SONG
================================= */

const song =
    document.getElementById("birthdaySong");

const songStatus =
    document.getElementById("songStatus");


function playSong() {

    song.play()

        .then(function () {

            songStatus.textContent =
                "🎵 Birthday song is playing... ❤️";

        })

        .catch(function () {

            songStatus.textContent =
                "Please tap the Play button again.";

        });

}


function stopSong() {

    song.pause();

    song.currentTime = 0;

    songStatus.textContent =
        "⏹ Song stopped.";

}


song.addEventListener(
    "ended",
    function () {

        songStatus.textContent =
            "❤️ Birthday song finished!";

    }
);


/* =================================
   QR CODE SURPRISE
================================= */

function showQR() {

    const qrBox =
        document.getElementById("qrBox");


    qrBox.style.display = "block";


    qrBox.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });


    createConfetti();

}


/* =================================
   CONFETTI
================================= */

function createConfetti() {

    const symbols = [
        "🎉",
        "✨",
        "🎈",
        "💖",
        "⭐",
        "🎂"
    ];


    for (
        let i = 0;
        i < 60;
        i++
    ) {

        const confetti =
            document.createElement("div");


        confetti.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        confetti.style.position =
            "fixed";


        confetti.style.left =
            Math.random() * 100 + "%";


        confetti.style.top =
            "-30px";


        confetti.style.fontSize =
            Math.random() * 20 + 15 + "px";


        confetti.style.zIndex =
            "9999";


        confetti.style.pointerEvents =
            "none";


        document.body.appendChild(
            confetti
        );


        const duration =
            Math.random() * 3000 + 2000;


        confetti.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1
                },

                {
                    transform:
                        `translateY(${window.innerHeight + 100}px) rotate(720deg)`,

                    opacity: 0
                }
            ],

            {
                duration: duration,

                easing: "ease-out"
            }

        );


        setTimeout(
            function () {

                confetti.remove();

            },

            duration
        );

    }

}