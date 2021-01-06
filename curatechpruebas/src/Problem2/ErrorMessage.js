import React from 'react'

const ErrorMessage = (Steps,StringPath) => {

    if(!Number.isInteger(Steps)){
        alert('Introdusca un valor o un valor tipo entero en los pasos');
        return false;
    } 
    if(!(Steps > 1 && Steps<=1000000) ) {
        alert('Introdusca un valor entre 2 y 10^6 en los pasos');
        return false;
    }
    for (let x = 0; x < StringPath.length; x++) {
        if(StringPath[x][0].valor == 'x'){
            alert('Revise que todos los valores del arreglo sean Letras');
            return false;
        }
        
    }

    if(!(Steps === StringPath.length)){
        alert('Introdusca n y el tamaño de ar iguales');
        return false;
    }

    return true;
}
export default ErrorMessage;