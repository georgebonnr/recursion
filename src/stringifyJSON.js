// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
    var result, i, key;
    if (typeof obj === 'function' || typeof obj === 'undefined') {
        return;
    } else if (typeof obj === 'string') {
        return "\"" + obj + "\"";
    } else if (Array.isArray(obj)) {
        result = [];
        i = 0;
        while (i < obj.length) {
            result.push(stringifyJSON(obj[i]));
            i += 1;
        }
        return "[" + result + "]";
    } else if (obj !== null && typeof obj === 'object') {
        result = '';
        for (i in obj) {
            key = stringifyJSON(i);
            value = stringifyJSON(obj[i]);
            if (typeof value !== 'undefined') result += key + ":" + value + ",";
        }
        return "{" + result.slice(0, -1) + "}";
    }    else {
        return obj + '';
    }
};
