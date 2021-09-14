import { sortColors } from './sortColors';

describe('sort colors', () => {
    it('it should sort an even amount of colors', ()=> {
        const input = [2, 0, 2, 1, 1, 0];
        const result = [0, 0, 1, 1, 2, 2];
        sortColors(input);
        expect(input).toEqual(result);
    })
    it('it should sort an odd amount of colors', ()=> {
        const input = [2, 0, 1];
        const result = [0, 1, 2];
        sortColors(input);
        expect(input).toEqual(result);
    })
    it('it should sort [1, 2, 0]', ()=> {
        const input = [1, 2, 0];
        const result = [0, 1, 2];
        sortColors(input);
        expect(input).toEqual(result);
    })
})