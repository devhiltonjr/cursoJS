function relogio() {

    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);//criando a data dos segundos
        return data.toLocaleTimeString('pt-BR', {
            hour12: false, // esse comando coloca para as horas ser em 24hrs
            timeZone: 'UTC'  //seleciona o time zone do local que o programa vai rodar
        });
    }
    //let contador = criaHoraDosSegundos()

    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    // variaveis para ser manipuladas nas funções
    // let segundos = 0;
    // let timer;
    // // cria uma função para iniciar um contador de segundos 
    // function iniciaRelogio(){
    //     timer = setInterval(function(){
    //         segundos++;
    //         relogio.innerHTML =  criaHoraDosSegundos(segundos);
    //     }, 1000);
    // }
    // document.addEventListener('click', function(e){
    //   const elemento = e.target;
    //   if(elemento.classList.contains('iniciar')) {
    //     relogio.classList.remove('pausado')
    //     clearInterval(timer);  
    //     iniciaRelogio();   
    //   } 

    //   if(elemento.classList.contains('pausado')) {
    //     relogio.classList.add('pausado')
    //     clearInterval(timer);   
    //   } 

    //   if(elemento.classList.contains('zerado')) {  
    //     clearInterval(timer);
    //     relogio.innerHTML = '00:00:00'
    //     relogio.classList.remove('zerado')
    //     segundos = 0;
    //   } 
    // });  


    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos)
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const elemento = e.target;
        //  console.log(e.target)  target mostra qual elemento está sendo clicado


        if (elemento.classList.contains('iniciar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado', 'zerado');
            relogio.classList.add('iniciarCronometro')
            iniciaRelogio();
        }
        if (elemento.classList.contains('pausar')) {
            relogio.classList.remove('iniciarCronometro', 'zerado');
            relogio.classList.add('pausado');
            clearInterval(timer);

        }
        if (elemento.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado','iniciarCronometro');
            relogio.classList.add('zerado');
           
            relogio.innerHTML = '00:00:00';
        }
    });
    // function iniciaRelogio(){
    //  timer = setInterval(function(){
    //         segundos++; 
    //         relogio.innerHTML = criaHoraDosSegundos(segundos)
    //     }, 1000);
    // }


    // iniciar.addEventListener('click', function(event){
    //     relogio.classList.remove('pausado','zerado');
    //     clearInterval(timer);
    // iniciaRelogio();
    // });

    // pausar.addEventListener('click', function(event){
    //     relogio.classList.add('pausado'); 
    //     clearInterval(timer);
    // });

    // zerar.addEventListener('click', function(event){
    //     relogio.classList.remove('zerado'); 
    //     clearInterval(timer);
    //     relogio.innerHTML = '00:00:00';
    // });
}
relogio();