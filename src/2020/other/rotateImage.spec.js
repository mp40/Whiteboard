import { rotate } from './rotateImage';

describe('rotate image', () => {
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
})