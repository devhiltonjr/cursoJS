// tratamento de erros

// não se deve utilizar essa forma de tratamento
/*try{
    console.log(naoExisto);

}catch(err){
    console.log('não existo não existe')
    console.log(err);
}
*/
//como se deve tratar os erros corretamente

function maiorNumero(x, y) { 
if(typeof(x) !== 'number'||typeof(y) !== 'number'){
    throw new error('x e y precisa ser numeros.')
}
return(x+y)
}

try{
    console.log(maiorNumero(5+5));
    console.log(maiorNumero('a', 100))
} catch(error){
    console.log('Algumas coisa mais amigavel');
}