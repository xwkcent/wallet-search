// Ищем свои кошельки в списке победителей
// В один файл вставляем список победивших кошельков, а в другой список своих кошельков
var xBoct = process.argv[2];

var fs = require('fs');
var array1 = fs.readFileSync('mywallets.txt').toString().toLowerCase().split("\r\n");
var array2 = fs.readFileSync('winwallets.txt').toString().toLowerCase().split("\r\n");
let S = 0;
var N = 0;

N = parseInt(xBoct);
N = Math.abs(N);
if (N > 42){
    console.log('Вы ввели неверное число. Ищу точное совпадение адресов.');
}
if (N > 0 && N < 42){
    N = N * (-1);
    
    for(i in array2) {
        for(j in array1) {
            let str2 = array2[i].slice(N);
            let str1 = array1[j].slice(N);
            
            if (str1 == str2) {
                S = S + 1;
                console.log('Нашел кошелек ' + array1[j]);
          }
        }
    }
} else {
    for(i in array2) {
        for(j in array1) {
            let str2 = array2[i];
            let str1 = array1[j];
            if (str1 == str2) {
                S = S + 1;
                console.log('Нашел кошелек ' + array1[j]);
          }
        }
    }
}

console.log('Найдено совпадений: ' + S);