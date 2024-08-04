// Función para cantidad de likes
const likes = function(numero = new Number){
    vr = [1000,10000,100000,1000000]
    if(numero < vr[0]){
        return `${numero}`
    }
    else if(numero >= vr[0] && numero < vr[1]){
        return `${Math.floor(numero / vr[0])}K`;
    }
    else if(numero >= vr[1] && numero < vr[2]){
        return `${Math.floor(numero / vr[0])}K`;
    }
    else if(numero >= vr[2] && numero < vr[3]){
        return `${Math.floor(numero / vr [2])}K`;
    }
    else{
        return `${Math.floor(numero / vr [3])}M`;
    }
}
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"