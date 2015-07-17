var player_size = 5;

function Player(name) {
    this.name = name;
    this.last_x = 0;
    this.last_y = 0;
    this.trail = []
    this.last_key = "s";
    this.colour = "#777";
    this.direction = "down";

    var that = this;
    this.init = function(start_x, colour) {
        that.colour = colour;
        var start_y = 5;
        var start_size = 10;
        for(var i = start_y; i < start_size - 1; i++) {
            that.trail.push({x: start_x, y: i});
        }
        that.last_x = start_x;
        that.last_y = start_size - 2;
    };

    this.paint = function() {
        for(var i = 0; i < that.trail.length; i++) {
            var square = that.trail[i];
            ctx.fillStyle = that.colour;
            ctx.fillRect(square.x*player_size, square.y*player_size, player_size, player_size);
        }
    };

    this.changeDirection = function(direction) {
        that.direction = direction;
    };

    this.getDirection = function() {
        return that.direction;
    };

    this.update = function() {
        if(that.direction == "right") {
            that.last_x++;
        }
        else if(that.direction == "left") {
            that.last_x--;
        }
        else if(that.direction == "up") {
            that.last_y--;
        }
        else if(that.direction == "down") {
            that.last_y++;
        }
        that.trail.push({x: that.last_x, y: that.last_y});
        that.paint();
    };

    this.reset = function() {
        that.last_x = 0;
        that.last_y = 0;
        that.trail = [];
        that.direction = "down";
    }
}
