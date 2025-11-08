import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule,NgForm } from '@angular/forms';
import { Home } from './home/home';
import { About } from './about/about';
import { Services } from './services/services';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [CommonModule,FormsModule,Home,About,Services,Contact],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // protected readonly title = signal('Companywebsite');
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      this.closeMenu();
    }
  }
}
