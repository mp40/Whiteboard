const {operateRifle, reloadRifle} = require('./promiseBullets')

describe('reloadRifle function',()=>{
    it('should return the same value as entered', async ()=>{
        const reload = await reloadRifle(8)
        expect(reload).toEqual(8)
    })
})

describe('loading the rifle', () => {
    it("should wait till the rifle is loaded", async () => {
        const data = await operateRifle();
        expect(data).toEqual('loaded')
    })
})