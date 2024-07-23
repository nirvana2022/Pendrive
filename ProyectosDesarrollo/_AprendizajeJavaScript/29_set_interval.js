// Función set Interval -> Para ejecutar una función callback cada segundo
let reloj = () =>{
    let fecha = new Date();
    console.log(`${fecha.getHours}:${fecha.getMinutes}:${fecha.getSeconds}`)
}
setInterval(reloj,1000);