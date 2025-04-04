import { Hero } from '../models/hero.model';

export abstract class HeroDecorator extends Hero {
  protected decoratedHero: Hero;

  constructor(hero: Hero) {
    super(
      hero.name,
      hero.category,
      [...hero.abilities],
      hero.currentImage,
      { ...hero.imageVariants },
      hero.primaryColor,
      hero.secondaryColor,
      hero.basePower
    );
    this.decoratedHero = hero;
  }

  protected applyAbility(ability: string): void {
    const newImage = this.decoratedHero.imageVariants[ability];
    if (newImage) {
      this.currentImage = newImage;
    }
    if (!this.abilities.includes(ability)) {
      this.abilities.push(ability);
    }
  }
}

export class ArmorUpgrade extends HeroDecorator {
  constructor(hero: Hero) {
    super(hero);
    this.applyAbility('Classical armor');
  }
}

export class NanoTechUpgrade extends HeroDecorator {
  constructor(hero: Hero) {
    super(hero);
    this.applyAbility('Nanotechnology Armor');
  }
}

export class SpiderSenseUpgrade extends HeroDecorator {
  constructor(hero: Hero) {
    super(hero);
    this.applyAbility('Black suit');
  }
}

export class IronSpiderUpgrade extends HeroDecorator {
  constructor(hero: Hero) {
    super(hero);
    this.applyAbility('Iron Spider Armor');
  }
}

export class ThunderModeUpgrade extends HeroDecorator {
  constructor(hero: Hero) {
    super(hero);
    this.applyAbility('Thunder Mode');
  }
}

export class StormbreakerUpgrade extends HeroDecorator {
  constructor(hero: Hero) {
    super(hero);
    this.applyAbility('Stormbreaker');
  }
}
