import { rotate } from './rotateImage';

describe('rotate image', () => {
    it('should rotate 1 x 1 matrix', () => {
        const input = [[1]];
        const output = [[1]];

        expect(rotate(input)).toEqual(output);
    })

    it('should rotate 2 x 2 matrix', () => {
        const input = [
            [1,2],
            [3,4]
        ];
        const output = [
            [3,1],
            [4,2]
        ]

        expect(rotate(input)).toEqual(output);
    })

    it('should rotate 3 x 3 matrix', () => {
        const input = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ];
        const output = [
            [7,4,1],
            [8,5,2],
            [9,6,3]
        ]

        expect(rotate(input)).toEqual(output);
    })

    it('should rotate 4 x 4 matrix', () => {
        const input = [
            [1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,16]
        ];
        const output = [
            [13,9,5,1],
            [14,10,6,2],
            [15,11,7,3],
            [16,12,8,4]
        ]

        expect(rotate(input)).toEqual(output);
    })
})