 const numero = Number(prompt('Digite um numero:'))
 const numeroTitulo =  document.getElementById('numero-titulo');
 const texto = document.getElementById('texto');

 numeroTitulo.innerHTML = numero;

 texto.innerHTML ='';//limpa o texto existente no html

texto.innerHTML += `A raiz quadra é: ${Math.sqrt(numero)}<br />`;
texto.innerHTML +=  `${numero} é inteiro: ${Number.isInteger(numero)}<br />`
texto.innerHTML +=  `É NaN: ${Number.isNaN(numero)}<br />`;
texto.innerHTML += `Arredondando para baixo: ${Math.floor(numero)}<br />`
texto.innerHTML += `Arredondando para cima: ${Math.ceil(numero)}<br />`
texto.innerHTML += `Arredondando automaticamente: ${Math.round(numero)}<br />`
texto.innerHTML += `Com duas casas deciamais: ${numero.toFixed(2)}`

