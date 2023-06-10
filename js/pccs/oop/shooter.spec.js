import { Shooter } from './shooter';

describe('Shooter level 4', () => {
  describe('Stance Standing', () => {
    const sal = 10;

    it('should give alm mod', () => {
      const shooter = new Shooter({ sal, stance: 'standing' });
      expect(shooter.getAlmMod()).toBe(10);
    });

    it('should give braced alm mod', () => {
      const shooter = new Shooter({ sal, stance: 'standing' });
      expect(shooter.getBracedAlmMod()).toBe(14);
    });
  });

  describe('Stance Kneeling', () => {
    const sal = 10;

    it('should give alm mod', () => {
      const shooter = new Shooter({ sal, stance: 'kneeling' });
      expect(shooter.getAlmMod()).toBe(13);
    });

    it('should give braced alm mod', () => {
      const shooter = new Shooter({ sal, stance: 'kneeling' });
      expect(shooter.getBracedAlmMod()).toBe(15);
    });
  });

  describe('Stance Prone', () => {
    const sal = 10;

    it('should give alm mod', () => {
      const shooter = new Shooter({ sal, stance: 'prone' });
      expect(shooter.getAlmMod()).toBe(16);
    });

    it('should give braced alm mod', () => {
      const shooter = new Shooter({ sal, stance: 'prone' });
      expect(shooter.getBracedAlmMod()).toBe(17);
    });
  });
});

describe('Shooter level 1', () => {
  describe('Stance Standing', () => {
    const sal = 5;

    it('should give alm mod', () => {
      const shooter = new Shooter({ sal, stance: 'standing' });
      expect(shooter.getAlmMod()).toBe(5);
    });

    it('should give braced alm mod', () => {
      const shooter = new Shooter({ sal, stance: 'standing' });
      expect(shooter.getBracedAlmMod()).toBe(9);
    });
  });

  describe('Stance Kneeling', () => {
    const sal = 5;

    it('should give alm mod', () => {
      const shooter = new Shooter({ sal, stance: 'kneeling' });
      expect(shooter.getAlmMod()).toBe(8);
    });

    it('should give braced alm mod', () => {
      const shooter = new Shooter({ sal, stance: 'kneeling' });
      expect(shooter.getBracedAlmMod()).toBe(10);
    });
  });

  describe('Stance Prone', () => {
    const sal = 5;

    it('should give alm mod', () => {
      const shooter = new Shooter({ sal, stance: 'prone' });
      expect(shooter.getAlmMod()).toBe(11);
    });

    it('should give braced alm mod', () => {
      const shooter = new Shooter({ sal, stance: 'prone' });
      expect(shooter.getBracedAlmMod()).toBe(12);
    });
  });
});