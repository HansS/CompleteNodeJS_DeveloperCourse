var isValid = true;

if(isValid === true) {
    console.log('is valid!');
} else {
    console.log('is not valid!');
}

if(isValid) {
    console.log('is valid!');
} else {
    console.log('is not valid!');
}

if(!isValid) {
    console.log('is valid!');
} else {
    console.log('is not valid!');
}

var a = 1;
if(a) {
    console.log(a + ' is valid!');
}
else {
    console.log(a + ' is not valid!');
}
a = 0;
if(a) {
    console.log(a + ' is valid!');
}else {
    console.log(a + ' is not valid!');
}

function checkTypOf(value){
    return typeof value;
}

console.log('isValid : ' + checkTypOf(isValid));
console.log('test : ' + checkTypOf('test'));
console.log('6  : ' + checkTypOf(6));

function flipBool(boolToCheck){
    if(typeof boolToCheck === 'boolean'){
        return !boolToCheck;
    } else {
        console.log('Value is not a boolean!');
    }
}

isValid = flipBool(isValid);
console.log('flipping isValid : ' + isValid);
isValid = flipBool(isValid);
console.log('flipping isValid : ' + isValid);
isValid = flipBool(9);
console.log('9 : ' + isValid);

