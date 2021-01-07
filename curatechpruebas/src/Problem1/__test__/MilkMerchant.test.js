import ErrorMessage from '../ErrorMessage';

const arr = [1, 2, 1, 3, 4];
const n = 5;

describe('Problema 1 ', () => {

    it('Validate size of colors array', () => {
      expect(ErrorMessage.an(arr)).toBe(true);
    });
  
});