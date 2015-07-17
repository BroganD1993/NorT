var speed = 25;
var intervalID = 0;

function init() {
    menu.style.zIndex = "-1";
    draw();
    playMusic();
    game();
}

window.onload = function loadMusic() {
    this.backgroundAudio = new Audio("music/digital_bones.mp3");
    this.backgroundAudio.loop = true;
    this.backgroundAudio.volume = .25;
    this.backgroundAudio.load();
    this.checkAudio = window.setInterval(
        function(){
            checkReadyState()
        },100
    );
};

function playMusic() {
    this.backgroundAudio.play();
}

function stopMusic() {
    this.backgroundAudio.pause();
}

function game() {
    intervalID = setInterval(update, 1000/speed);
}

function gameOver(player) {
    clearInterval(intervalID);
    player_one.reset();
    player_two.reset();
    paintCanvas();
    game_over_menu.style.zIndex = "1";
    printVictor(player);
}

function printVictor(victor) {
    var element = document.getElementById("victor");
    element.innerHTML = victor.name + " Wins!";
    element.style.color = victor.colour;
    reset_keys();
}

function restart() {
    game_over_menu.style.zIndex = "-1";
    reset();
    draw();
    game();
}

function checkReadyState() {
    var loading = document.getElementById("loading");
    loading.innerHTML = loading_style[loading_index++ % loading_style.length];
    if (this.backgroundAudio.readyState === 4) {
        window.clearInterval(this.checkAudio);
        bar.style.zIndex = "-1";
        menu.style.zIndex = "1";

    }
}
