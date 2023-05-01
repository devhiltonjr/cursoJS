// laço aleatorio
//o significado de while é enquanto

function random(min, max) {
const r = Math.random() *(max -min) + min;
return Math.floor(r);
}


// while
/*const min = 1
const max = 50;
let rand = random(min, max);

// só executa se a condição for verdadeira ele executa se não ele não executa

while (rand !== 10) {  // A diferença entre while e do while é que while checa a condição antes de executar
    rand = random(min, max);
    console.log(rand);
}
*/


//DO WHILE
// Do while siguinifica faça e depois check ou confira o di while ele vai executar e depois checar a execução o oposto do while
const min = 1
const max = 50;
let rand = 100

do {
    rand = random(min, max);
    console.log(rand);
}while (rand !== 100);

