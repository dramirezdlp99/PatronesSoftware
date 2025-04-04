import { Hero } from '../models/hero.model';
import { AudioService } from '../../shared/services/audio.service';

export class ArmorUpgrade {
  constructor(private hero: Hero, private audioService: AudioService) {
    this.hero.currentImage = 'assets/images/iron-man-armor.png';
    this.hero.abilities.push('Armadura Mark XLII');
    this.audioService.playSound('assets/sounds/armor-on.mp3');

  }
}