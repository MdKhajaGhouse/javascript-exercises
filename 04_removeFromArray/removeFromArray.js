const removeFromArray = function() {
    let org = arguments[0];
    let args = Array.from(arguments).slice(1);
    let result = [];
    for (let i = 0; i < org.length; i++) {
        if (!args.includes(org[i])) {
            result.push(org[i]);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
