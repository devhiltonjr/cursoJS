const elementos = [
    {tag: 'p', texto:'Qualquer coisa que queira'},

    {tag: 'div', texto:'Frase 2'},

    {tag: 'footer', texto:'Frase 3'},

    {tag: 'section', texto:'Frase 4'}
];
//cria uma variavel onde
const container = document.querySelector('.container'); //cirar uma variavel que vai selecionar o container
const div = document.createElement('div');// cria o elemento div
//a cada interação do laço cria-se uma tag e adiciona  o texto


for(let i = 0; i < elementos.length; i++){
let{tag, texto }=elementos[i]; // asociação via desistruturação do element
let tagCriada = document.createElement(tag);
let textoCriada = document.createTextNode(texto);
//tagCriada.innerHTML = texto;
tagCriada.appendChild(textoCriada);
div.appendChild(tagCriada);



}

container.appendChild(div);


