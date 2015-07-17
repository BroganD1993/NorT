var canvas = document.getElementById("nort_map");
var ctx = canvas.getContext("2d");
var width = window.innerWidth;
var height = window.innerHeight;

canvas.width = width;
canvas.height = height;

var canvas_x_width = width / player_size;
var canvas_y_width = height / player_size;

var player_one = new Player("Player One");
var player_two = new Player("Player Two");

function paintCanvas() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);
}

function draw() {
    paintCanvas();
    player_one.init(5);
    player_two.init(canvas_x_width - 5);
    player_one.paint();
    player_two.paint();
}

function update() {
    player_one.update();
    player_two.update();
    checkCollisions(player_one, player_two);
    checkCollisions(player_two, player_one);
}

function checkCollisions(player, other_player) {
    if(hitWall() || hitHimself() || hitOtherPlayer()) {
        gameOver(other_player);
    }

    function hitWall() {
        return (player.last_x < 0 || player.last_x > canvas_x_width ||
        player.last_y < 0 || player.last_y > canvas_y_width);
    }

    function hitHimself() {
        for(var i = 0; i < player.trail.length - 1; i++) {
            if(player.trail[i]["x"] == player.last_x && player.trail[i]["y"] == player.last_y) {
                return true;
            }
        }
    }

    function hitOtherPlayer() {
        for(var i = 0; i < other_player.trail.length; i++) {
            if(other_player.trail[i]["x"] == player.last_x && other_player.trail[i]["y"] == player.last_y) {
                return true;
            }
        }
    }
}