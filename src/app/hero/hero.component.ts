import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../core/models/hero.model';
import { AudioService } from '../shared/services/audio.service';
import {
  ArmorUpgrade,
  NanoTechUpgrade,
  SpiderSenseUpgrade,
  IronSpiderUpgrade,
  ThunderModeUpgrade,
  StormbreakerUpgrade
} from '../core/decorators/hero-decorators';

@Component({
  standalone: true,
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  imports: [CommonModule]
})
export class HeroComponent {
  heroes: Hero[] = [
    new Hero('Iron Man', 'Technology', ['Fly'], 'assets/images/iron-man-base.png', {
      'Classical armor': 'assets/images/iron-man-armor.png',
      'Nanotechnology Armor': 'assets/images/iron-man-nano.png'
    }, 'red', 'gold', 'Technology'),

    new Hero('Spider-Man', 'Agility', ['Climbing walls'], 'assets/images/spider-man-base.png', {
      'Black suit': 'assets/images/spider-man-sense.png',
      'Iron Spider Armor': 'assets/images/spider-man-iron.png'
    }, 'blue', 'red', 'Agility'),

    new Hero('Thor', 'God of thunder', ['Thunders'], 'assets/images/thor-base.png', {
      'Thunder Mode': 'assets/images/thor-thunder.png',
      'Stormbreaker': 'assets/images/thor-stormbreaker.png'
    }, 'gold', 'white', 'Thunders')
  ];

  hero: Hero = this.copyHero(this.heroes[0]);

  constructor(private audioService: AudioService) {}

  applyUpgrade(upgradeType: string): void {
    let soundPath = '';

    switch (this.hero.name) {
      case 'Iron Man':
        this.hero = upgradeType === 'ARMOR' ? new ArmorUpgrade(this.hero) : new NanoTechUpgrade(this.hero);
        soundPath = upgradeType === 'ARMOR' ? 'assets/sounds/armor-upgrade.mp3' : 'assets/sounds/nano-upgrade.mp3';
        break;

      case 'Spider-Man':
        this.hero = upgradeType === 'SENSE' ? new SpiderSenseUpgrade(this.hero) : new IronSpiderUpgrade(this.hero);
        soundPath = upgradeType === 'SENSE' ? 'assets/sounds/spider-sense.mp3' : 'assets/sounds/iron-spider.mp3';
        break;

      case 'Thor':
        this.hero = upgradeType === 'THUNDER' ? new ThunderModeUpgrade(this.hero) : new StormbreakerUpgrade(this.hero);
        soundPath = upgradeType === 'THUNDER' ? 'assets/sounds/thunder-mode.mp3' : 'assets/sounds/stormbreaker.mp3';
        break;
    }

    this.audioService.playSound(soundPath);
  }

  resetHero(): void {
    const original = this.heroes.find(h => h.name === this.hero.name);
    if (original) {
      this.hero = this.copyHero(original);
    }
  }

  changeHero(event: Event): void {
    const selectedName = (event.target as HTMLSelectElement).value;
    const newHero = this.heroes.find(h => h.name === selectedName);
    if (newHero) {
      this.hero = this.copyHero(newHero);

      document.documentElement.style.setProperty('--primary-color', this.hero.primaryColor);
      document.documentElement.style.setProperty('--secondary-color', this.hero.secondaryColor);
    }
  }

  private copyHero(original: Hero): Hero {
    return new Hero(
      original.name,
      original.category,
      [...original.abilities],
      original.currentImage,
      { ...original.imageVariants },
      original.primaryColor,
      original.secondaryColor,
      original.basePower
    );
  }

  getBasePowerClass(): string {
    return this.hero.basePower.toLowerCase().replace(/ /g, '-');
  }
}
