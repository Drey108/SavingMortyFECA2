let score = 0;
let health = 100;

const backgroundMusic = new Audio("./assets/gamebg.mp3");
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;

// Tom's voice from the cartoon show 'Tom and Jerry'
const audioArray = [
    new Audio("./assets/tom1.mp3"),
    new Audio("./assets/tom2.mp3"),
    new Audio("./assets/tom-scream.mp3"),
]; 


function getRandomAudio() {
    const randomIndex = Math.floor(Math.random() * audioArray.length);
    return audioArray[randomIndex];
}

// these cats are directly taken screenshot from first episode of season 4 in the Adult swim produced TV show called 'Rick And Morty'
function createRandomImage(containerId) {
    const container = document.getElementById(containerId);
    const containerRect = container.getBoundingClientRect();
    const img = document.createElement('img');
    const imageSources = [
        'assets/c1.png',
        'assets/c2.png',
        'assets/c3.png',
        'assets/c4.png',
        'assets/c5.png'
    ];

    img.src = imageSources[Math.floor(Math.random() * imageSources.length)];
    img.style.position = 'absolute';
    img.style.left = '50%';
    img.style.top = '50%';
    img.style.zIndex = '1000';
    img.style.transition = 'transform 1s';
    img.style.transform = 'scale(0) rotate(0deg)';
    img.style.opacity = '0';

    const displacementX = 250;
    const displacementY = 100;
    const randomAngle = Math.random() * 360;

    let hasCollided = false;

    setTimeout(() => {
        img.style.transform = `scale(5) rotate(${randomAngle}deg) translate(${displacementX}%, ${displacementY}%)`;
        img.style.opacity = '1';

        const collisionInterval = setInterval(() => {
            const imgRect = img.getBoundingClientRect();
            if (
                !hasCollided &&
                (imgRect.left <= containerRect.left ||
                    imgRect.top <= containerRect.top ||
                    imgRect.right >= containerRect.right ||
                    imgRect.bottom >= containerRect.bottom)
            ) {
                hasCollided = true;
                health -= 20;

                if (health <= 0) {
                    // alert('Game Over! Your score is ' + score); 'removing this because it is annoying'
                    clearInterval(collisionInterval);
                }
                updateScore();
            }
        }, 500);

        img.addEventListener('click', () => {
            clearInterval(collisionInterval);
            score++;
            const randomAudio = getRandomAudio();
            randomAudio.play();

            updateScore();
            img.style.transform = 'scale(0)';
            img.style.opacity = '0';
            setTimeout(() => {
                container.removeChild(img);
            }, 0);
        });
    }, 500);

    img.addEventListener('click', () => {
        score++;
        updateScore();
        img.style.transform = 'scale(0)';
        img.style.opacity = '0';
        setTimeout(() => {
            container.removeChild(img);
        }, 0);
    });

    container.appendChild(img);
}

function addBackgroundMusic() {
    backgroundMusic.play();
}

function addImageRandomly() {
    createRandomImage('container');
    setTimeout(addImageRandomly, 1000);
}

function updateScore() {
    const scoreElement = document.getElementById('score');
    const healthBar = document.getElementById('health-bar');

    if (scoreElement) {
        scoreElement.innerText = `Score: ${score}`;
    }

    if (healthBar) {
        healthBar.style.width = `${health}%`;
    }
    if (health <= 0) {
        window.location.href = `gameover.html?score=${score}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateScore();
    addBackgroundMusic();
});

addImageRandomly();
