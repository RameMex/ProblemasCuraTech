import TransformData from '../TransformData'
import ErrorMessage from '../ErrorMessage'
import CountingValleys from '../CountingValleys'
const arrs = 'DDUUU';
const ns = '5';
const arr = [
    [ { valor: -1 } ], 
    [ { valor: -1 } ],
    [ { valor:  1 } ],
    [ { valor:  1 } ],
    [ { valor:  1 } ]
];
const n = 5;
describe('PROBANDO PROBLEMA 2',()=>{
    test('Confirmando que los datos introducidos sean correctos debe retornar true',()=>{
        expect(ErrorMessage(n,arr)).toBeTruthy();
    })
    test('Esperando que los valores retornados esten transformados',()=>{
        expect(TransformData(ns,arrs)).toEqual([n,arr]);
    })
    test('Esperando que el resultado sea 1 con la entrada predefinida',()=>{
        expect(CountingValleys(ns,arrs)).toEqual(1);
    })
})