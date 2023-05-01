try{
    console.log('Abrir um arquivo');
    console.log('Manipulei um arquivo');
    console.log('fechei o arquivo');

}catch(error){
console.log('Deu erro')
}
finally{
    console.log('Tambem sou finally')
}
try{
  // console.log(deu_erro)
    console.log('não deu erro');
}
catch(e){
    //executado quando dá erro
    console.log('Deu erro o try');// quando dá um erro
}
finally{
    //sempre executado para evitar erros
    console.log('Finally:Eu sempre sou executado'); // finaliza a execução quando não está sendo utilizado para evitar erros
};