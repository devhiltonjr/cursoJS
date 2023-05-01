//para criar objetos utiliza-se chaves
const pessoa = {
nome:'Luiz',
sobreNome: 'Miranda',
idade:30,
endereco:{
    rua:'Avenida Brasil',
    numero:'220'
}
};
//  atribuição normal
//const nome = pessoa.nome;

//const {nome, sobreNome, idade} = pessoa; //estou dizendo ao objeto extraia essa chave aqui nome{nome} e ja cria uma variavel

// estou mudando o nome da chave  dentro do objeto
/*const {nome: n = '', sobreNome, idade} = pessoa;

console.log(n, sobreNome, idade);
*/

//acessando objeto dentro do objeto e acessando dados
/*const {endereco:{rua, numero},endereco} = pessoa;

console.log(rua, numero,endereco);

*/
/*
const {endereco:{rua: r = 123, numero},endereco} = pessoa;

console.log(r, numero,endereco);
*/

  //  acessando o resto dos dados de um objeto
const {nome,sobreNome, ...resto} = pessoa;

console.log(nome,sobreNome,resto);
