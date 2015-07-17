var speed = 15;
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
    document.getElementById("victor").innerHTML = player.name + " Wins!";
}

function restart() {
    game_over_menu.style.zIndex = "-1";
    draw();
    game();
}
