//Declaração de função (function hoisting)
function falarOi(){
    console.log('Oie');
}
falarOi();

// First-class objects (Objetos de primeira classe)
// função de expreção

const souUmdado = function(){
    console.log('sou um dado');
};
souUmdado();

function executaFuncao(funcao){
    console.log('Vou executar um dado a baxito:')
    funcao();
}
executaFuncao(souUmdado);


// arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function')
};
funcaoArrow();


//Dentro de um objeto
const obj ={
    falar: function(){
        console.log('Estou falando...')
    }

}
obj.falar();