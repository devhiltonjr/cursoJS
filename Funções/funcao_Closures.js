//Closure é a habilidade da função acessar o escopo lexo 

//acesso a tres escopo
// function retornaFuncao(){
//     const nome = 'Luiz';
//     return function(){
//         return nome;
//     };
// }


// const funcao = retornaFuncao();
// console.log(funcao);
//============================

function retornaFuncao(nome){
  
    return function(){
        return nome;
    };
}
const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');



console.dir(funcao);
console.dir(funcao2);
console.log(funcao(), funcao2());