var speed = 15;

function init() {
    menu.style.zIndex = "-1";
    draw();
    game();
}

function game() {
    setInterval(update, 1000/speed);
}