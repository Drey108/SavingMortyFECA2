document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const score = urlParams.get('score');

    const finalscoreElement = document.getElementById('finalscore');
    finalscoreElement.innerText = `${score}`;

    const phrasesAbove30 = [
        { text: "WUBBA LUBBA DUB DUB!!", audio: "./assets/WLDD.mp3" },
        { text: "And that's the wayyyyyy the news goes!", audio: "./assets/newsgoes.mp3" },
        { text: "And that's why I always say, 'Shumshumschilpiddydah!", audio: "./assets/shum.mp3" },
        { text: "You Act Like Prey, But You're A Predator", audio: "./assets/prey.mp3" },
        { text: "Charging Into 'Em Like A Bull — That's How We Grow As People.", audio: "./assets/motivation.mp3" }
    ];

    const phrasesBelow30 = [
        { text: "There’s a lesson here, and I’m not going to be the one to figure it out.", audio: "./assets/lessonrick.mp3" },
        { text: "Welcome To The Club, Pal.", audio: "./assets/clubpal.mp3" },
        { text: "You Still Have A Right To Take Anything You Want Seriously."},
        { text: "To Live Is To Risk It All.", audio: "./assets/riskitall.mp3" },
        { text: "Failure of any kind is failure.", audio: "./assets/failure.mp3" }
    ];

    const selectedPhrases = score >= 30 ? phrasesAbove30 : phrasesBelow30;

    const randomIndex = Math.floor(Math.random() * selectedPhrases.length);
    const selectedPhrase = selectedPhrases[randomIndex];

    const scorephraseElement = document.getElementById('scorephrase');
    scorephraseElement.innerText = selectedPhrase.text;

    const audioElement = new Audio(selectedPhrase.audio);
    audioElement.play();
});

function pa() {
    window.location.href = 'main.html';
}

function gth() {
    window.location.href = 'index.html';
}
