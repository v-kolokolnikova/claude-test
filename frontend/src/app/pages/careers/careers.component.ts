import { Component, inject, OnInit, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from '../../services/api.service';
import { Career } from '../../models/career.model';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatChipsModule, MatProgressSpinnerModule],
  template: `
    <div class="hero-section">
      <h1>Les métiers de la tech</h1>
      <p>Découvre les différents métiers passionnants qui t'attendent dans le monde de la technologie.</p>
    </div>

    <div class="page-container">
      @if (loading()) {
        <div class="loading">
          <mat-spinner diameter="48" />
        </div>
      } @else {
        <div class="careers-grid">
          @for (career of careers(); track career.id) {
            <mat-card class="career-card">
              <mat-card-content>
                <div class="career-header">
                  <mat-icon class="career-icon">{{ career.iconName }}</mat-icon>
                  <h3>{{ career.title }}</h3>
                </div>
                <p class="career-description">{{ career.description }}</p>

                <div class="career-details">
                  <div class="detail">
                    <mat-icon>school</mat-icon>
                    <span>{{ career.educationLevel }}</span>
                  </div>
                  <div class="detail">
                    <mat-icon>euro</mat-icon>
                    <span>{{ career.averageSalary }}</span>
                  </div>
                </div>

                <div class="skills-section">
                  <span class="skills-label">Compétences clés :</span>
                  <mat-chip-set>
                    @for (skill of career.skills.split(','); track skill) {
                      <mat-chip>{{ skill.trim() }}</mat-chip>
                    }
                  </mat-chip-set>
                </div>
              </mat-card-content>
            </mat-card>
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

    .careers-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
      gap: 24px;
    }

    .career-card {
      border-top: 4px solid #ab47bc;
      padding: 8px;
      transition: transform 0.2s;

      &:hover {
        transform: translateY(-4px);
      }
    }

    .career-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;

      h3 {
        font-size: 1.3rem;
        font-weight: 700;
        color: #4a148c;
      }
    }

    .career-icon {
      font-size: 40px;
      width: 40px;
      height: 40px;
      color: #7b1fa2;
      background: #f3e5f5;
      border-radius: 12px;
      padding: 8px;
      width: 56px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .career-description {
      color: #555;
      line-height: 1.6;
      margin-bottom: 16px;
    }

    .career-details {
      display: flex;
      gap: 24px;
      margin-bottom: 16px;

      .detail {
        display: flex;
        align-items: center;
        gap: 6px;
        color: #6a1b9a;
        font-weight: 500;
        font-size: 0.9rem;

        mat-icon {
          font-size: 20px;
          width: 20px;
          height: 20px;
        }
      }
    }

    .skills-section {
      .skills-label {
        font-size: 0.85rem;
        font-weight: 600;
        color: #666;
        display: block;
        margin-bottom: 8px;
      }
    }
  `]
})
export class CareersComponent implements OnInit {
  private api = inject(ApiService);
  careers = signal<Career[]>([]);
  loading = signal(true);

  ngOnInit() {
    this.api.getCareers().subscribe({
      next: (data) => {
        this.careers.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.careers.set(this.fallbackCareers());
        this.loading.set(false);
      }
    });
  }

  private fallbackCareers(): Career[] {
    return [
      { id: 1, title: 'Développeur/Développeuse', description: 'Crée des applications, sites web et logiciels. Écrit du code dans différents langages de programmation comme Python, Java ou JavaScript. C\'est un métier créatif où l\'on résout des problèmes concrets au quotidien.', skills: 'Programmation, Résolution de problèmes, Travail d\'équipe, Apprentissage continu', averageSalary: '35 000 - 65 000 € / an', educationLevel: 'Bac+2 à Bac+5', iconName: 'code' },
      { id: 2, title: 'Ingénieur(e) en Intelligence Artificielle', description: 'Conçoit des systèmes intelligents capables d\'apprendre et de prendre des décisions. Travaille sur le machine learning, le deep learning et le traitement du langage naturel.', skills: 'Mathématiques, Python, Machine Learning, Statistiques', averageSalary: '45 000 - 80 000 € / an', educationLevel: 'Bac+5 (Master ou Doctorat)', iconName: 'psychology' },
      { id: 3, title: 'Ingénieur(e) Informatique', description: 'Conçoit et développe des systèmes informatiques complexes. Peut travailler dans le hardware, les réseaux, la cybersécurité ou le cloud computing.', skills: 'Architecture systèmes, Réseaux, Cybersécurité, Cloud', averageSalary: '40 000 - 70 000 € / an', educationLevel: 'Bac+5 (École d\'ingénieurs)', iconName: 'engineering' },
      { id: 4, title: 'Web Designer', description: 'Crée l\'identité visuelle et l\'expérience utilisateur des sites web. Combine créativité artistique et compétences techniques pour des interfaces belles et intuitives.', skills: 'UI/UX Design, Figma, Adobe Creative Suite, HTML/CSS', averageSalary: '30 000 - 55 000 € / an', educationLevel: 'Bac+2 à Bac+5', iconName: 'palette' },
      { id: 5, title: 'Chef(fe) de Projet IT', description: 'Coordonne les équipes techniques, gère les budgets et planifie les projets informatiques. Fait le lien entre les besoins métier et les solutions techniques.', skills: 'Gestion de projet, Communication, Agile/Scrum, Leadership', averageSalary: '40 000 - 70 000 € / an', educationLevel: 'Bac+5', iconName: 'groups' },
      { id: 6, title: 'Business Analyst', description: 'Analyse les besoins des entreprises et traduit ces besoins en spécifications techniques. Aide à optimiser les processus grâce à la technologie.', skills: 'Analyse de données, Communication, SQL, Modélisation de processus', averageSalary: '35 000 - 60 000 € / an', educationLevel: 'Bac+5', iconName: 'analytics' }
    ];
  }
}
