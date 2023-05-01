// for classico - Geralment com iteraveis (array ou strings)
// for in- retorna o indice ou chave (string, array ou objetos)
// for of - retorna o valor em si (iteraveis, arrays ou strings)

const nome = ['Luiz Otavio','Otavio','Miranda'];

//classico
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]); 
}

console.log("=====================================")


//for in

for( let i in nome ) {
    console.log(nome[i]);

}


console.log("=====================================")



// for of

for(let valor of nome){
    console.log(valor);
}


console.log("=====================================")

nome.forEach(function(valor, indice, array){console.log(valor, indice,array);}); // tudo em uma linha
