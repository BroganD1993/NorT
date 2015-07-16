function Player(name) {
    this.name = name;
    this.init = initPlayer;
    this.paint = paintPlayer;
    this.update = updatePlayer;
    this.changeDirection = changeDirection;
    this.dir = getDirection;
    this.last_x = 0;
    this.last_y = 0;
    this.player = [];
    this.direction = "down";

    var that = this;
    function initPlayer(start_x) {
        var start_y = 5;
        var start_size = 10;
        for(var i = start_y; i < start_size - 1; i++) {
            that.player.push({x: start_x, y: i});
        }
        that.last_x = start_x;
        that.last_y = start_size - 2;
    }

    function paintPlayer() {
        var size = 10;
        for(var i = 0; i < that.player.length; i++) {
            var square = that.player[i];
            ctx.fillStyle = "black";
            ctx.fillRect(square.x*size, square.y*size, size, size);
        }
    }

    function changeDirection(direction) {
        that.direction = direction;
    }

    function getDirection() {
        return that.direction;
    }

    function updatePlayer() {
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
        that.player.push({x: that.last_x, y: that.last_y});
        that.paint();
    }
}
