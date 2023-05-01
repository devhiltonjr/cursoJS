function zeroAesquerda(num) {
    return num >= 10 ? num : `0${num}`;
}


function formatDate(data){
    //console.log(date)
    const dia =   zeroAesquerda(data.getDate());
    const mes =   zeroAesquerda(data.getMonth()+1);
    const ano =   zeroAesquerda(data.getFullYear());
    const hora =  zeroAesquerda( data.getHours());
    const min =   zeroAesquerda(data.getMinutes());
    const seg =   zeroAesquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const data = new Date();

const dataBrasil = formatDate(data);

console.log(dataBrasil);

