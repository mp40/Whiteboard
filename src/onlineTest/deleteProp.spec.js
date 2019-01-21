const {deleteProp} = require('./deleteProp')

describe('deleting prop from object',()=>{
    const obj={
        key1: 1,
        key2: 2
    }
    it('should return true if the prop exists',()=>{
        expect(deleteProp(obj, 'key1')).toEqual(true)
        expect(deleteProp(obj, "key3")).toEqual(false)
    })
    it('should delete the property if it exists',()=>{
        deleteProp(obj,"key1")
        expect(obj).toEqual({key2 :2})
    })
})