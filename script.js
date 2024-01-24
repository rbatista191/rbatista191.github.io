document.body.onkeydown = function(e) {
    if (e.code === "Space") {
        document.getElementById("speech-bubble").hidden = false;
    }
};
document.body.onkeyup = function(e) {
    if (e.code === "Space") {
        document.getElementById("speech-bubble").hidden = true;
    }
};
