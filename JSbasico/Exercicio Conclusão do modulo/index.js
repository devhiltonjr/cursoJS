function meuEscopo() {
const form = document.querySelector('.form'); // selecionado pela class
 /* primeira forma de impedir a atualização da pagina ao enviar um formulario
form.onsubmit = function(evento) {

  evento.preventDefault();//impede a atualização do navegador apos o envio do form
   alert(1); 
   console.log('Foi enviado');
   
};
*/
//segunda forma de impedir a atualização da pagina ao enviar um formulario
const resultados = document.querySelector('.resultado');
//criando a array
const pessoa = [];
//Função que coleta os dados do formulario
function recebeEventoForm(evento) {
    evento.preventDefault();
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura'); 
//metodos de subir os dados para as variaveis
    pessoa.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    })

    console.log(pessoa);
    resultados.innerHTML += `<p>Nome: ${nome.value}</p>`;
    resultados.innerHTML += `<p>Sobrenome: ${sobrenome.value}</p>`;
    resultados.innerHTML += `<p>Peso: ${peso.value}</p>`;
    resultados.innerHTML += `<p>Altura: ${altura.value}</p>`;
}
form.addEventListener('submit', recebeEventoForm);// mais indicado
}
meuEscopo();
