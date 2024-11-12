const repeatString = function(string, num) {
    let res = '';
    for (let i = 0; i < num; i++) {
        res += string;
    }
    return num < 0 ? 'ERROR' : res;
};

// Do not edit below this line
module.exports = repeatString;
