 var elem = document.getElementById('figure');
 var start = document.getElementById('start');
 var stop = document.getElementById('stop');

 var stepLeft = 0;
 var stop;
 start.addEventListener('click', function () {

    function move() {
        stepLeft += 5;
        elem.style.left = stepLeft + 'px';
        stop = requestAnimationFrame(move);
    }
    stop = requestAnimationFrame(move);


});

 stop.addEventListener('click', function () {
    cancelAnimationFrame(stop)

});

