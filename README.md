# Proyecto Angular: Sistema de Mejoras de Superhéroes de Marvel con Patrón Decorator

Este proyecto fue desarrollado por **David Fernando Ramírez de la Parra** para la asignatura de Patrones de software, impartida por el docente **Jhonatan Andrés Mideros Narváez**.

## 🎯 Descripción General

Esta aplicación web en Angular demuestra el uso del **Patrón de Diseño Decorator** en un contexto interactivo de superhéroes llamado Sistema de Mejoras de Superhéroes. A través de la interfaz, los usuarios pueden seleccionar héroes, aplicar mejoras visuales y funcionales, y experimentar cómo el patrón Decorator permite añadir comportamientos dinámicamente sin modificar la clase base original.

## 🧠 ¿Qué es el Patrón Decorator?

El **Patrón Decorator** es un patrón estructural que permite añadir funcionalidades a un objeto de manera dinámica envolviéndolo en una clase decoradora. Esto sigue los principios de diseño **abierto/cerrado** (Open/Closed), es decir, la clase está abierta a extensiones pero cerrada a modificaciones.

En este proyecto, los héroes tienen habilidades base, y mediante decoradores se les añaden nuevas armaduras, trajes y modos de poder.

## ⚙️ Tecnologías Usadas

- Angular 17+ con Componentes Standalone
- TypeScript
- SCSS para estilos
- HTML5
- Servicio de audio personalizado
- Imágenes y sonidos locales
- Patrón de diseño Decorator aplicado en TypeScript

## 🦸‍♂️ Funcionalidades

- Cambiar entre tres superhéroes: Iron Man, Spider-Man y Thor.
- Aplicar mejoras (decoradores) específicas para cada héroe.
- Escuchar sonidos al aplicar cada mejora.
- Visualizar el cambio de imagen correspondiente a la mejora.
- Restablecer el héroe a su estado inicial.

## 📁 Estructura del Proyecto

```
src/
│
├── app/
│   ├── app.component.ts            # Componente principal
│   ├── app.component.html          # Template principal
│   └── app.component.scss          # Estilos
│
├── core/
│   ├── models/
│   │   └── hero.model.ts           # Modelo base de Hero
│   └── decorators/
│       └── hero-decorators.ts      # Decoradores de habilidades
│
├── shared/
│   └── services/
│       └── audio.service.ts        # Servicio para reproducir sonidos
│
├── assets/
│   ├── images/                     # Imágenes de héroes y mejoras
│   └── sounds/                     # Audios para mejoras
│
└── hero/
    ├── hero.component.ts          # Componente de héroe
    ├── hero.component.html        # Template del héroe
    └── hero.component.scss        # Estilos del héroe
```

## 🛠️ Instalación y Ejecución

1. Clona el repositorio o descarga este proyecto.
2. Asegúrate de tener instalado **Node.js** y **Angular CLI**.
3. Abre una terminal en la raíz del proyecto y ejecuta:

```bash
npm install
ng serve
```

4. Abre tu navegador en `http://localhost:4200` para ver la app.

## 📦 Requisitos del Sistema

- Node.js v18+
- Angular CLI v17+
- Navegador moderno (Chrome, Firefox, Edge, etc.)

## 🧪 Cómo se aplica el Patrón Decorator en el proyecto

En `hero-decorators.ts`, se implementan clases decoradoras como `ArmorUpgrade`, `NanoTechUpgrade`, etc., que extienden la clase `HeroDecorator`. Estas clases añaden nuevas habilidades e imágenes a los héroes seleccionados sin modificar la clase base `Hero`.

```ts
export class ArmorUpgrade extends HeroDecorator {
  constructor(hero: Hero) {
    super(hero);
    applyAbility(this, 'Classic Armor');
  }
}
```

## 🖼️ Créditos de Recursos Multimedia

- Imágenes y sonidos usados son recursos libres o con fines académicos.
- Efectos de sonido añadidos para mejorar la experiencia interactiva.

---

**Desarrollado por: David Fernando Ramírez de la Parra**  
**Docente: Jhonatan Andrés Mideros Narváez**