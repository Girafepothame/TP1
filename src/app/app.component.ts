import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EtudiantComponent } from "./etudiant/etudiant.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EtudiantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  constructor() {
    setTimeout(() => {
      this.isAuth = true
    }, 3000);
  }
  title = 'Séance TP1';
  summary = 'Prise en main d\'Angular, première application';
  isAuth = false;
}
