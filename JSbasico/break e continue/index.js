const numeros = [1,2,3,4,5,6,7,8,9,10];

/*for (let numero of numeros) {
    if(numero === 2 || numero === 5){
        continue;// quando encontrar continue ela vai voltar o laço e pular o 2 sem executar o codigo que supostamente estaria nessa variavel ou o valor
    }

    console.log(numero);
}
*/

for (let numero of numeros) {

    if(numero === 2){
    console.log( `pulei o numero 2`);
        continue;// quando encontrar continue ela vai voltar o laço e pular o 2 sem executar o codigo que supostamente estaria nessa variavel ou o valor.
    }
    if(numero === 5){
        console.log( `pulei o numero 5`);
        continue;
    }

    console.log(numero);
}
