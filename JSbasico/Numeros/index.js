let num1 = 10; //Number

let num2 = 2.5;// Number

console.log(num1.toString() + num2.toString()); /* Converte o number em string porém desta forma só converte a exibição no retorno, más a variavel  continua sendo Number*/
console.log(typeof num1); // identifica a variavel

//          Convertendo a variavel em String.
// num1 = num1.toString(); //converte o Number  em String

// saber a versão binaria
// console.log(num1.toString(2));


// arredondar casas decimais

let num3 = 15.5789112526522; // declarar casas decimais aumentar ou diminuir

console.log(num3.toFixed(2));


// testando um valor para identificar o tipo principalmente quando vem de um resultado de outro lugar

//console.log(Number.isInteger(num3));

//fazendo uma conta usando string

let temp =  num1 * 'Olá';
console.log(temp); // retorna NaN porquê é um string e não pode fazer calculos a não ser que seja convertida quando for numero

// testando se é NaN

//console.log(Number.isNaN(temp));

//padrão de precisão de numeros reais em js ('IEEE 754-2008')

let num5 = parseFloat(0.7);//Numeros Reais
let num6 = parseFloat(0.1);//Number

num5 += num6; // 0.8
num5 += num6; // 0.9
num5 += num6; // 1.0








num5 = (num5.toFixed(2));// forma mais precisa num5 = Number(num5.toFixed(2)); retorna um tipo obrigatoriamente declarado

console.log(num5); //soma
