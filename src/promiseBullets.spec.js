const {operateRifle} = require('./promiseBullets')

describe('loading the rifle', () => {
    it("should wait till the rifle is loaded - asymc/await", async () => {
        const data = await operateRifle();
        expect(data).toEqual('loaded')
    })

    it("should wait till the rifle is loaded - promise", () => {
        const promise = operateRifle();
        return promise.then(data => {
            expect(data).toEqual('loaded')
        })
    })
}) 