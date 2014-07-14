
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
            result = calculator.getMaxElement.apply(null, inputArr);
            break;
        case "min":
            result = calculator.getMinElement.apply(null, inputArr);
            break;
        case "middle":
            result = calculator.getMiddleElement.apply(null, inputArr);
            break;
        case "max_sum":
            result = calculator.getMaxSubSum1.apply(null, inputArr);
            break;
        case "max_sequence":
            result = calculator.getMaxIncSequence.apply(null, inputArr);
            break;
    }

    document.getElementById("result").value = result;
    return false;
}