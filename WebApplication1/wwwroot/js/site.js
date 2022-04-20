// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.


var up = document.getElementById('GFG_UP');
var down = document.getElementById('GFG_DOWN');
var div = document.getElementById('GFG_DIV');
up.innerHTML = "Click on button to remove the element.";
var id = null;

function GFG_Fun() {
    div.parentNode.removeChild(div);
    down.innerHTML = "Element is removed.";
}

function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}