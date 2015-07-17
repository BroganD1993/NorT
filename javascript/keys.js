document.onkeydown = function(event) {
    var key = event.keyCode;

    if(key == 68 && player_one.getDirection() != "left") {
        player_one.changeDirection("right");
    }
    else if(key == 83 && player_one.getDirection() != "up") {
        player_one.changeDirection("down");
    }
    else if(key == 65 && player_one.getDirection() != "right") {
        player_one.changeDirection("left");
    }
    else if(key == 87 && player_one.getDirection() != "down") {
        player_one.changeDirection("up");
    }
    else if(key == 76 && player_two.getDirection() != "left") {
        player_two.changeDirection("right");
    }
    else if(key == 75 && player_two.getDirection() != "up") {
        player_two.changeDirection("down");
    }
    else if(key == 74 && player_two.getDirection() != "right") {
        player_two.changeDirection("left");
    }
    else if(key == 73 && player_two.getDirection() != "down") {
        player_two.changeDirection("up");
    }

    if(key) event.preventDefault();
};