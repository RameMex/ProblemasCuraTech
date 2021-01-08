import TransformData from '../TransformData'
import ErrorMessage from '../ErrorMessage'
import MilkMerchant from '../MilkMerchant'
const arrs = '2 3 2 2 3';
const ns = '5';
const arr = [2, 3, 2, 2, 3];
const n = 5;
describe('PROBANDO PROBLEMA 1',()=>{
    test('Confirmando que los datos introducidos sean correctos debe retornar true',()=>{
        expect(ErrorMessage(n,arr)).toBeTruthy();
    })
    test('Esperando los datos transformados de string a number y de string a array',()=>{
        expect(TransformData(ns,arrs)).toEqual([n,arr]);
    })
    test('Esperando el resultado sea 2',()=>{
        expect(MilkMerchant(ns,arrs)).toEqual(2);
    })
})