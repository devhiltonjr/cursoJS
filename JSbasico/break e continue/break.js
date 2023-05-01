//break pode melhorar a velocidade da busca de um valor porquê ela para o laço onde encontrou o valor sem retornar os valores anteriores exemplo a busca de um nome


const numeros = [1,2,3,4,5,6,7,8,9,10];

// for of
/*for (let numero of numeros) {

    if(numero === 2){
    console.log( `pulei o numero 2`);
continue;// com continue o laço vai até o final
    }
    if(numero === 7){
        console.log( `7 encontrado saindo....`);
        break; // com break o laço para onde o valor foi encontrado
    }
}
*/
//for in

/*for (let i in numeros) {
let numero = numeros[i];

    if(numero === 2){
    console.log( `pulei o numero 2`);
continue;// com continue o laço vai até o final
    }
    if(numero === 7){
        console.log( `7 encontrado saindo....`);
        break; // com break o laço para onde o valor foi encontrado
    }
}
*/
/*
// for classico
for (let i = 0; i < numeros.length; i++) {
let numero = numeros[i];
    if(numero === 2){
    console.log( `pulei o numero 2`);
continue;// com continue o laço vai até o final
    }
    if(numero === 7){
        console.log( `7 encontrado saindo....`);
        break; // com break o laço para onde o valor foi encontrado
    }
}
*/
/*
//while
let i = 0;
while ( i < numeros.length) {
    let numero = numeros[i];
        if(numero === 2){
        console.log( `pulei o numero 2`);
        i++; // variavel de controle fica no final do laço
    continue;// com continue o laço vai até o final
        }
        if(numero === 7){
            console.log( `7 encontrado saindo....`);
            i++; // variavel de controle fica no final do laço
            break; // com break o laço para onde o valor foi encontrado
        }
        i++; // variavel de controle fica no final do laço
    }
    */
    
//Do while
let i = 0;
do  {
    let numero = numeros[i];
        if(numero === 2){
        console.log( `pulei o numero 2`);
        i++; // variavel de controle fica no final do laço
    continue;// com continue o laço vai até o final
        }
        if(numero === 7){
            console.log( `7 encontrado saindo....`);
            i++; // variavel de controle fica no final do laço
            break; // com break o laço para onde o valor foi encontrado
        }
        i++; // variavel de controle fica no final do laço
    }while ( i < numeros.length);
    
    
    
