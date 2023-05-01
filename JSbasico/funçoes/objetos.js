// 1. para metro é o locak que vai receber o argumento
// 2. argumento é o valor passado para o parametro dentro da função



// const array = [1,2,3];
// array.push(4);
// array[0] = 'Luiz';
// array[1] = 'Marisa';

// console.log(array);

// const pessoa1 = {
//     nome:'Hilton',
//     idade:35,
//     altura:1.66
// };

// //console.log(pessoa1);
// console.log(pessoa1.nome);

// function criaPessoa(nome, sobrenome, idade) {
//     return {
//nome:nome,
//sobrenome:sobrenome,
//idade:idade
// nome, sobrenome, idade  //não precisa do metodo a cima porquê o JS entende que separado por vigula é uma variavel 
//     }
// }
// const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);

// console.log(pessoa1.nome);

const pessoa1 = {
    nome:'Hilton',
    sobrenome: 'Oliveira',
    idade:36,

falar(){
    console.log(`${this.nome},${this.sobrenome},${this.idade} está falando OI....`)
},
incremento(){
    this.idade++;
}

}
pessoa1.falar();
pessoa1.incremento();
pessoa1.falar();
pessoa1.incremento();
pessoa1.falar();


