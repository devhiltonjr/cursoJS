/*
Primitivos (imutaveis)- string, number, boolean, undefined, null (bigint, symbol)
*/
/*          //0123
let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0], nome);
*/
/*                  valor Primitivo
let a = 'A';
let b = a; // copia comnpiando o valor de a, porem só i valor inicial

console.log(a, b);

a = 'Outra coisa'; // alterando o valor de 'a' não afeta o valor de 'b'

console.log(a, b);
*/

// Referencia (mutavel) - array, object, function
//dado passado por referencia
let a = [1, 2, 3];
//let b = a; //
let b = [...a];
 let c = b;
// tanto a quamto b aponta para o mesmo lugar da memoria 


a.push(4); //adiciona um valor no final da array

//console.log(a, b);
console.log(a,b);
//b.pop(); // deleta um valor no final da array, porem o valor alterado afeta as duas variaveis sendo elas alterações sendo feitas em a ou b 

//console.log(a, b);

//console.log(c);

// spretch do array a, o valor de a vai ser puxando para b exemplo:

 //Dados passados por referencia as duas variaveis aponta para o mesmo lugar

console .log(b);

const d = {
nome: 'Luiz',
sobreNome:'Otavio'
};
//const f = d;

d.nome ='João';
console.log(d);

// para alterar individualmente precisa fazer a seguinte operação

// copiar o valor de b para a
const f = {...d};

console.log(d, f);