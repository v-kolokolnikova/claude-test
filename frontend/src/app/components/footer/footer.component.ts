import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-brand">
          <mat-icon>computer</mat-icon>
          <span>Women In Tech</span>
        </div>
        <p class="footer-tagline">Inspirer la prochaine génération de femmes dans la technologie</p>
        <p class="footer-copyright">&copy; 2025 Women In Tech. Projet éducatif.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #4a148c, #7b1fa2);
      color: white;
      padding: 32px 24px;
      margin-top: 64px;
      text-align: center;
    }

    .footer-brand {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 8px;
    }

    .footer-tagline {
      opacity: 0.8;
      margin-bottom: 16px;
    }

    .footer-copyright {
      opacity: 0.6;
      font-size: 0.85rem;
    }
  `]
})
export class FooterComponent {}
