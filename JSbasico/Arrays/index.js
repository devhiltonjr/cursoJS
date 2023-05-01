

// arrays ou listas deve está entre conchetes e separados por virgula
const alunos = [ 
  "Luiz","Maria", "João"
]
alunos[0] = 'Eduardo'; //Altera, reescreve o conteudo substituindo o antigo
alunos[3] = 'Mariana' // adicionar
alunos[4] = 'Junga'

//fatiamento de elemento igual a de strings

console.log(alunos.slice(0, 2))



alunos.push('Marcos') //adicionar elementos na array no final

alunos.unshift('Goku')//Adiciona um elemento no começo

alunos.shift();//Remove do começo

const removido = alunos.shift();


alunos.pop(); //Remove um elemento do final da array
//const removido = alunos.pop(); remove o elemento do final da array

delete alunos[1];// deleta o conteudo do objeto da array porem mantem o espaço vazio para que possa ser adicionado outra coisa no mesmo lugar
console.log(alunos)

console.log(`Nome: ${alunos}`);// acessando todos os elementos

console.log(alunos[1]) // acessa o aluno da posição 2

//alunos[alunos.length] = 'Fabio'
console.log(removido) // exibe o item removido

// quando buscar um elemento que não existe ele retorna undefined

//identifica que é um object
console.log(typeof alunos);

/*

Exemplos:

Isso pode

const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]
 
Isso NÃO pode

const array = [1, 2, 3, 4, 5];
array = 'Legal'; // Assignment to constant variable.
*/


