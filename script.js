document.addEventListener('DOMContentLoaded', function() {
    var label = document.getElementById("label");
    var monaLisa = document.getElementById("mona-lisa");

    function updateInteraction() {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (width <= 768) { // Threshold for smaller screens
            label.innerHTML = "Tap Mona";
            monaLisa.ontouchstart = function() {
                monaLisa.src = 'mona-lisa-1.jpeg'; // Change image on touch start
            };
            monaLisa.ontouchend = function() {
                monaLisa.src = 'mona-lisa.jpg'; // Revert image on touch end
            };
        } else {
            label.innerHTML = "Press Space";
            document.body.onkeydown = function(e) {
                if (e.code === "Space") {
                    monaLisa.src = 'mona-lisa-1.jpeg';
                }
            };
            document.body.onkeyup = function(e) {
                if (e.code === "Space") {
                    monaLisa.src = 'mona-lisa.jpg';
                }
            };
        }
    }

    // Initial check
    updateInteraction();

    // Update interaction on resize
    window.onresize = updateInteraction;
});
