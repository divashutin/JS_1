// JavaScript source code
function Calculator(inputArr) {
    this.args = Array.prototype.slice.call(inputArr);
    this.n = this.args.length - 1;

    this.getMaxSubSum2 = function () {
        var result = args[0];
        var sum = 0;
        for (var i = 0; i < this.n; i++) {
            sum += this.args[i];
            result = Math.max(result, sum);
            sum = Math.max(sum, 0);
        }
        return result;
    }

    this.getMaxSubSum1 = function () {
        var minSum = 0;
        var result = this.args[0];
        var sum = 0;
        for (var i = 0; i < this.n; i++) {
            sum += this.args[i];
            result = Math.max(result, sum - minSum);
            minSum = Math.min(minSum, sum);
        }
        return result;
    }

    this.getMaxElement = function () {
        var maxEl = this.args[0];
        for (var i = 0; i < this.n; i++) {
            if (maxEl < this.args[i]) {
                maxEl = this.args[i];
            }
        }
        return maxEl;
    }

    this.getMax = function () {
        return Math.max.apply(null, this.args);
    }

    this.getMin = function () {
        return Math.min.apply(null, this.args);
    }

    this.getMinElement = function () {
        var minEl = this.args[0];
        for (var i = 0; i < this.n; i++)
            if (minEl > this.args[i])
                minEl = this.args[i];
        return minEl;
    }

    this.getMiddleElement = function () {
        var result;
        var sortArgs = this.args.slice();
        sortArgs.sort(function (a, b) { return a - b; });
        if (this.n % 2 === 1) {
            result = sortArgs[Math.floor(this.n / 2)];
        }
        else {
            result = (sortArgs[this.n / 2] + sortArgs[this.n / 2 + 1]) / 2;
        }
        return result;
    }

    this.getMaxIncSequence = function () {
        var length = [];
        for (var i = 0; i < this.n; i++) {
            length[i] = 1;
        }

        for (var i = 0; i < this.n; i++) {
            for (var j = i; j < this.n; j++) {
                if (this.args[j] < this.args[j + 1]) {
                    length[i]++;
                }
                else {
                    j = this.n;
                }
            }
        }

        var max = length[0];
        var maxIndex = 0;
        for (var i = 1; i < this.n; i++) {
            if (length[i] > max) {
                max = length[i];
                maxIndex = i;
            }
        }
        var result = this.args.slice(maxIndex, maxIndex + max);
        return result;
    }
}


