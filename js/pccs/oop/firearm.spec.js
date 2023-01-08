import { Firearm } from './firearm'
import * as data from '../data'
import { serializeGunData } from '../helper';

describe('The M14 Firearm', () => {
    const m14 = new Firearm(serializeGunData(data.m14))

    it('should have a name', () => {
        expect(m14.getName()).toBe('M14')
    })

    it('should have a kd value', () => {
        expect(m14.getKd()).toBe(10)
    })

    it('should have a sab value', () => {
        expect(m14.getSab()).toBe(5)
    })

    it('should get max aims', () => {
        expect(m14.getMaxAimCount()).toBe(12)
    }) 

    it('should get aim time 1', () => {
        expect(m14.getAim(1)).toBe(-24)
    })

    it('should get aim time 6', () => {
        expect(m14.getAim(6)).toBe(-5)
    })

    it('should get aim time 10', () => {
        expect(m14.getAim(10)).toBe(-1)
    })

    it('should get aim time 11', () => {
        expect(m14.getAim(11)).toBe(-1)
    })

    it('should get aim time 12', () => {
        expect(m14.getAim(12)).toBe(0)
    })
})

describe('The Glock Firearm', () => {
    const glock = new Firearm(serializeGunData(data.glock))

    it('should have a name', () => {
        expect(glock.getName()).toBe('Glock Model 17')
    })

    it('should get max aims', () => {
        expect(glock.getMaxAimCount()).toBe(6)
    }) 

    it('should get aim time 1', () => {
        expect(glock.getAim(1)).toBe(-16)
    })

    it('should get aim time 6', () => {
        expect(glock.getAim(6)).toBe(-7)
    })

    it('should get aim time 7', () => {
        expect(glock.getAim(7)).toBe(-7)
    })

    it('should get aim time 12', () => {
        expect(glock.getAim(12)).toBe(-7)
    })
})