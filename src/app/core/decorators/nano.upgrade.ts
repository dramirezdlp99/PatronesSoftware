import { Hero } from '../models/hero.model';
import { AudioService } from '../../shared/services/audio.service';

export class NanoUpgrade {
  constructor(private hero: Hero, private audioService: AudioService) {
    this.hero.currentImage = 'assets/images/iron-man-nano.png';
    this.hero.abilities.push('Armadura Nano-Tech');
    this.audioService.playSound('assets/sounds/nano-on.mp3');

  }
}