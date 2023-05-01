//IIFE -> Imediately invoked function expression
// (function( ){                a função tem que está envolvida com parenteses 

// })();

//GLOBAL
// function qualquerCoisa(){
//     console.log(1112222333);
// }

// qualquerCoisa();

//IIFE
// protege a função  e deixa ela anonima a outras funções 
(function(idade, peso, altura){
 
    const sobreNome = 'Freitas'
    function criaNome(nome){
        return nome + ' ' + sobreNome;
    }
    function falaNome(){
console.log(criaNome('Hilton'))
    }

    falaNome()
    console.log(idade,peso,altura)

})(`idade: ${30} Peso:${85}  Altura:${1.65}`);


