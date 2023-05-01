//complexa

/*const h1 = document.querySelector('.container h1');
h1.innerHTML ='Só para se ver';
const data = new Date();
h1.innerHTML = data.toString();

function getDiaSemanaTexto(diaSemana) {


    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo,';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = ',';
            return diaSemanaTexto;

    }


}
h1.innerHTML += getDiaSemanaTexto(data.getDay())

function getMesAnoTexto(dataMes) {


    switch (dataMes) {
        case 0:
            mesAno = 'Janeiro';
            return mesAno;
        case 1:
            mesAno = 'Fevereiro';
            return mesAno;
        case 2:
            mesAno = 'Março';
            return mesAno;
        case 3:
            mesAno = 'Abril';
            return mesAno;
        case 4:
            mesAno = 'Maio';
            return mesAno;
        case 5:
            mesAno = 'Junho';
            return mesAno;
        case 6:
            mesAno = 'Julho';
            return mesAno;
        case 7:
            mesAno = 'Agosto';
            return mesAno;
        case 8:
            mesAno = 'Setembro';
            return mesAno;
        case 9:
            mesAno = 'Outubro';
            return mesAno;
        case 10:
            mesAno = 'Novembro';
            return mesAno;
        case 11:
            mesAno = 'Dezembro';
            return mesAno;
        default:
            mesAno = ',';
            return mesAno;
    }


}

function criaData(data){
    const diaSemana = data.getDay();
    const dataMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana)
    const nomeMes = getMesAnoTexto(dataMes)
    return( `${nomeDia}, ${data.getDate()} ${nomeMes}`+`
    de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`)
}
h1.innerHTML = criaData(data)

console.log()
*/

//mais simplificada
const h1 = document.querySelector('.container h1');
const data = new Date();
const opcao ={
    dateStyle: 'full',
    timeStyle: 'short'
}
h1.innerHTML = data.toLocaleString('pt-BR',opcao);