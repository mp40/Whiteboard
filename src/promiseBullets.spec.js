const {loadRifle, fireBurst, removeMagFromPouch, chargeRifle} = require('./promiseBullets')

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

describe('removing new magazine from pouch',()=>{
    it('should remove a new magazine from pouch', async ()=>{
        const data = await removeMagFromPouch();
        expect(data).toEqual("fresh mag removed from pouch")
    })
})

describe('cocking/charging weapon',()=>{
    it("take 1 second to charge/cock weapon", async ()=>{
        const data = await chargeRifle();
        expect(data).toEqual("weapon ready")
    })
})