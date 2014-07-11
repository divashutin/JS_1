// JavaScript source code
var app = {}
var array = {}

array.getMaxSubSum2 = function (arr)
{
    var ans, sum, r;
    ans = arguments[0];
    n = arguments.length - 1;
    sum = 0;
    for (r = 0; r < n; r++) {
        sum += arguments[r];
        ans = Math.max(ans, sum);
        sum = Math.max(sum, 0);   }
    return ans;
}



array.getMaxSubSum1 = function (arr)
{
    var r, sum, min_sum, ans, n;
    ans = arguments[0];
    sum = min_sum = 0;
    n = arguments.length - 1;
    for (r = 0; r < n; r++) {
        sum += arguments[r];
        ans = Math.max(ans, sum - min_sum);
        min_sum = Math.min(min_sum, sum);    }
    return ans;
}

array.getMaxElement = function (arr)
{
    var max_el, n, r;
    max_el = arguments[0];
    n = arguments.length - 1;
    for (r = 0; r < n; r++)
        if (max_el < arguments[r])
            max_el = arguments[r];
    return max_el;
}

array.getMax = function (arr)
{
    var args = Array.prototype.slice.call(arguments);
    return Math.max.apply(null,args);
}

array.getMin = function (arr)
{
    var args = Array.prototype.slice.call(arguments);
    return Math.min.apply(null,args);
}

array.getMinElement = function (arr)
{
    var min_el, n, r;
    min_el = arguments[0];
    n = arguments.length - 1;
    for (r = 0; r < n; r++) 
    if (min_el > arguments[r]) 
        min_el = arguments[r];
    return min_el;
}

array.getMiddleElement = function (arr)
{
    var ans;
    var n = arguments.length - 1;
    var args = Array.prototype.slice.call(arguments);
    args.sort(function (a, b) { return a - b; });
    if (n % 2 === 1) ans = args[Math.floor(n / 2 )];
    else
    ans = (args[n / 2] + args[n / 2 + 1]) / 2; 
    return ans;
}

array.getMaxIncSequence = function (arr)
{
    var args = Array.prototype.slice.call(arguments);

    var n = arguments.length - 1;
    var length = [];
    for (var i = 0; i < n; i++) length[i] = 1;

    for (var i = 0; i < n; i++) 
        for (var j = i; j < n; j++)
            if (args[j] < args[j + 1])
                length[i]++;
            else j = n;

    var max = length[0];
    var max_i = 0;
    for (var i = 1; i < n; i++)
        if (length[i] > max)
        {   max = length[i];
            max_i = i; }

    var ans = args.slice(max_i, max_i + max);
    return ans;
}


app.execute = function (arr)
{
    var input_arr = Array.prototype.slice.call(arguments);
    var output_ans = array.getMaxElement.apply(null, input_arr);
    document.querySelector("#max").textContent = output_ans;
    document.getElementById("max").textContent = output_ans;
    output_ans = array.getMinElement.apply(null, input_arr);
    document.getElementById("min").textContent = output_ans;
    output_ans = array.getMiddleElement.apply(null, input_arr);
    document.getElementById("middle").textContent = output_ans;
    output_ans = array.getMaxSubSum1.apply(null, input_arr);
    document.getElementById("max_sum").textContent = output_ans;
    output_ans = array.getMaxIncSequence.apply(null, input_arr);
    document.getElementById("max_sequence").textContent = output_ans;
}



 