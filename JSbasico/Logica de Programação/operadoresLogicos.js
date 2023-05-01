/*
Operadores Lógicos
&& -> AND -> E (todas as expressões tem que ser verdadeira) 

console.log(true && true); verdadeira
console.log(false && true); falso
console.log(true && false); false
console.log(false && false); falso

const usuario = 'Luiz';
const senha = '123456';

const vaiLogar = usuario ==='Luiz' && senha ==='123456';
console.log(vaiLogar); se os dois forem verdadeiro vai logar


|| -> OR -> OU
Basta uma condição ser verdadeira para ser verdade
console.log(true && true); verdadeira
console.log(false && true); verdadeira
console.log(true && false); verdadeira
console.log(false && false); falso

const usuario = 'Luiz';
const senha = '123456';
const vaiLogar = usuario ==='Luiz' || senha ==='123456';

se os uma das duas condições for verdadeira  vai logar.
console.log(vaiLogar);  


 
! -> NOT -> NÃO

const usuario = 'Luiz';
const senha = '123456';
const vaiLogar = usuario ==='Luiz' ! senha ==='123456';

se se a condição for verdadeira ele vai negar
console.log(!vaiLogar); nega
console.log(!!vaiLogar); retorna ao valor original 

*/
