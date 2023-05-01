// string são indecsadas
             //   012456789
let umaString3 = "uma texto";
console.log(umaString3.charAt(2));


let umaString = "uma\"texto\""; // a \ é utilizada como character de espaço

let umaString2 = "uma\\texto\""; // se quiser usar uma barra invertida tem que usar duas barras


console.log(umaString);
console.log(umaString2);

// concatenação

console.log(umaString.concat('em um lindo dia'));// usandp concat
console.log(umaString +'em um lindo dia'); // usnado +
console.log(`${umaString} em um lindo dia`); // usando template strings

 
console.log(umaString.match(/[a-z]/g));// expresão regular

console.log(umaString.search(/[a-z]/g));// indica onde o indice foi encontrado

console.log(umaString.replace('um','Outra'));// subistitui uma string por outra ou ponto ou virgula
//exemplo

let umaString4 = "O rato roeu a roupa do rei de roma.";

console.log(umaString4.replace(/r/, '#'));// subistitui uma string por outra a string que vai ser substituida tem que está entre as /r/
// se colocar o 'g' depois das barras ele repete exeplo:

console.log(umaString4.replace(/r/g, '#'));// agora suando 'g' depois das barras.

// tamanho da STRING

console.log(umaString4.length); // dis a quantidade de characters tem a strings

// FATIAR A STRING
   //                       começa    tremina
console.log(umaString4.slice(2       ,      6));// vai puxar um trecho da string

// slice com negativos

console.log(umaString4.slice(-5));//ele pega a string de tras para frente quanto menos maior a quantidade de characters
console.log(umaString4.slice(30));// forma positiva




