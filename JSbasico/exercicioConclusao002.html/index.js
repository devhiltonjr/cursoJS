function meuEscopo() { 
    const form = document.querySelector('.form' ); //seleciona a div que irá ser capturado os dados
    const resultado = document.querySelector('.resultado') // seleciona a div que irá mostrar os resultado 
    const pessoa =[];   
        /*
        let contador = 1;
        function recebeEventoForm (evento) {
        evento.preventDefault();
        console.log(`Forme não enviado ${contador}`);
        contador++;
        }  
    */ 
    
    function recebeEventoForm (evento) {
        evento.preventDefault(); // impede a atualização da pagina ao enviar um formulario
        const nome = form.querySelector('.nome');  // captura os dados que estão no formulario através das classes ou id
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoa.push({
            nome: nome.value,
            sobrenome:sobrenome.value,
            peso:peso.value,
            altura: altura.value
        });
        console.log(pessoa);
       
        resultado.innerHTML += `<h1>Cadastro Realizado com sucesso!</h1>`
        resultado.innerHTML += `<p>Nome: ${nome.value}</p>`;
        resultado.innerHTML += `<p>Sobrenome: ${sobrenome.value}</p>`;
        resultado.innerHTML += `<p>Peso: ${peso.value}</p>`;
        resultado.innerHTML += `<p>Altura: ${altura.value}</p>`;    

    }
    form.addEventListener('submit', recebeEventoForm);
    }
meuEscopo();