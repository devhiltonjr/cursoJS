//argumentos que sustentão todos os argumentos enviado


// function funcao(a,b,c){
//     let total = 0;
//     //arguments só funciona em função normal e não funciona em arrow function
// for(let argumento of arguments){
// total += argumento;
// }
// console.log(total,a,b,c)

// }
// funcao(1,2,3,4,5,6,7);


// function funcao(a,b,c,d,e,f){

// console.log( a,b,c,d,e,f)
// }
// funcao(1,2,3)


// function funcao(a,b){
//   b=b || 0;
//     console.log( a+b)
// }
//     funcao(1)



// function funcao(a,b = 2, c = 4){
//     b=b || 0;
//       console.log( a+b+c)
//   }
//       funcao(2, undefined ,20)

// function funcao({nome, sobrenome, idade}){
//     console.log(`NOme:${nome}`,`Sobrenome: ${sobrenome}`,`idade:${ idade}`);
// }
// let object ={nome:'Luiz', sobrenome: 'Otavio', idade: 20}
// funcao(object)

// function funcao([valor1,valor2,valor3,valor4]){
//     console.log(valor1,valor2,valor3,valor4);
// }


// function funcao(operador, acumulador, ...numeros){
//   for(let numero of numeros){
//     console.log(numero);
//   }
// }
// funcao('+', 0, 20, 30, 40, 50)
                              //              |
// rest operate                          rest v
// function funcao(operador, acumulador, ...numeros){/* sempre deve ser o ultimo */
//     for(let numero of numeros){
//         if(operador ==='+')acumulador += numero;
//         if(operador ==='-')acumulador -= numero;
//         if(operador ==='/')acumulador /= numero;
//         if(operador ==='*')acumulador *= numero;

    
//     }
//     console.log(acumulador);
//   }
//   funcao('*', 1, 20, 30, 40, 50)
  


// const conta = function(operador, acumulador, ...numeros){/* sempre deve ser o ultimo */
//     for(let numero of numeros){
//         if(operador ==='+')acumulador += numero;
//         if(operador ==='-')acumulador -= numero;
//         if(operador ==='/')acumulador /= numero;
//         if(operador ==='*')acumulador *= numero;

    
//     }
//     console.log(acumulador);
//   }
//   conta('*', 1, 20, 30, 40, 50)
  

//function especial
// function funcao(operador, acumulador, ...numeros){
 
//     console.log(arguments);
//   }
//   funcao('*', 1, 20, 30, 40, 50)
  // para ser rest operation tem que ter os 3 pontinhos ...args
// function funcao(...args){
 
//     console.log(args);
//   }
//   funcao('*', 1, 20, 30, 40, 50)
  