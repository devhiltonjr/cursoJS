function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoa = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoa.push({
            peso: peso.value,
            altura: altura.value
        })
        const imc = (Number(peso.value) / Number(altura.value)**2);
        //console.log(pessoa)
        //resultado.innerHTML += `${(imc)}`
        if(imc < 18.5){
             console.log(`Seu Imc é ${imc.toFixed([2])} você está abaixo do peso`)
        resultado.innerHTML += `<p>Seu Imc é ${imc.toFixed([2])} você está abaixo do peso</p>`;            
        }
        else if(imc >= 18.5 && imc <= 24.9){
            console.log(`Seu Imc é ${imc.toFixed([2])} você está com peso normal`)
            resultado.innerHTML += `<p>Seu Imc é ${imc.toFixed([2])} você está com peso normal</p>`;
        }
        else if(imc >= 25 && imc <= 29.9){
            console.log( `Seu Imc é ${imc.toFixed([2])} você está com sobrepeso`)
            resultado.innerHTML += `<p>Seu Imc é ${imc.toFixed([2])} você está com sobrepeso</p>`;
        }
        else if(imc >= 30 && imc <= 34.9){
            console.log(`Seu Imc é ${imc.toFixed([2])} você está com obesidade grau 1`)
            resultado.innerHTML += `<p>Seu Imc é ${imc.toFixed([2])} você está com obesidade grau 1</p>`;
        }
        else if(imc >= 35 && imc <= 39.9){
            console.log(`Seu Imc é ${imc.toFixed([2])} você está com obesidade grau 2`)
            resultado.innerHTML += `<p>Seu Imc é ${imc.toFixed([2])} você está com obesidade grau 2</p>`;
        }
        else if(imc > 40){
            console.log(`Seu Imc é ${imc.toFixed([2])} você está com obesidade grau 3`)
            resultado.innerHTML += `<p>Seu Imc é ${imc.toFixed([2]) 
            
            } você está com obesidade grau 3</p>`;
        }
        else{
            console.log( `dados incorretos!`)
            resultado.innerHTML += `<p>dados incorretos!</p>`;
        }
    }
    form.addEventListener('submit', recebeEventoForm);'a'

}
meuEscopo();

