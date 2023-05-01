
//parametro
//objeto construtor
function criaPessoa(nome, sobreNome, idade){
    return {
        nome,sobreNome , idade 
    }  
}
                           //argumento é o valor que é passado para o parametro
const pessoa1 = criaPessoa('Hilton', 'Freitas', 25);

const pessoa2 = criaPessoa('Mariana', 'Jesus', 26);

const pessoa3 = criaPessoa('Arthur', 'Oliveira', 12);

const pessoa4 = criaPessoa('Eluna', 'Lima', 4);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome);

