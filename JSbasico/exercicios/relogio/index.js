function zeroAesquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function AnoHora(anoHora) {   
    const ano = zeroAesquerda(anoHora.getFullYear());
    const hora = zeroAesquerda(anoHora.getHours());
    const min = zeroAesquerda(anoHora.getMinutes());
    const seg = zeroAesquerda(anoHora.getSeconds());
    return `${ano} ${hora}:${min}:${seg}`;
}
const dataHoraB = new Date();
const dataBtasil = AnoHora(dataHoraB);

function getDiaMes(diaMesData) {
    const diaM = zeroAesquerda(diaMesData.getDate());
    return `${diaM}`
}

const dataDia = new Date();
const diaMesConvertido = getDiaMes(dataDia);

function getDiaSemanaTexto(diaSemana) {


    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo,';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira,';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira,';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira,';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira,';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira,';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado,';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = ',';
            return diaSemanaTexto;

    }


}

const data = new Date();
let diaSemana = data.getDay();
const diaSemanaConvertido = getDiaSemanaTexto(diaSemana);

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
let mesAno = data.getDay();
const dataMesConvertido = getMesAnoTexto(mesAno);



console.log(diaSemanaConvertido, diaMesConvertido, dataMesConvertido, dataBtasil);

document.querySelector('.hora').innerHTML = `${diaSemanaConvertido}${ diaMesConvertido} de ${dataMesConvertido}  ${dataBtasil}`



