
document.getElementById("options").onclick = function (e) {
    var inputString = document.getElementById("arr").value;
    inputString += ",";
    var inputData = inputString.split(",");
    var inputArr = [];
    var n = inputData.length;
    for (var i = 0; i < n; i++){
        inputArr[i] = parseInt(inputData[i]);
    }
    var result = "test";
    var event = e || window.event;
    var target = event.target || event.srcElement;
    if (target.tagName != 'A') return;
    var id = target.id;
    switch (id) {
        case "max":
            var calculator = new Calculator(inputArr);
            result = calculator.getMaxElement();
            break;
        case "min":
            var calculator = new Calculator(inputArr);
            result = calculator.getMinElement();
            break;
        case "middle":
            var calculator = new Calculator(inputArr);
            result = calculator.getMiddleElement();
            break;
        case "max_sum":
            var calculator = new Calculator(inputArr);
            result = calculator.getMaxSubSum1();
            break;
        case "max_sequence":
            var calculator = new Calculator(inputArr);
            result = calculator.getMaxIncSequence();
            break;
    }

    document.getElementById("result").value = result;
    return false;
}