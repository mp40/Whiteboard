const {
    rotateLeft
} = require('./leftRotation')

describe.skip('Rotate the array left', () => {
    it('should rotate the array once', () => {
        expect(rotateLeft('5 1', '1 2 3 4 5')).toEqual('2 3 4 5 1')
    })
    it('should rotate the array four times', () => {
        expect(rotateLeft('5 4', '1 2 3 4 5')).toEqual('5 1 2 3 4')
    })
})