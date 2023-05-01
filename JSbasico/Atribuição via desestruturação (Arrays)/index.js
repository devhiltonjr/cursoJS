// rest, ...spread

//let a = 'A';                       /*vazio*/       /*vazio*/
//let b = 'B';
//let c = 'C';


/*const letras = [b,c, a];
[a,b,c] = letras;
console.log(a,b,c);
*/
                 //0  1  2  3  4  5  6  7  8  indice
   // let numeros = [1000,2000,  3000,  4000    , 5000,   6000     , 700, 800, 9800]; //valor
   //numeros = ['maria','ines', 'roberta','alisson','joana', 'fabio','marcelo','marcos','aurelio']// 
   //const [um, dois,tres, ...resto] = numeros; // dessa maneira a array recebe o valor de outra array. rest operations
                         /*vazio*/         /*vazio*/
//   const [um, ,tres, , cinco,seis,...resto] = numeros;// virgula vazia pila o valor do indice

//console.log(um,tres,cinco,resto); 

//console.log(um,dois,tres);
//console.log(resto);// resto é a variavel que armazenda os valores que ainda não foi atribuidos


//lista dentro de lista
      //indices    0         1          2
//const numeros = [[1,2,3], [4,5,6], [7,8,9]];
//

//atribuição via desistruturação
//removendo indice 1                               0        1         2
                             //const numeros = [[1,2,3], [4,5,6], [7,8,9]]; copia
//     esse metodo navega dentro das arrays que possui outras arrays dentro acessando a primeira array dentro da array numeros                                                                  0   1    2
//caminho do indice  pula o usando[, usando avirgula, usa[,, para pular os dois valores 0,1 , [,, seis]
//dessa maneira criou uma variavel dentro da array acessou o valor dentro da array 
//const[,[,, seis]] = numeros;


const numeros = [[1,2,3], [4,5,6], [7,8,9]];
const [lista1, lista2, lista3]= numeros;



console.log(numeros); // array global
console.log(lista1);//  array filha  da global
console.log(lista1[2])// acessando o valor da filha da array global do indice 2