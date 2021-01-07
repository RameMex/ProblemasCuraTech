import React from 'react'

const ErrorMessage = (n,ar) => {
    
    if(!Number.isInteger(n)){
        alert('Introdusca un valor o un valor tipo numerico en las Cantidad de cajas de leche');
        return false;
    } 
    if(!(n >= 1 && n<=100) ) {
        alert('Introdusca un valor entre 1 y 100 en las cajas de leche') ;
        return false;
    }
    for (let x = 0; x < ar.length; x++) {
        if(!(Number.isFinite(ar[x]) && ar[x] > 0)){
            alert('Revise que todos los valores del arreglo sean numeros')
            return false
        }
        
    }

    if(!(n === ar.length)){
        alert('Introdusca n y el tamaño de ar iguales')
        return false;
    }

    for (let x = 0; x < ar.length; x++) {
        if(!(ar[x] >= 1 && ar[x]<=100)){
            alert('Revise que todos los numeros del arreglo esten entre el 1 y 100')
            return false;
        }
        
    }

    return true;
}
export default ErrorMessage;