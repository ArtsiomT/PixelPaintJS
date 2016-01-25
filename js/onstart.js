/**
 * Created by aterehovich on 25.1.16.
 */
var canvas;
var MAINCOLOR = 'black';
var BKG_COLOR = 'white';
var CELL_SIZE = 10;
var colorList = [
    'black', 'dimgray', 'gray', 'darkgray', 'silver', 'lightgrey', 'gainsboro', 'whitesmoke',
    'white', 'snow', 'rosybrown', 'lightcoral', 'indianred', 'brown', 'firebrick', 'maroon',
    'darkred', 'red', 'salmon', 'mistyrose', 'tomato', 'darksalmon', 'sienna', 'seashell',
    'saddlebrown', 'chocolate', 'peachpuff'];

window.onload = function(){
    canvas = document.querySelector('canvas');
    resize();
    fillColorTable();
    runapp();
}

changecolor = function(element){
    MAINCOLOR = element.id;
}

function fillColorTable(){
    var colors = document.getElementById('control');
    for (var i = 0; i < colorList.length; i++){
        var o = document.createElement('input');
        o.setAttribute('type', 'button');
        o.setAttribute('id', colorList[i]);
        o.setAttribute('onclick', 'changecolor(this)');
        o.setAttribute('title', colorList[i]);
        o.setAttribute('style', 'width: 23px; background-color: ' + colorList[i] + ";");
        colors.appendChild(o);
    }


}

window.onresize = function(){
    resize();
}

function resize() {
    canvas.height = window.innerHeight * 0.85;
    canvas.width = window.innerWidth * 0.80;
}
