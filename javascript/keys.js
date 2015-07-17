document.onkeydown = function(event) {
    var key = event.keyCode;

    if(key == 68 && player_one.getDirection() != "left") {
        player_one.changeDirection("right");
        updateKeys("d", player_one.colour, player_one.last_key);
        player_one.last_key = "d";
    }
    else if(key == 83 && player_one.getDirection() != "up") {
        player_one.changeDirection("down");
        updateKeys("s", player_one.colour, player_one.last_key);
        player_one.last_key = "s";
    }
    else if(key == 65 && player_one.getDirection() != "right") {
        player_one.changeDirection("left");
        updateKeys("a", player_one.colour, player_one.last_key);
        player_one.last_key = "a";
    }
    else if(key == 87 && player_one.getDirection() != "down") {
        player_one.changeDirection("up");
        updateKeys("w", player_one.colour, player_one.last_key);
        player_one.last_key = "w";
    }
    else if(key == 76 && player_two.getDirection() != "left") {
        player_two.changeDirection("right");
        updateKeys("l", player_two.colour, player_two.last_key);
        player_two.last_key = "l";
    }
    else if(key == 75 && player_two.getDirection() != "up") {
        player_two.changeDirection("down");
        updateKeys("k", player_two.colour, player_two.last_key);
        player_two.last_key = "k";
    }
    else if(key == 74 && player_two.getDirection() != "right") {
        player_two.changeDirection("left");
        updateKeys("j", player_two.colour, player_two.last_key);
        player_two.last_key = "j";
    }
    else if(key == 73 && player_two.getDirection() != "down") {
        player_two.changeDirection("up");
        updateKeys("i", player_two.colour, player_two.last_key);
        player_two.last_key = "i";
    }

    if(key) event.preventDefault();
};