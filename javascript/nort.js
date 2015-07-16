var player_one_dir = "down";
var player_two_dir = "down";

function init() {
    menu.style.zIndex = "-1";
    draw();
    game();
}

function game() {
    var speed = 25;
    var game_loop = 0;
    if(speed <= 45) speed ++;
    clearInterval(game_loop);
    game_loop = setInterval(draw, 1000/speed);
}