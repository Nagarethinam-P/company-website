import { Component,AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    const counters = document.querySelectorAll('.counter');

    // Animate text and image
    if (heroText) this.renderer.addClass(heroText, 'show');
    if (heroImage) this.renderer.addClass(heroImage, 'show');

    // Animate counters
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target')!;
      const step = target / 200;
      const update = () => {
        const value = +counter.textContent!;
        if (value < target) {
          counter.textContent = `${Math.ceil(value + step)}`;
          setTimeout(update, 20);
        } else {
          counter.textContent = `${target}`;
        }
      };
      update();
    });
  }
}

