const findSignal = require('./sos')

describe('passing Rektor test',()=>{
    describe('finding 16 bytes long message with no trepeating characters',()=>{
        const result = '1234567890sixten'
        it('should work with double at front',()=>{
            const message = '11234567890sixten'
            expect(findSignal(message)).toEqual(result)
        })
    })
})