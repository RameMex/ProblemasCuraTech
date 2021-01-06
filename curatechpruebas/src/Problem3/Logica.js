import React from 'react'

const Logica = ()=>{
    var arr = [];   
    arr = Array.from({ length: 100 }, (v, i) => i+1);
    console.log(arr)
    for (let x = 1; x <= arr.length; x++) {
        if(((arr[x] % 3) == 0) && ((arr[x] % 5) == 0) ){
            console.log('ss')
            arr.splice(x, 1, 'FizzBuzz');
        }
        if((arr[x] % 3) == 0){
            arr.splice(x, 1, 'Fizz');
        }   
        if((arr[x] % 5) == 0){
            arr.splice(x, 1, 'Buzz');
        }
        
        
    }
    console.log(arr)
    return(
        <div>
            
        </div>
    )
}
export default Logica;