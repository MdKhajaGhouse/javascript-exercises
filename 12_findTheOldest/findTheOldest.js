const findTheOldest = function(arr) {
    let max = 0;
    let ind = -1;

    for (let i=0; i<arr.length; i++){
        if (!('yearOfBirth' in arr[i])){
            arr[i]["yearOfBirth"] = new Date().getFullYear();
        }
        if (!('yearOfDeath' in arr[i])){
            arr[i]["yearOfDeath"] = new Date().getFullYear();
        }
        let age = arr[i]["yearOfDeath"] - arr[i]["yearOfBirth"];
        if(age>max){
            max = age;
            ind = i;
        }
    }
    return arr[ind];
};

// Do not edit below this line
module.exports = findTheOldest;
