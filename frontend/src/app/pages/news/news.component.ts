import { Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from '../../services/api.service';
import { News } from '../../models/news.model';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [DatePipe, MatCardModule, MatIconModule, MatButtonModule, MatChipsModule, MatProgressSpinnerModule],
  template: `
    <div class="hero-section">
      <h1>Actualités : les femmes dans la tech</h1>
      <p>Les dernières nouvelles sur les avancées et initiatives des femmes dans le monde technologique.</p>
    </div>

    <div class="page-container">
      @if (loading()) {
        <div class="loading">
          <mat-spinner diameter="48" />
        </div>
      } @else {
        <div class="news-grid">
          @for (item of news(); track item.id) {
            <mat-card class="news-card">
              <mat-card-content>
                <mat-chip class="date-chip">
                  <mat-icon>calendar_today</mat-icon>
                  {{ item.publishedDate | date:'dd MMMM yyyy':'':'fr-FR' }}
                </mat-chip>
                <h3>{{ item.title }}</h3>
                <p>{{ item.content }}</p>
                <div class="news-source">
                  <mat-icon>source</mat-icon>
                  <span>Source : {{ item.sourceName }}</span>
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

    .news-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      gap: 24px;
    }

    .news-card {
      border-left: 4px solid #ab47bc;
      padding: 8px;
      transition: transform 0.2s;

      &:hover {
        transform: translateY(-4px);
      }

      h3 {
        font-size: 1.2rem;
        font-weight: 700;
        color: #4a148c;
        margin: 16px 0 12px;
      }

      p {
        color: #555;
        line-height: 1.7;
        margin-bottom: 16px;
      }
    }

    .date-chip {
      background: #f3e5f5 !important;
      color: #7b1fa2 !important;
      font-size: 0.8rem;

      mat-icon {
        font-size: 16px;
        width: 16px;
        height: 16px;
        margin-right: 4px;
      }
    }

    .news-source {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.85rem;
      color: #999;
      font-style: italic;

      mat-icon {
        font-size: 18px;
        width: 18px;
        height: 18px;
      }
    }
  `]
})
export class NewsComponent implements OnInit {
  private api = inject(ApiService);
  news = signal<News[]>([]);
  loading = signal(true);

  ngOnInit() {
    this.api.getNews().subscribe({
      next: (data) => {
        this.news.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.news.set(this.fallbackNews());
        this.loading.set(false);
      }
    });
  }

  private fallbackNews(): News[] {
    return [
      { id: 1, title: 'L\'IA au féminin : de plus en plus de femmes dans la recherche en intelligence artificielle', content: 'Selon un rapport de l\'UNESCO publié en 2024, la proportion de femmes dans la recherche en IA est passée de 22% à 30% en cinq ans. Des initiatives comme AI4ALL et Women in AI contribuent à cette progression encourageante.', publishedDate: '2024-03-08', imageUrl: '', sourceUrl: '', sourceName: 'UNESCO' },
      { id: 2, title: 'Gitanjali Rao, 17 ans, nommée plus jeune innovatrice de l\'année par TIME', content: 'La jeune scientifique américaine Gitanjali Rao a développé plusieurs technologies innovantes, dont un dispositif de détection de plomb dans l\'eau et une application de lutte contre le cyberharcèlement utilisant l\'intelligence artificielle.', publishedDate: '2024-01-15', imageUrl: '', sourceUrl: '', sourceName: 'TIME Magazine' },
      { id: 3, title: 'Le programme Girls Who Code atteint un million de membres', content: 'L\'organisation fondée par Reshma Saujani a franchi le cap symbolique d\'un million de filles formées au code informatique à travers le monde, avec des programmes actifs dans plus de 20 pays.', publishedDate: '2024-06-20', imageUrl: '', sourceUrl: '', sourceName: 'Girls Who Code' },
      { id: 4, title: 'La Commission européenne lance le programme \'Women in Digital\'', content: 'La Commission européenne a annoncé un investissement de 100 millions d\'euros pour encourager les femmes à poursuivre des carrières dans le numérique, incluant des bourses d\'études et des programmes de mentorat.', publishedDate: '2024-09-15', imageUrl: '', sourceUrl: '', sourceName: 'Commission européenne' }
    ];
  }
}
