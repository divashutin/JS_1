// JavaScript source code
var calculator = new Object();

calculator.getMaxSubSum2 = function (){
    var result = arguments[0];
    var sum = 0;
    var n = arguments.length - 1;
    for (var i = 0; i < n; i++){
        sum += arguments[i];
        result = Math.max(result, sum);
        sum = Math.max(sum, 0);
    }
    return result;
}

calculator.getMaxSubSum1 = function (){
    var minSum = 0;
    var result = arguments[0];
    var sum = 0;
    var n = arguments.length - 1;
    for (var i = 0; i < n; i++){
        sum += arguments[i];
        result = Math.max(result, sum - minSum);
        minSum = Math.min(minSum, sum);
    }
    return result;
}

calculator.getMaxElement = function (){
    var maxEl = arguments[0];
    var n = arguments.length - 1;
    for (var i = 0; i < n; i++) {
        if (maxEl < arguments[i]) {
            maxEl = arguments[i];
        }
    }
    return maxEl;
}

calculator.getMax = function (){
    var args = Array.prototype.slice.call(arguments);
    return Math.max.apply(null,args);
}

calculator.getMin = function (){
    var args = Array.prototype.slice.call(arguments);
    return Math.min.apply(null,args);
}

calculator.getMinElement = function (){
    var minEl = arguments[0];
    var n = arguments.length - 1;
    for (var i = 0; i < n; i++) 
    if (minEl > arguments[i]) 
        minEl = arguments[i];
    return minEl;
}

calculator.getMiddleElement = function (){
    var result;
    var n = arguments.length - 1;
    var args = Array.prototype.slice.call(arguments);
    args.sort(function (a, b) { return a - b; });
    if (n % 2 === 1) {
        result = args[Math.floor(n / 2)];
    }
    else {
        result = (args[n / 2] + args[n / 2 + 1]) / 2;
    }
    return result;
}

calculator.getMaxIncSequence = function (){
    var args = Array.prototype.slice.call(arguments);
    var n = arguments.length - 1;
    var length = [];
    for (var i = 0; i < n; i++) {
        length[i] = 1;
    }

    for (var i = 0; i < n; i++) {
        for (var j = i; j < n; j++) {
            if (args[j] < args[j + 1]) {
                length[i]++;
            }
            else {
                j = n;
            }
        }
    }

    var max = length[0];
    var maxIndex = 0;
    for (var i = 1; i < n; i++){
        if (length[i] > max) {
            max = length[i];
            maxIndex = i;
        }
    }
    var result = args.slice(maxIndex, maxIndex + max);
    return result;
}


