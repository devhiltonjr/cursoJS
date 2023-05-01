/*
&& -> false && true ->false "O valor mesmo"
|| ->

FALSY
*false
0
aspas vazias são valores falsos
''
""
``
null / undefined
NaN
Qualquer coisa diferente des valores avalia em true em JS
*/


//console.log('Hilton Freitas' && undefined && 'Maria')

function falarOi(){
    return'oi';
}

const vaiExecutar = false;
 console.log(vaiExecutar && falarOi())

