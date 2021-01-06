import React from 'react'

const CountingValleys = (Steps,StringPath)=>{
    var Conf = false;
    var sumStringPath = 0;
    var numberOfValle = 0;
    var detectValle = true;


    for (let x = 0; x < Steps; x++) {
        sumStringPath = sumStringPath + StringPath[x][0].valor;
        console.log(sumStringPath)
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