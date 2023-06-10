export class Shooter {
    constructor({ sal, stance }) {
      this.sal = sal;
      this.stance = stance;
    }
  
    getAlmMod() {
      const stance = Unbraced.for({ sal: this.sal, stance: this.stance });
      return stance.getMod();
    }
  
    getBracedAlmMod() {
      const stance = Braced.for({ sal: this.sal, stance: this.stance });
      return stance.getMod();
    }
  }
  
  class ShooterStance {
    constructor() {
      this.mod = 0;
    }
  
    getMod() {
      return this.mod;
    }
  }
  
  class Unbraced extends ShooterStance {
    static for({ sal, stance }) {
      let stanceClass;
      switch (stance) {
        case 'prone':
          stanceClass = ShooterProne;
          break;
        case 'kneeling':
          stanceClass = ShooterKneeling;
          break;
        default:
          stanceClass = ShooterStanding;
          break;
      }
  
      return new stanceClass(sal);
    }
  }
  
  class Braced extends ShooterStance {
    static for({ sal, stance }) {
      let stanceClass;
      switch (stance) {
        case 'prone':
          stanceClass = ProneBraced;
          break;
        case 'kneeling':
          stanceClass = KneelingBraced;
          break;
        default:
          stanceClass = StandingBraced;
          break;
      }
  
      return new stanceClass(sal);
    }
  }
  
  class ShooterStanding extends ShooterStance {
    constructor(sal) {
      super();
      this.mod = sal;
    }
  }
  
  class ShooterKneeling extends ShooterStance {
    constructor(sal) {
      super();
      this.mod = sal + 3;
    }
  }
  
  class ShooterProne extends ShooterStance {
    constructor(sal) {
      super();
      this.mod = sal + 6;
    }
  }
  
  class StandingBraced extends ShooterStance {
    constructor(sal) {
      super();
      this.mod = sal + 4;
    }
  }
  
  class KneelingBraced extends ShooterStance {
    constructor(sal) {
      super();
      this.mod = sal + 5;
    }
  }
  
  class ProneBraced extends ShooterStance {
    constructor(sal) {
      super();
      this.mod = sal + 7;
    }
  }