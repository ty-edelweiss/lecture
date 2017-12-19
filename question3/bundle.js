window.onload = function(ev) {
    var input = document.getElementById("input");
    var output = document.getElementById("output");
    var btn = document.getElementById("btn");
    btn.onclick = function(ev) {
        output.innerHTML = input.value;
    };
};
