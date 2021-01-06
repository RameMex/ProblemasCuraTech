import React from 'react';
import TransformData from './TransformData';
import ErrorMessage from './ErrorMessage'

const CountingValleys = (Steps,StringPath)=>{
    var Conf = false;
    var sumStringPath = 0;
    var numberOfValle = 0;
    var detectValle = true;
    [Steps,StringPath] = TransformData(Steps,StringPath);
    Conf = ErrorMessage(Steps,StringPath);
    if(!Conf) return

    for (let x = 0; x < Steps; x++) {
        sumStringPath = sumStringPath + StringPath[x][0].valor;
        if(sumStringPath >= 0  && detectValle == false){
            detectValle = true;
            numberOfValle = numberOfValle + 1;
        }
        if(sumStringPath < 0 && detectValle == true){
            detectValle = false;
        }
    }
    console.log(numberOfValle)
}
export default CountingValleys;