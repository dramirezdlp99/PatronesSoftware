import { Component } from '@angular/core';  // Importar Component correctamente
import { HeroComponent } from './hero/hero.component';  // Importar HeroComponent

@Component({
  selector: 'app-root',
  standalone: true,  // Si usas standalone components
  imports: [HeroComponent],  // Importamos HeroComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'patronDecoratorSuperheroes';
}
