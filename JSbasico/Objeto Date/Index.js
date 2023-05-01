//new é uma função construtora
/*
const tresHoras = 60*60*3*1000;// tres Horas em milesimos de segundo
const umDia = 60*60*24*1000; // um dia em milesimos de segundo

const data = new Date(0 + tresHoras + umDia);

console.log(data.toString()); //
*/
                    //ano- mes, data, hora, minuto, segundo   Todos numbers
//const data = new Date(2023,  3, 20   , 15  , 14,    27);// sempre separado por virgula, pelo menos tem que ter dois parametros 0 janeiro e 11 dezembro
//const data = new Date('2023-01-30 20:20:59.100');
const data = new Date();// puxei a data atual pelos milesimos
//console.log('Dia', data.getDate(), 'Hora',data.getHours(), 'Minutos',data.getMinutes(),'Segundos', data.getSeconds()); //

console.log('Dia', data.getDate()); //
console.log('Mês', data.getMonth()); //
console.log('Ano', data.getFullYear() ); //
console.log('Hora',data.getHours()); //
console.log('Min',data.getMinutes()); //
console.log('Seg',data.getSeconds()); //
console.log('ms',data.getMilliseconds()); //
console.log('Dia semana',data.getDay()); //
console.log(data.toString());


//Buscar Hora atual do sistema
console.log(Date.now()) // as horas do marco zero do unix contado em milesimos de segundos


