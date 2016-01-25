/**
 * Created by aterehovich on 25.1.16.
 */
var Drawer = Object.create(null);

(function (Drawer) {
    var Draw = (function () {
        function Draw(canvas){
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
        }

        Draw.prototype.drawField = function () {
            for(var i = 0; i <= this.canvas.width / CELL_SIZE; i++){
                this.drawLine(i * CELL_SIZE, 0, i * CELL_SIZE, this.canvas.height);
            }

            for(var j = 0; j <= this.canvas.width / CELL_SIZE; j++){
                this.drawLine(0, j * CELL_SIZE, this.canvas.width, j * CELL_SIZE);
            }
        }

        Draw.prototype.drawLine = function (x1, y1, x2, y2) {
            this.ctx.beginPath();
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2, y2);
            this.ctx.stroke();
            this.ctx.closePath();
        }
        Draw.prototype.fillPlate = function(x, y, color){
            var tmpCol = this.ctx.fillStyle;
            this.ctx.fillStyle = color;
            this.ctx.beginPath();
            this.ctx.fillRect(x * CELL_SIZE + 1, y * CELL_SIZE + 1, CELL_SIZE - 2, CELL_SIZE - 2);
            this.ctx.stroke();
            this.ctx.closePath();
            this.ctx.fillStyle = tmpCol;
        }
        return Draw;
    })();

    Drawer.Draw = Draw;
})(Drawer || (Drawer = Object.create(null)));