// function saudacao(nome){
    
//     return `bom dia ${nome}`
// }
// const variavel = saudacao('Luiz');
// console.log(variavel);


//               //parametros  são variaveis passadas dentro dass funções
// function soma(x,y){
//     const resultado = x+y;
//     return resultado;
//     // depois do return não é mais executado
// }
// console.log(soma(2,2))// só pode ser visualizado o retorno nesse metodo

// const resultado = soma(2,2); // cria uam variavel e joga o valor do retorno da função 

// console.log(resultado) // exibe o valor retornado  de dentro da função criada do lado de fora

// função anonima
// const raiz = function(n){
// return n ** 0.5;
// };

// console.log(raiz(100)); //

// Arrow function

// const raiz = (n) => {
//     return n ** 0.5;
// };

const raiz = n => n ** 0.5;
console.log(raiz(100)); //simplificado