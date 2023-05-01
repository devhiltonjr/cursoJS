function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = form.querySelector('.resultado');
pessoas = new pessoas
const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura');
        pessoas = push(recebeEventoForm(nome.value, sobrenome.value,peso.value, altura.value))
    }

        ////function escopo
    //forma mais complexa

    // form.onsubmit = function (e){
    //    e.preventDefault();// impedir que a tela atualize ao enviar um dado
    //    alert('foi enviado!');
    //     console.log('Foi enviado')
    // }
    // let contador = 1;
    // function recebeEventoForm(evento) {
    //     evento.preventDefault();
    //     console.log(`form não foi enviado ${contador}`);
    //     contador++;
    // }//
    form.addEventListener('submit', recebeEventoForm)
   
   
   
}
meuEscopo();