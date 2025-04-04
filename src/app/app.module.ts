import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
 // Ruta correcta

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent // Componente declarado correctamente
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }