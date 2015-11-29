function greetMaker(name) {
    // a function inside another function
    
    function greet() {
        // local greet() variage
        var age = 30;
        console.log('\r\n\t Hello ' + name + '!');
    }
    //raises error
    //console.log('greet var age ' + age); 
    return greet;
}

var greetPerson = greetMaker('Rick');

//greetPerson is a function!

// age is not in scope
//greetMaker('Rick ' + age); // fails
greetMaker('Rick ');

greetPerson();

/* createAdder(baseNumber)
    
    return function numberToAdd
    var addTen = createAdder(10);
    console.log(addTen(2)); // 12
    console.log(addTen(0)); // 10
*/

function createAdder(num) {
    return  function addTen(adr) {
        return num += adr;
    }
    //return addTen;
}

var add8 = createAdder(8);
console.log(add8(12));
var add10 = createAdder(100);
console.log(add10(12));

