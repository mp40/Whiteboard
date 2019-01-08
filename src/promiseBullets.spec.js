const {loadRifle, fireBurst} = require('./promiseBullets')

describe('loading the rifle', () => {
    it("should wait till the rifle is loaded - asymc/await", async () => {
        const data = await loadRifle();
        expect(data).toEqual('loaded')
    })

    it("should wait till the rifle is loaded - promise", () => {
        const promise = loadRifle();
        return promise.then(data => {
            expect(data).toEqual('loaded')
        })
    })
})

describe('firing full auto burst from rifle',()=>{
    it("should fire value of key rateOfFire in 500ms", async ()=> {
        const data = await fireBurst();
        expect(data).toEqual("BANG\nBANG\nBANG\nBANG\nBANG\n")
    })
})