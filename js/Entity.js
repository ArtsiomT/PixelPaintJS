/**
 * Created by aterehovich on 25.1.16.
 */
var Entity = Object.create(null);
(function (Entity) {
    var Wall = (function () {
        function Wall(){
            this.color = 'red';
        }
        return Wall;
    })();

    var Tree = (function () {
        function Tree(){
            this.color = 'tree';
        }
        return Tree;
    })();

    var Sand = (function () {
        function Sand(){
            this.color = 'yellow';
        }
        return Sand;
    })();

    var Water = (function () {
        function Water(){
            this.color = 'blue';
        }
        return Water;
    })();

    var GameMap = (function () {
        function GameMap(mapArr){
            this.mapArray = [];
            for (var i = 0; i < canvas.width / CELL_SIZE; i++){
                this.mapArray[i] = [];
                for(var j = 0; j < canvas.height / CELL_SIZE; j++){
                    this.mapArray[i][j] = mapArr[j+i*canvas.width/CELL_SIZE];
                }
            }
        }

        GameMap.prototype.toString = function(){
            console.log("Map:");
            //console.log(this.mapArray);
            var string = "";
            for (var i = 0; i < this.mapArray.length; i++){
                for (var j = 0; j < this.mapArray[i].length; j++){
                    string += this.mapArray[i][j];
                }
                console.log(string);
            }
        }
        return GameMap;
    })();

    Entity.Wall = Wall;
    Entity.Tree = Tree;
    Entity.Sand = Sand;
    Entity.Water = Water;
    Entity.GameMap = GameMap;
})(Entity || (Entity = Object.create(null)));