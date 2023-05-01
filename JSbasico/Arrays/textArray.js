
// escopo principal
function meuEscopo () {
    const form = document.querySelector('.form');
    const res = document.querySelector('.res');

    const pessoas = []; //array
    
  //função para capturar os dados através das classe   
function recebeEventoForm(evento) { 
    evento.preventDefault(); 
const nome =   form.querySelector('.nome');
const idade =  form.querySelector('.idade');
const peso =   form.querySelector('.peso');
const altura = form.querySelector('.altura');

pessoas.push({   
    nome:   nome.value,
    idade:  idade.value,
    peso:   peso.value,
    altura: altura.value,       
}); 
console.log(pessoas);
res.innerHTML += `Nome: ${nome.value}, 
Idade: ${idade.value},
Peso: ${peso.value},
Altura:${altura.value}}`

}
form.addEventListener('submit',recebeEventoForm)  
}
meuEscopo();
