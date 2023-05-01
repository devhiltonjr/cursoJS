// colchetes é array e chaves um objeto
// chaves objetos {}
// array colchetes []



   // objeto literal
const pessoal ={
nome: 'Luiz',
sobreNome: 'Miranda'  ,
idade: 25,   

fala(){

    //this representa o objeto
    
    console.log(`${this.nome} ${this.sobreNome} de idade ${this.idade} está falando oi...`)
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();

pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();
