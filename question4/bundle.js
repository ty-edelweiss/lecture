var intervalId = null;

var ballSize = { width: 25, height: 25 };
var boxSize = { width: 300, height: 600 };

var h_0 = 0;
var seconds = 0.001;
var params = {
    v: 0,
    t: 0,
    g: 9.8 * 1000,
    y: 0,
};

function animation() {
    var height = 0;
    var ball = document.getElementById("ball");
    if (params.g > 0) {
        height = (params.v * params.t) + (0.5 * params.g * Math.pow(params.t, 2));
        if (h_0 + height + ballSize.height >= boxSize.height) {
            params.v = params.g * params.t;
            params.g = -1.0 * params.g;
            params.t = 0;
            h_0 = boxSize.height - ballSize.height;
            ball.style.transform = "translate(-50%, " + String(h_0) + "px)";
        } else {
            ball.style.transform = "translate(-50%, " + String(h_0 + height) + "px)";
            params.t = params.t + seconds;
        }
    } else if (params.g < 0) {
        var x = (params.v * params.t) + (0.5 * params.g * Math.pow(params.t, 2));
        var velocity = params.v + params.g * params.t;
        height = (boxSize.height - ballSize.height) - x;
        if (height <= 0) {
            params.v = 0;
            params.g = -1.0 * params.g;
            params.t = 0;
            h_0 = 0;
            ball.style.transform = "translate(-50%, " + String(h_0) + "px)";
        } else if (velocity <= 0) {
            params.v = 0;
            params.g = -1.0 * params.g;
            params.t = 0;
            h_0 = height;
            ball.style.transform = "translate(-50%, " + String(h_0) + "px)";
        } else {
            ball.style.transform = "translate(-50%, " + String(height) + "px)";
            params.t = params.t + seconds;
        }
    }
}

window.onload = function(ev) {
    var btn = document.getElementById("btn");
    var cancel = document.getElementById("cancel");
    btn.onclick = function(ev) {
        intervalId = setInterval(animation, seconds * 1000)
    };
    cancel.onclick = function(ev) {
        if (intervalId) { clearInterval(intervalId); }
    };
};
