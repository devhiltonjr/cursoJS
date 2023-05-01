// //primeira forma

// function mostraHora(){
//     let data = new Date();
//     return data.toLocaleTimeString('pt-BR',{
//         hour12:false});
// }

// function mostrarIntervalo(){
//     console.log(mostraHora());
// }
// //vai executar o intervalo de 1 em 1 segundo
// setInterval(mostrarIntervalo, 1000);



//segunda forma forma

function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR',{
        hour12:false});
}

function mostrarIntervalo(){
    console.log(mostraHora());
}
//vai executar o intervalo de 1 em 1 segundo
const time = setInterval(function(){
    console.log(mostraHora());
},1000);

//para o setInterval com setTimeout
setTimeout(function(){
    clearInterval(time); //para a execução
    console.log(mostraHora());
},3000);

setTimeout(function(){
    console.log('Olá Mundo');
},5000);