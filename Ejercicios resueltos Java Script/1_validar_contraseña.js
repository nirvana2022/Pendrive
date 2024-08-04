// Función en java script para validar contraseña
const validarContraseña  = function(contraseña){
    let contraseña_bd = '2Fj(jjbFsuj'
    if (contraseña === contraseña_bd){
        validación = true
        return validación
    }
    else if(contraseña === 'eoZiugBf&g9'){
    }
    else{
        validación = false
    }    
    return validación
}
console.log(validarContraseña("2Fj(jjbFsuj"));
console.log(validarContraseña("eoZiugBf&g9"));
console.log(validarContraseña("hola"))
console.log(validarContraseña(""))