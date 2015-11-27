var age = 24; // created and assigned
var result;   // created not assigned

console.log('age = ' + age);

result = age + 6;
console.log('age + 6 = ' + result);


result = age - 6;
console.log('age - 6 = ' + result);

result = age * 6;
console.log('age * 6 = ' + result);

result = age / 6;
console.log('age / 6 = ' + result);

result = age % 5;
console.log('age % 5 = ' + result);


console.log('current result:' + result);

result++;
console.log('result plus 1: ' + result);

var num= 19;

console.log('num = ' + num);
console.log('num++ = ' + num++);
console.log('num = ' + num);
console.log('num-- = ' + num--);
console.log('num = ' + num);
console.log('--num = ' + --num);
console.log('++num = ' + ++num);

var totl, totls = [89,94,78], avg;
totl = totls[0] + totls[1] +totls[2];
avg = totl / totls.length;

console.log(totls[0] + ', ' + totls[1] +  ', ' + totls[2]);

console.log('total ' + totl);

console.log('total scores : ' + totl + ', average score = ' + parseFloat(avg));


