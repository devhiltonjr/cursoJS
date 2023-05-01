//Função fabrica ou factory function
// quando usa this ele dá prioriada a quem está chamando
// constructor function ou função construtora
// as duas fazem a mesma coisa porém  

function criaPessoa(nome, sobreNome, a, p) {
    return{
        nome, sobreNome,
       get nomeCompleto(){
        return `${this.nome}${this.sobreNome}`
        },

   fala(assunto = 'Falando nada'){
            return `${this.nome} está ${assunto}.`
        },

        altura: a,
        peso: p,

       //Guetter obtem o valor

       get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },

        //Setter adiciona um valor 


        set nomeCompleto(valor){ // dividir as palavras e jogar em um vetor
          
            valor = valor.split(' '), //dessa maneira toda vez que digitar o nome completo vai jogar o sobrenome na variavel 
            //sobrenome dessa maneira essa função transforma em array e separa os valores
            console.log(valor)

            this.nome = valor.shift(); //ele vai puxar o valor da array e jogar na variavel nome no caso ele retorna o valor para a variavel  e remove da array 

            this.sobreNome = valor.join(' ');// remove o restante do valor e coloca em outra array nesse exemplo sobrenome
        },

    };
}
//sempre que chamar a variavel que usando this ela vai ser prioridade
// 
const p1 = criaPessoa('Hilton','Freitas', 1.65, 86);
const p2 = criaPessoa('Mariana ', ' Oliveira', 1.80, 70);
const p3 = criaPessoa('Mario', 'Marcio',1.90,87);
p1.nomeCompleto = 'Arthur Santos de Oliveira';
console.log(p1.nome)
console.log(p1.sobreNome)
console.log(p1.fala())
console.log(p3.imc)

console.log(p2.imc);




//console.log(p2.imc());
//console.log(p2.fala('Falando Bom dia a todos'))

