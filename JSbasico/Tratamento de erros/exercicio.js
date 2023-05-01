// retornar um erro de instanceof', na function

/*function retornaHora(data) {
    if (!(data instanceof Date)){
        console.log('não é')
    }
}

retornaHora('swswsws')
*/

function retornaHora(data){
//pegando a data atual 
 // se a data for enviada e a data é não é uma instancia  de Date
 if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instancia de Date');
 }
 if (!data){
   data = new Date(); 
 }
//  eturn data.toLocaleTimeString(
//     'pt-BR',{
//     hour12:false

//removendo os digitos

    return data.toLocaleTimeString(
        'pt-BR', {
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:false
    });
}

try{
    const data = new Date('01-01-1970 12:58:12');
const hora = retornaHora();// dando certo
//const hora = retornaHora(11);// com erro
console.log(hora);

}catch(e){
  //tratando erro  
  //console.log(e)
}finally{
    console.log('Tenha um bom dia')
}

