// return
//retorna um valor
//Termina uma função

// function soma(a, b) {

// return a +b;

// }

// function soma2(a, b) {

// console.log(a + b)
// }

// soma(10, 5)

// document.addEventListener('click', function(){
//     document.body.style.backgroundColor = 'red'
// });

// function criaPessoa(nome, sobrenome){
//  return{nome, sobrenome};
// }
// // função para criar pessoa no caso criar um objeto
// const p1 = criaPessoa('Luiz', 'Otavio');

// // objeto que cria manual
// const p2 = {
//     nome: 'João',
//     sobrenome:'Oliveira'
// }

// console.log(p1.nome, p1.sobrenome);
// console.log(p2.nome, p2.sobrenome);

// function falaFrase(comeco){

//  function falaResto(resto){
// return comeco+''+resto;
//  }
//  return falaResto;
// }
// const fala = falaFrase('Olá')
// const resto = fala('Mundo!')
// console.log(resto)


// modo errado
// function duplica(n){
//     return n * 2;
// }
// function triplica(n){
//     return n * 3;
// }
// function quadriplica(n){
//     return n * 4;
// }

// console.log(duplica(2));
// console.log(triplica(3));
// console.log(quadriplica(4));

function criaMultiplicador(multiplicador){
    //Multiplicador
return function(n){
  return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica= criaMultiplicador(4);


console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(10)); 




