var speed = 25;
var intervalID = 0;

function init() {
    menu.style.zIndex = "-1";
    draw();
    game();
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
    draw();
    game();
}
