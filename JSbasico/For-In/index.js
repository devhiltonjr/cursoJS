// for classico - Geralment com iteraveis (array ou strings)
// for in- retorna o indice ou chave (string, array ou objetos)
// for of - retorna o valor em si (iteraveis, arrays ou strings)


//const frutas = ['Pera', 'Maçã', 'Uva'];

//classico for
/*for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i]); //
}
*/

/*For In com array

for(let i in frutas){
    console.log(frutas[i]);// for in lê os indices
}

const pessoas = ['Maria', 'Joao', 'Hilton'];
// for in com objetos
//para  variavel index receber  pessoas
 for  (  let    index     in   pessoas){
    console.log(pessoas[index]);
}
*/

const pessoa ={
nome:': Hilton',
sobrenome:': Freitas',
idade:': 36',
}

for (let chave in pessoa){
console.log(chave,pessoa[chave]);
}