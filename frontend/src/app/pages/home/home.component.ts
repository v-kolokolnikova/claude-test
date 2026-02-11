import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="hero-section">
      <h1>Les femmes transforment la tech</h1>
      <p>
        Découvre comment les femmes ont façonné le monde de la technologie et comment toi aussi,
        tu peux faire partie de cette aventure extraordinaire !
      </p>
      <a mat-raised-button routerLink="/inscription" class="hero-cta">
        Participe à un atelier
        <mat-icon>arrow_forward</mat-icon>
      </a>
    </div>

    <div class="page-container">
      <section class="impact-section">
        <h2 class="section-title">Pourquoi les femmes sont essentielles dans la tech ?</h2>

        <div class="stats-grid">
          <mat-card class="stat-card">
            <mat-card-content>
              <mat-icon class="stat-icon">trending_up</mat-icon>
              <div class="stat-number">30%</div>
              <div class="stat-label">des emplois dans la tech sont occupés par des femmes en 2024</div>
              <div class="stat-source">Source : UNESCO, 2024</div>
            </mat-card-content>
          </mat-card>

          <mat-card class="stat-card">
            <mat-card-content>
              <mat-icon class="stat-icon">diversity_3</mat-icon>
              <div class="stat-number">+35%</div>
              <div class="stat-label">de performance en plus dans les équipes mixtes</div>
              <div class="stat-source">Source : McKinsey "Diversity Wins", 2023</div>
            </mat-card-content>
          </mat-card>

          <mat-card class="stat-card">
            <mat-card-content>
              <mat-icon class="stat-icon">school</mat-icon>
              <div class="stat-number">1M+</div>
              <div class="stat-label">de filles formées au code par Girls Who Code</div>
              <div class="stat-source">Source : Girls Who Code, 2024</div>
            </mat-card-content>
          </mat-card>
        </div>
      </section>

      <section class="why-section">
        <h2 class="section-title">L'impact des femmes dans la tech</h2>
        <div class="impact-cards">
          <mat-card class="impact-card">
            <mat-card-content>
              <mat-icon class="impact-icon">rocket_launch</mat-icon>
              <h3>Innovation</h3>
              <p>
                Les femmes ont inventé des technologies fondamentales : le premier compilateur (Grace Hopper),
                les bases du Wi-Fi (Hedy Lamarr), le protocole Internet (Radia Perlman).
                Leur créativité et leur vision ont transformé notre quotidien.
              </p>
            </mat-card-content>
          </mat-card>

          <mat-card class="impact-card">
            <mat-card-content>
              <mat-icon class="impact-icon">psychology</mat-icon>
              <h3>Perspectives uniques</h3>
              <p>
                Les femmes apportent des perspectives différentes dans la conception de produits technologiques,
                rendant ces produits plus inclusifs et adaptés à l'ensemble de la population.
                Selon une étude de Harvard Business Review, la diversité de genre améliore la prise de décision.
              </p>
            </mat-card-content>
          </mat-card>

          <mat-card class="impact-card">
            <mat-card-content>
              <mat-icon class="impact-icon">favorite</mat-icon>
              <h3>Tech for Good</h3>
              <p>
                De nombreuses femmes utilisent la technologie pour résoudre des problèmes sociaux :
                Gitanjali Rao (détection de plomb dans l'eau), Fei-Fei Li (IA éthique chez Stanford),
                et des milliers d'autres qui construisent un futur plus juste.
              </p>
            </mat-card-content>
          </mat-card>
        </div>
      </section>

      <section class="explore-section">
        <h2 class="section-title">Explore le site</h2>
        <div class="explore-grid">
          <a routerLink="/histoire" class="explore-link">
            <mat-card class="explore-card">
              <mat-card-content>
                <mat-icon>history_edu</mat-icon>
                <span>Histoire des femmes dans la tech</span>
              </mat-card-content>
            </mat-card>
          </a>
          <a routerLink="/metiers" class="explore-link">
            <mat-card class="explore-card">
              <mat-card-content>
                <mat-icon>work</mat-icon>
                <span>Découvre les métiers</span>
              </mat-card-content>
            </mat-card>
          </a>
          <a routerLink="/actualites" class="explore-link">
            <mat-card class="explore-card">
              <mat-card-content>
                <mat-icon>newspaper</mat-icon>
                <span>Actualités</span>
              </mat-card-content>
            </mat-card>
          </a>
          <a routerLink="/formations" class="explore-link">
            <mat-card class="explore-card">
              <mat-card-content>
                <mat-icon>school</mat-icon>
                <span>Formations & Parcours</span>
              </mat-card-content>
            </mat-card>
          </a>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .hero-cta {
      margin-top: 24px;
      background-color: #e040fb !important;
      color: white !important;
      font-size: 1.1rem;
      padding: 8px 32px !important;
      border-radius: 24px !important;

      mat-icon {
        margin-left: 8px;
      }
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
      margin-bottom: 48px;
    }

    .stat-card {
      text-align: center;
      padding: 24px;
      border-left: 4px solid #7b1fa2;
    }

    .stat-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      color: #7b1fa2;
      margin-bottom: 16px;
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: 800;
      color: #4a148c;
    }

    .stat-label {
      font-size: 1rem;
      color: #555;
      margin-top: 8px;
    }

    .stat-source {
      font-size: 0.75rem;
      color: #999;
      margin-top: 8px;
      font-style: italic;
    }

    .impact-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
      margin-bottom: 48px;
    }

    .impact-card {
      padding: 16px;
      border-top: 4px solid #ab47bc;

      h3 {
        font-size: 1.2rem;
        font-weight: 600;
        color: #4a148c;
        margin: 12px 0 8px;
      }

      p {
        color: #555;
        line-height: 1.6;
      }
    }

    .impact-icon {
      font-size: 40px;
      width: 40px;
      height: 40px;
      color: #ab47bc;
    }

    .explore-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
    }

    .explore-link {
      text-decoration: none;
    }

    .explore-card {
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(122, 31, 162, 0.2);
      }

      mat-card-content {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px;
        font-weight: 500;
        color: #4a148c;
      }

      mat-icon {
        color: #7b1fa2;
      }
    }

    .why-section, .explore-section {
      margin-top: 48px;
    }
  `]
})
export class HomeComponent {}
