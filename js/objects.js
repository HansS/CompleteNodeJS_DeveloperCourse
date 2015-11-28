var person = {
};

console.log(person);

person.name = 'Rick',

console.log(person);    

person.getName = function () {
    console.log(this.name);
}

person.getName();

var pet = {
    name: 'Charlie',
    type: 'Cat',
    getPet : function () {
        return this.type + ', ' + this.name;
    }
};

console.log(pet);
pet.getPet;




