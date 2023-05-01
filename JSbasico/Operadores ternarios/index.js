/* Operadores Ternarios

(condição)? 'valor para verdadeiro'  : 'valor para falso';0
*/

const pontuacaoUsuario =1000;

//Usando operação ternaria
const nivelUsuario = pontuacaoUsuario >=1000 ? 'Usuario Vip' : 'Usuario Normal';

const corUsuario ='Pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);


/*
//forma padrão
if( usuario >= 1000){
    console.log('Usuario Vip')
}else{
    console.log('Usuario normal')
}
*/
