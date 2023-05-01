

/*function maiorNumero(x, y) { 
    if( x > y) return x;
    else return y;
}

console.log(maiorNumero(110,30));
*/

/*function maiorNumero(x, y) { 
    if( x > y) return x;
    else return y;
}
console.log(maiorNumero(110,30));
*/
/*
function maiorNumero(x, y) { 
 //   se x for > y e x não for y retorne! 
    return x > y ? x : y;
}
console.log(maiorNumero(110,200));
*/
//hero function      functior
/*const max2 = (x, y) => {
    return x > y ? x : y;
}
console.log(max2(300,200));
*/
//mesma coisa
        //      se x for >  y retorne x  senao retorne y
    //    ternario  se ? senao :
const max2 = (x, y) =>  x   >   y  ?   x   :         y;
console.log(max2(300,200));

/* Arrow functions => substitui a função tradicional 
uma função tradicional utiliza-se de  chaves exe:
normal
function max (x, y) { 
    return x > y ? x :y;
}
Arrow function

const max2 = (x, y) => x > y ? x : y;
console.log(max2(300,200));
*/