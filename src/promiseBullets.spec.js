const operateRifle = require('./promiseBullets')

describe.only('loading the rifle', () => {
    it("should wait till the rifle is loaded", () => {
        expect(operateRifle()).toEqual('loaded')
    })
})