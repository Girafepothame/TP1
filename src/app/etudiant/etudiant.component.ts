import { Component } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.scss'
})

export class EtudiantComponent {
  nomEtu = ""
  prenomEtu = ""

  retNomEtu(nom: string) {
    return "Nom: " + nom
  }

  retPrenomEtu(prenom: string) {
    return "Prénom: " + prenom
  }
}
