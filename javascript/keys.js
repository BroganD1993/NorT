document.onkeydown = function(event) {
    var key = event.keyCode;

    if(key == 68 && player_one_dir != "right") {
        player_one_dir = "right";
        player_one.changeDirection(player_one_dir);
    }
    else if(key == 83 && player_one_dir != "down") {
        player_one_dir = "down";
        player_one.changeDirection(player_one_dir);
    }
    else if(key == 65 && player_one_dir != "left") {
        player_one_dir = "left";
        player_one.changeDirection(player_one_dir);
    }
    else if(key == 87 && player_one_dir != "up") {
        player_one_dir = "up";
        player_one.changeDirection(player_one_dir);
    }
    else if(key == 76 && player_two_dir != "right") {
        player_two_dir = "right";
        player.two.changeDirection(player_two_dir);
    }
    else if(key == 75 && player_two_dir != "down") {
        player_two_dir = "down";
        player.two.changeDirection(player_two_dir);
    }
    else if(key == 74 && player_two_dir != "left") {
        player_two_dir = "left";
        player.two.changeDirection(player_two_dir);
    }
    else if(key == 73 && player_two_dir != "up") {
        player_two_dir = "up";
        player.two.changeDirection(player_two_dir);
    }

    if(key) event.preventDefault();
};