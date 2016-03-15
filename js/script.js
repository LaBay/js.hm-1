"use strict"

var a;
var n;
a = prompt('Введите число:');
n = prompt('Введите степень числа:');

while (n < 0) {
	n = prompt('Введите положительное значение степени:');
}

function res(a){
	var result = a;
	for (var i = 1; i < n; i++) {
		result = result*a;
	}
	console.log('Число ' + a + ' в ' + n + '-й степени равно ' + result);
}
res(a);
