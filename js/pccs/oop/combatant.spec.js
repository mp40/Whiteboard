import { Combatant } from './combatant'

describe('The Combatant', () => {
    it('should get SAL 10 if constructed with sal of 10', () => {
        const combatant = new Combatant(10)

        expect(combatant.getSal()).toBe(10)
    })

    it('should get SAL 7 if constructed with sal of 7', () => {
        const combatant = new Combatant(7)

        expect(combatant.getSal()).toBe(7)
    })
})

