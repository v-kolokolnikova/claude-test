import { Component, inject, OnInit, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from '../../services/api.service';
import { HistoricalFact } from '../../models/historical-fact.model';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatProgressSpinnerModule],
  template: `
    <div class="hero-section">
      <h1>Les femmes qui ont fait l'histoire de la tech</h1>
      <p>De Ada Lovelace à aujourd'hui, découvre les pionnières qui ont révolutionné la technologie.</p>
    </div>

    <div class="page-container">
      @if (loading()) {
        <div class="loading">
          <mat-spinner diameter="48" />
        </div>
      } @else {
        <div class="timeline">
          @for (fact of facts(); track fact.id) {
            <div class="timeline-item">
              <div class="timeline-marker">
                <span class="year-badge">{{ fact.year }}</span>
              </div>
              <mat-card class="timeline-card">
                <mat-card-content>
                  <h3>{{ fact.title }}</h3>
                  <p>{{ fact.description }}</p>
                  <span class="source">Source : {{ fact.source }}</span>
                </mat-card-content>
              </mat-card>
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .loading {
      display: flex;
      justify-content: center;
      padding: 64px;
    }

    .timeline {
      position: relative;
      padding-left: 40px;

      &::before {
        content: '';
        position: absolute;
        left: 15px;
        top: 0;
        bottom: 0;
        width: 3px;
        background: linear-gradient(to bottom, #7b1fa2, #e1bee7);
      }
    }

    .timeline-item {
      position: relative;
      margin-bottom: 32px;
    }

    .timeline-marker {
      position: absolute;
      left: -40px;
      top: 16px;
    }

    .year-badge {
      background: #7b1fa2;
      color: white;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 0.85rem;
      font-weight: 700;
      white-space: nowrap;
    }

    .timeline-card {
      border-left: 4px solid #ab47bc;
      margin-left: 16px;

      h3 {
        font-size: 1.2rem;
        font-weight: 700;
        color: #4a148c;
        margin-bottom: 8px;
      }

      p {
        color: #555;
        line-height: 1.7;
        margin-bottom: 12px;
      }

      .source {
        font-size: 0.8rem;
        color: #999;
        font-style: italic;
      }
    }
  `]
})
export class HistoryComponent implements OnInit {
  private api = inject(ApiService);
  facts = signal<HistoricalFact[]>([]);
  loading = signal(true);

  ngOnInit() {
    this.api.getHistoricalFacts().subscribe({
      next: (data) => {
        this.facts.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.facts.set(this.fallbackFacts());
        this.loading.set(false);
      }
    });
  }

  private fallbackFacts(): HistoricalFact[] {
    return [
      { id: 1, title: 'Ada Lovelace - Première programmeuse', description: 'Ada Lovelace a écrit le premier algorithme destiné à être exécuté par une machine, la machine analytique de Charles Babbage. Elle est considérée comme la première programmeuse de l\'histoire.', year: 1843, imageUrl: '', source: '"Ada\'s Algorithm" by James Essinger' },
      { id: 2, title: 'Grace Hopper - Inventrice du compilateur', description: 'Grace Hopper a inventé le premier compilateur (A-0 System) et contribué à la création du langage COBOL. Elle a aussi popularisé le terme "bug" en informatique après avoir trouvé un insecte dans un ordinateur.', year: 1952, imageUrl: '', source: 'Yale University Archives' },
      { id: 3, title: 'Hedy Lamarr - Pionnière du Wi-Fi', description: 'Actrice hollywoodienne et inventrice, Hedy Lamarr a co-inventé le saut de fréquence (frequency hopping), une technologie qui est à la base du Wi-Fi et du Bluetooth modernes.', year: 1942, imageUrl: '', source: 'Smithsonian Institution' },
      { id: 4, title: 'Katherine Johnson - Les calculs qui ont conquis l\'espace', description: 'Mathématicienne à la NASA, ses calculs de trajectoires orbitales ont été essentiels aux premiers vols spatiaux habités américains. Son histoire a été racontée dans le film "Les Figures de l\'ombre" (Hidden Figures).', year: 1961, imageUrl: '', source: 'NASA' },
      { id: 5, title: 'Margaret Hamilton - Le code qui a mené à la Lune', description: 'Directrice de l\'ingénierie logicielle du programme Apollo de la NASA, son code et son leadership ont permis à Apollo 11 d\'atterrir sur la Lune en toute sécurité.', year: 1969, imageUrl: '', source: 'NASA History Division' },
      { id: 6, title: 'Radia Perlman - La mère d\'Internet', description: 'Inventrice du protocole Spanning Tree (STP), fondamental au fonctionnement des réseaux informatiques et d\'Internet. Elle est surnommée "la mère d\'Internet".', year: 1985, imageUrl: '', source: 'MIT' },
      { id: 7, title: 'Frances Allen - Première femme prix Turing', description: 'Première femme à recevoir le prix Turing (considéré comme le "Nobel de l\'informatique") pour ses travaux pionniers sur l\'optimisation des compilateurs chez IBM.', year: 2006, imageUrl: '', source: 'IBM Research' },
      { id: 8, title: 'Reshma Saujani - Fondatrice de Girls Who Code', description: 'Reshma Saujani a fondé Girls Who Code, une organisation qui a formé plus de 500 000 filles au codage informatique, contribuant à réduire le fossé numérique entre les genres.', year: 2012, imageUrl: '', source: 'Girls Who Code Annual Report' }
    ];
  }
}
