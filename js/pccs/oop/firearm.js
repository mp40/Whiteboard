export class Firearm {
    constructor({name, aims, kd, sab}) {
        this.name = name;
        this.aims = aims;
        this.kd = kd;
        this.sab = sab;
    }

    getName() {
        return this.name;
    }

    getMaxAimCount() {
        return this.aims.length;
    }

    getAim(count) {
        const max = this.getMaxAimCount();

        if(count > max) {
            return this.aims[max - 1]
        }

        return this.aims[count - 1];
    }

    getKd() {
        return this.kd;
    }

    getSab() {
        return this.sab;
    }
}