/**
 * Created by aterehovich on 25.1.16.
 */
runapp = function(){

    var mapArray = [
        "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "s", "s", "s", "s", "s", "s", "#",
        "#", "w", "w", "w", "t", "t", "s", "#",
        "#", "s", "s", "w", "t", "t", "s", "#",
        "#", "s", "s", "w", "w", "w", "s", "#",
        "#", "#", "#", "#", "#", "#", "#", "#"
    ];
    console.log("run");
    var map = new Entity.GameMap(mapArray);
    map.toString();
    var drawer = new Drawer.Draw(canvas);
    drawer.drawField();

    canvas.onclick = function(e){
        var x = Math.floor(e.offsetX / CELL_SIZE);
        var y = Math.floor(e.offsetY / CELL_SIZE);
        if(e.which == 1) {
            drawer.fillPlate(x, y, MAINCOLOR);
        } else if(e.which == 3){
            drawer.fillPlate(x, y, BKG_COLOR);
        }
    }

    canvas.onmousedown = function(e){
        var x = Math.floor(e.offsetX / CELL_SIZE);
        var y = Math.floor(e.offsetY / CELL_SIZE);
        if(e.which == 1) {
            drawer.fillPlate(x, y, MAINCOLOR);
        }
        canvas.onmousemove = function(ev){
            var x = Math.floor(ev.offsetX / CELL_SIZE);
            var y = Math.floor(ev.offsetY / CELL_SIZE);
            if(e.which == 1) {
                drawer.fillPlate(x, y, MAINCOLOR);
            }
            canvas.onmouseup = function(evt){
                canvas.onmousemove = null;
            }
        }
    }
}