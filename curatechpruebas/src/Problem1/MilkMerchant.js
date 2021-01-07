import React,{useState} from 'react';
import TransformData from './TransformData';
import ErrorMessage from './ErrorMessage';

const MilkMerchant = (n,ar) =>{
    var Conf = false;
    var ArrayAux=[];
    var sum = 0;
    var Pares = 0;

    [n,ar] = TransformData(n,ar);
    Conf = ErrorMessage(n,ar)
    
    ArrayAux.push([{'Numero' :ar[0] , 'Sum':0}]);
    if(!Conf) return;
    
    for (let x = 0; x < ar.length; x++) {
        sum = 0;
        for (let y = 0; y < ArrayAux.length; y++) {
            
            if(ar[x] == ArrayAux[y][0].Numero){

                ArrayAux[y][0].Sum = ArrayAux[y][0].Sum + 1;
                
            }else{
                sum++;
            }
        }
        if(sum == ArrayAux.length){
            ArrayAux.push([{'Numero': ar[x] ,'Sum':1}]);
        }
    }
    for (let x = 0; x < ArrayAux.length; x++) {
        if( !(ArrayAux[x][0].Sum == 1)){

            if( ArrayAux[x][0].Sum % 2 != 0){

                Pares = Pares + ((ArrayAux[x][0].Sum - 1) / 2 );

            }else{

                Pares = Pares + ((ArrayAux[x][0].Sum) / 2 );
            }
            
        }
        
    }
    return Pares

}


export default MilkMerchant;