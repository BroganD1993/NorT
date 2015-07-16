var canvas = document.getElementById("nort_map");
var ctx = canvas.getContext("2d");
var width = window.innerWidth;
var height = window.innerHeight;

canvas.width = width;
canvas.height = height;

var player_one = new Player("Player One!");
var player_two = new Player("Player Two!");

function paintCanvas() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);
}

function draw() {
    paintCanvas();
    player_one.init(5);
    player_two.init((width/10) - 5);
    player_one.paint();
    player_two.paint();
}

function update() {
    player_one.update();
    player_two.update();
}
