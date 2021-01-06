import React from 'react'

const TransformData = (Steps,StringPath) =>{
    var StringPathToNumbers = []
    Steps = parseInt(Steps) // Transforma de string a number {n}

    StringPath = StringPath.split(''); // Transforma a array el string separado por espacios
    for (let x = 0; x < StringPath.length; x++) {
        if(StringPath[x] == 'D'){
            StringPathToNumbers.push([{'valor': -1}]) 
        }
        if(StringPath[x] == 'U'){
            StringPathToNumbers.push([{'valor': 1}]) 
        }
        if(StringPath[x] != 'D' && StringPath[x] !='U'){
            StringPathToNumbers.push([{'valor': 'x'}]) 
        }
    }
    console.log(StringPathToNumbers)

    return [Steps,StringPathToNumbers]
}
export default TransformData