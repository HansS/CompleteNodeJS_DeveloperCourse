var name;

console.log('name = ' + name);

name = 'Bob;'

console.log('name = ' + name);

name = '';

console.log('name = ' + name);

name = undefined;

console.log('name = ' + name);

function doesNothing(){

}

console.log('doesNothing = ' + doesNothing);

function returnName(name){
    return name;
}

console.log('returnName("John") = ' + returnName("John"));

if(typeof x === 'undefined'){
    console.log('x is undefined!');
}