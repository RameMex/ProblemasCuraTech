<h1 align = center >Rene Alberto Meza Escamilla</h1>

## Como Solucione los problemas
Para solucionar los problemas y matener un codigo legible decidi separarlo en 4 archivos fundamentales.
* `Index.js` Habia un index para cada problema. Simplemente se encargaria de la UI, por lo cual quite la logica del problema y lo maneje en una funcion externa.
* `(MilkMerchant.js, CountingValleys.js o Logica.js)` Cada uno de estos maneja la logica necesaria para resolver cada uno de los problemas.
* `(TransformData.js)` La accion principal del archivo es manejar los datos recien adquiridos de los input para poder transformarlos al formato necesario.
* `(ErrorMessage)` Aqui es donde yo manejo los errores de las entradas de datos, en caso de que hubiese alguna clase de error este los detectara y lanzara una alerta.


## Problema 1
    `MilkMerchant.js` Centrandome en la logica pura, separe los problemas en 2.
* Detectar la cantidad de elementos por cada etiqueta de cada uno.

En el codigo de abajo se puede observar como agrupe en un arreglo 2 valores, uno era la etiqueta el cual podia ser cualquier numero del arreglo `Ejemplo: (10,20,5)` y la otra opcion llamada Sum era la cantidad de elemetos de la misma etiqueta, en pocas palabras cuantas veces se repetia cada etiqueta.
``` js
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
```
Ya con esta informacion pase al siguiente punto.

* Mediante la cantidad de elementos por etiqueta sacar los pares de cada una.
``` js
  for (let x = 0; x < ArrayAux.length; x++) {
        if( !(ArrayAux[x][0].Sum == 1)){
            if( ArrayAux[x][0].Sum % 2 != 0){
                Pares = Pares + ((ArrayAux[x][0].Sum - 1) / 2 )
            }else{
                Pares = Pares + ((ArrayAux[x][0].Sum) / 2 )
            }
            
        }
        
    }
 
```
Aqui esta recorriendo el arreglo y busca el residuo, si el residuo es diferente a 0 quiere decir que es un numero impar por lo cual solo se necesita quitar `-1` solo si es diferente a 1 y ya con esto solo restaba dividerlo entre `2` y la division restante era el numero de par, por lo cual solo restaba con sumarlos cada vez que salia un par. 
## Condiciones a considerar.
| Condicion                                         | Variables Principales                        |
|:--------------------------------------------------|:---------------------------------------------|
| 1 ≤ n     ≤ 100                                   |(Input)  n:  the number of socks in the pile  |
| 1 ≤ ar[i] ≤ 100                                   |(Input)  ar: the colors of each sock          |
| where 0 ≤ i < n                                   |(Output) p:  number of matching pairs         |
