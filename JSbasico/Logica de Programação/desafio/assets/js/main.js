const form = document.querySelector('#formulario');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // se o peso não for falso se alguem digitar letras retorna uma mensagem e o programa é finalizado
    if (!peso) {
        setResultado('Peso invalido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura invalida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    console.log(imc, nivelImc);
    const msg = `Seu IMC é ${imc} (${nivelImc}).`
    setResultado(msg, true);

});
function getImc(peso, altura) {

    const imc = peso / altura ** 2;
    return imc.toFixed(2);

}

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobre peso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc < 18.5)
        return nivel[0];
    if (imc >= 24.9)
        return nivel[1];
    if (imc >= 29.9)
        return nivel[2];
    if (imc >= 34.9)
        return nivel[3];
    if (imc >= 39.9)
        return nivel[4];





}



//essa função a tarefa é criar o P 
function criaP() {
    const p = document.createElement('p'); //cria uma variavel para receber o resultado que será exibido no html.
    /* p.classList.add('paragrafo-resultado');//cria uma classe na lista de classe desse paragrafo em outras palavras add uma classe diretamente pelo JS, porem essa classe só aparece quando o resultado for exibido.
    */
    return p;
}



// função para exibir dados do js para o html
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    resultado.appendChild(p); //insere o elemento filho em resultado vai ser exibido na div
    p.innerHTML = msg;
    return;
}
