import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';

interface Training {
  title: string;
  level: string;
  duration: string;
  description: string;
  schools: string[];
  icon: string;
}

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatChipsModule, MatExpansionModule],
  template: `
    <div class="hero-section">
      <h1>Formations & Parcours</h1>
      <p>Découvre les différentes formations pour accéder aux métiers de la tech, du collège au doctorat.</p>
    </div>

    <div class="page-container">
      <section class="intro-section">
        <mat-card class="intro-card">
          <mat-card-content>
            <mat-icon class="intro-icon">lightbulb</mat-icon>
            <div>
              <h3>Il n'y a pas qu'un seul chemin vers la tech !</h3>
              <p>
                Que tu sois passionnée de maths, de design, de sciences ou de communication,
                il existe un parcours adapté à tes envies et tes talents. Voici un aperçu des formations possibles.
              </p>
            </div>
          </mat-card-content>
        </mat-card>
      </section>

      <section class="paths-section">
        @for (path of paths; track path.title) {
          <mat-card class="path-card">
            <mat-card-content>
              <div class="path-header">
                <mat-icon class="path-icon">{{ path.icon }}</mat-icon>
                <div>
                  <h3>{{ path.title }}</h3>
                  <div class="path-meta">
                    <mat-chip>{{ path.level }}</mat-chip>
                    <mat-chip>{{ path.duration }}</mat-chip>
                  </div>
                </div>
              </div>
              <p class="path-description">{{ path.description }}</p>
              <div class="schools">
                <span class="schools-label">Exemples d'établissements :</span>
                <div class="school-list">
                  @for (school of path.schools; track school) {
                    <span class="school-tag">{{ school }}</span>
                  }
                </div>
              </div>
            </mat-card-content>
          </mat-card>
        }
      </section>

      <section class="resources-section">
        <h2 class="section-title">Ressources utiles</h2>
        <div class="resources-grid">
          <mat-card class="resource-card">
            <mat-card-content>
              <mat-icon>language</mat-icon>
              <h4>Onisep</h4>
              <p>Le site de référence pour l'orientation scolaire et professionnelle en France.</p>
            </mat-card-content>
          </mat-card>
          <mat-card class="resource-card">
            <mat-card-content>
              <mat-icon>school</mat-icon>
              <h4>Parcoursup</h4>
              <p>La plateforme nationale d'admission dans l'enseignement supérieur.</p>
            </mat-card-content>
          </mat-card>
          <mat-card class="resource-card">
            <mat-card-content>
              <mat-icon>people</mat-icon>
              <h4>Femmes@Numérique</h4>
              <p>Fondation qui rassemble les initiatives pour la mixité dans le numérique.</p>
            </mat-card-content>
          </mat-card>
          <mat-card class="resource-card">
            <mat-card-content>
              <mat-icon>code</mat-icon>
              <h4>Ada Tech School</h4>
              <p>École de programmation féministe, inclusive et innovante à Paris et Nantes.</p>
            </mat-card-content>
          </mat-card>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .intro-card {
      background: #f3e5f5;
      border-left: 4px solid #7b1fa2;
      margin-bottom: 32px;

      mat-card-content {
        display: flex;
        align-items: flex-start;
        gap: 16px;
      }

      .intro-icon {
        font-size: 40px;
        width: 40px;
        height: 40px;
        color: #7b1fa2;
        flex-shrink: 0;
      }

      h3 {
        font-size: 1.2rem;
        font-weight: 700;
        color: #4a148c;
        margin-bottom: 8px;
      }

      p {
        color: #555;
        line-height: 1.6;
      }
    }

    .paths-section {
      display: grid;
      gap: 24px;
    }

    .path-card {
      border-top: 4px solid #ab47bc;
      transition: transform 0.2s;

      &:hover {
        transform: translateY(-2px);
      }
    }

    .path-header {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      margin-bottom: 16px;

      h3 {
        font-size: 1.2rem;
        font-weight: 700;
        color: #4a148c;
        margin-bottom: 8px;
      }
    }

    .path-icon {
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
      flex-shrink: 0;
    }

    .path-meta {
      display: flex;
      gap: 8px;
    }

    .path-description {
      color: #555;
      line-height: 1.7;
      margin-bottom: 16px;
    }

    .schools {
      .schools-label {
        font-size: 0.85rem;
        font-weight: 600;
        color: #666;
        display: block;
        margin-bottom: 8px;
      }
    }

    .school-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .school-tag {
      background: #f3e5f5;
      color: #6a1b9a;
      padding: 4px 12px;
      border-radius: 16px;
      font-size: 0.85rem;
      font-weight: 500;
    }

    .resources-section {
      margin-top: 48px;
    }

    .resources-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 16px;
    }

    .resource-card {
      text-align: center;
      padding: 16px;
      transition: transform 0.2s;

      &:hover {
        transform: translateY(-4px);
      }

      mat-icon {
        font-size: 36px;
        width: 36px;
        height: 36px;
        color: #7b1fa2;
        margin-bottom: 12px;
      }

      h4 {
        font-weight: 700;
        color: #4a148c;
        margin-bottom: 8px;
      }

      p {
        color: #666;
        font-size: 0.9rem;
        line-height: 1.5;
      }
    }
  `]
})
export class TrainingComponent {
  paths: Training[] = [
    {
      title: 'BTS SIO (Services Informatiques aux Organisations)',
      level: 'Bac+2',
      duration: '2 ans',
      description: 'Formation courte et professionnalisante qui forme aux métiers de l\'informatique. Deux options : SLAM (Solutions Logicielles et Applications Métiers) pour le développement, ou SISR (Solutions d\'Infrastructure, Systèmes et Réseaux) pour l\'administration réseau.',
      schools: ['Lycées publics et privés', 'CFA', 'CNED'],
      icon: 'terminal'
    },
    {
      title: 'BUT Informatique (Bachelor Universitaire de Technologie)',
      level: 'Bac+3',
      duration: '3 ans',
      description: 'Formation universitaire complète en informatique avec des parcours spécialisés : réalisation d\'applications, déploiement d\'applications, administration de systèmes. Inclut des stages en entreprise.',
      schools: ['IUT de Paris', 'IUT de Lyon', 'IUT de Bordeaux', 'IUT de Lille'],
      icon: 'school'
    },
    {
      title: 'Licence Informatique',
      level: 'Bac+3',
      duration: '3 ans',
      description: 'Formation théorique et pratique en informatique à l\'université. Couvre les fondamentaux : algorithmique, programmation, bases de données, réseaux. Permet de poursuivre en Master.',
      schools: ['Sorbonne Université', 'Université Paris-Saclay', 'Université de Lyon', 'Université de Toulouse'],
      icon: 'menu_book'
    },
    {
      title: 'École d\'ingénieurs en informatique',
      level: 'Bac+5',
      duration: '5 ans (ou 3 ans après prépa)',
      description: 'Formation d\'excellence alliant théorie et pratique. Ouvre les portes de tous les métiers de la tech : développement, IA, cybersécurité, cloud, data science. Très valorisée sur le marché du travail.',
      schools: ['EPITA', 'EPITECH', 'ENSIMAG', '42', 'CentraleSupélec', 'Télécom Paris'],
      icon: 'engineering'
    },
    {
      title: 'Master Informatique',
      level: 'Bac+5',
      duration: '2 ans (après Licence)',
      description: 'Spécialisation poussée dans un domaine de l\'informatique : intelligence artificielle, cybersécurité, science des données, génie logiciel. Excellent pour la recherche et les postes à responsabilité.',
      schools: ['Université Paris-Saclay', 'ENS Paris-Saclay', 'Sorbonne Université', 'Université de Grenoble'],
      icon: 'psychology'
    },
    {
      title: 'Formations alternatives et bootcamps',
      level: 'Tous niveaux',
      duration: '3 à 12 mois',
      description: 'Formations intensives et pratiques pour apprendre rapidement le développement web, la data science ou le design UX. Accessibles sans diplôme préalable, elles sont idéales pour les reconversions.',
      schools: ['42 (gratuite, sans diplôme requis)', 'Ada Tech School', 'Le Wagon', 'Wild Code School'],
      icon: 'rocket_launch'
    }
  ];
}
