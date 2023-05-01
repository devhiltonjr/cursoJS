function zeroAesquerda(num) {
    return num >= 10 ? num : `0${num}`;
}
function showTime(){
    var time = new Date(); 
    var mes = time.getMonth() 
    var diaM = time.getDate();
    var ano = time.getFullYear(); 
     var hour = time.getHours();
     var minute = time.getMinutes();
     var second = time.getSeconds();
     var  diaSemana = time.getDay()

     if(hour < 10) hour = '0'+ hour;
     if(minute < 10) minute ='0'+ minute;
     if(second < 10)second =' 0' + second;
     
    //Dia da semana 
     if(diaSemana === 0) diaSemana ='Domingo'
     if(diaSemana === 1) diaSemana ='Segunda-feira'
     if(diaSemana === 2) diaSemana ='Terça-feira'
     if(diaSemana === 3) diaSemana ='Quarta-feira'
     if(diaSemana === 4) diaSemana ='Quinta-feira'
     if(diaSemana === 5) diaSemana ='Sexta-feira'
     if(diaSemana === 6) diaSemana ='Sábado'
     
     //Mes

     if(mes === 0) mes = 'Janeiro';
     if(mes === 1) mes = 'Fevereiro';
     if(mes === 2) mes = 'Março';
     if(mes === 3) mes = 'Abril';
     if(mes === 4) mes = 'Maio';
     if(mes === 5) mes = 'Junho';
     if(mes === 6) mes = 'Julho';
     if(mes === 7) mes = 'Agosto';
     if(mes === 8) mes = 'Setembro';
     if(mes === 9) mes = 'Outubro';
     if(mes === 10) mes = 'Novembro';
     if(mes === 11) mes = 'Dezembro';

     

     var tempo = `${diaSemana}, ${diaM} de ${mes} de  ${ano}  ${hour}:${minute}:${second}`;

     document.getElementById('timer').innerHTML = tempo;    
 }

function initTime(){
setInterval(showTime, 1000);
}


