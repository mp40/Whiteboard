import { sortColors } from './sortColors';

describe('sort colors', () => {
    it('it should sort colors', ()=> {
        const input = [2, 0, 2, 1, 1, 0];
        const result = [0, 0, 1, 1, 2, 2];
        sortColors(input);
        expect(input).toEqual(result);
    })
})