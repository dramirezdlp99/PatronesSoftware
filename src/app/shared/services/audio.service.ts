import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  playSound(soundPath: string): void {
    const audio = new Audio(soundPath);
    audio.play().catch(error => console.error('Error al reproducir sonido:', error));
  }
}
