import React from 'react'

const TransformData = (n,ar) =>{
    n = parseInt(n) // Transforma de string a number {n}

    ar = ar.split(' '); // Transforma a array el string separado por espacios
    ar = ar.map(Number); // Transforma a number los string del array

    console.log(n)
    console.log(ar)

    return [n,ar]
}
export default TransformData;