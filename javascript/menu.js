function showMenu() {
    menu = document.getElementById("menu");
    game_over_menu = document.getElementById("game_over_menu");
    reset_keys();
}

function colour_key(id, colour) {
    var element = document.getElementById(id);
    element.style.color = colour;
    element.style.borderColor = colour;
}

function reset_keys() {
    colour_key(player_one.last_key, "#777");
    colour_key(player_two.last_key, "#777");
    colour_key("s", player_one.colour);
    colour_key("k", player_two.colour);
    player_one.last_key = "s";
    player_two.last_key = "k";
}

function updateKeys(id, colour, old_id) {
    colour_key(id, colour);
    colour_key(old_id, "#777");
}

showMenu();