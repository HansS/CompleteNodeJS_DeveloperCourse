var grades = [100, 92, 82, 72];

console.log('starting: ' + grades);

grades.push(90);

console.log('pushed [92] : ' + grades);

grades.unshift(80);

console.log('unshifted [82]: ' + grades);

/*
var gradePop = grades.pop();

console.log('pop [end] value ' + gradePop);

var gradeshift = grades.shift();

console.log('shift [first] value ' + gradeshift);

console.log('grades : ' + grades);

grades.push(92);

console.log('pushed [92] : ' + grades);

grades.unshift(82);

console.log('unshifted [82]: ' + grades);

grades.forEach(function(grade) {
    console.log(grade);
});
*/


var totl = 0, avg = 0;

grades.forEach(function(grade) {
    totl += grade;
}); 
console.log('total grade = ' + totl);
avg = totl / grades.length;
console.log('Average grade = ' + avg);




