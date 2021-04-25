
    var Count = 20;
    var InitialCounter = 20;

    let fup = function up() {
        document.getElementById("Count").innerHTML = Count++;
    }

    function down() {
        document.getElementById("Count").innerHTML = Count--;
    }

    function reset() {
        document.getElementById("Count").innerHTML = Count = InitialCounter;
    }

    document.getElementById("Up").onclick = fup;

    document.getElementById("Down").onclick = function () { down() };

    document.getElementById("reset").onclick = function () { reset() };
