document.onkeydown = function(event) {
    var key = event.keyCode;

    if(key == 68 && player_one.dir() != "left") {
        player_one.changeDirection("right");
    }
    else if(key == 83 && player_one.dir() != "up") {
        player_one.changeDirection("down");
    }
    else if(key == 65 && player_one.dir() != "right") {
        player_one.changeDirection("left");
    }
    else if(key == 87 && player_one.dir() != "down") {
        player_one.changeDirection("up");
    }
    else if(key == 76 && player_two.dir() != "left") {
        player_two.changeDirection("right");
    }
    else if(key == 75 && player_two.dir() != "up") {
        player_two.changeDirection("down");
    }
    else if(key == 74 && player_two.dir() != "right") {
        player_two.changeDirection("left");
    }
    else if(key == 73 && player_two.dir() != "down") {
        player_two.changeDirection("up");
    }

    if(key) event.preventDefault();
};