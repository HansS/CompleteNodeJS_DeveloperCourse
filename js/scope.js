var age = 24;

function localFunction() {
    var age=32, name = 'Rick';
    
    console.log('inside localFunction:age = ' + age);
    console.log('inside localFunction:name = ' + name);
}

localFunction();
console.log('global : age ' + age);
//console.log('global : name ' + name);

