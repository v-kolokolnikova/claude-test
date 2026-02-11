import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  template: `
    <mat-toolbar class="navbar">
      <a routerLink="/" class="logo">
        <mat-icon>computer</mat-icon>
        <span>Women In Tech</span>
      </a>

      <span class="spacer"></span>

      <nav class="nav-links">
        <a mat-button routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Accueil</a>
        <a mat-button routerLink="/histoire" routerLinkActive="active">Histoire</a>
        <a mat-button routerLink="/metiers" routerLinkActive="active">Métiers</a>
        <a mat-button routerLink="/actualites" routerLinkActive="active">Actualités</a>
        <a mat-button routerLink="/formations" routerLinkActive="active">Formations</a>
        <a mat-raised-button routerLink="/inscription" routerLinkActive="active" class="cta-button">S'inscrire</a>
      </nav>

      <button mat-icon-button [matMenuTriggerFor]="menu" class="mobile-menu">
        <mat-icon>menu</mat-icon>
      </button>

      <mat-menu #menu="matMenu">
        <a mat-menu-item routerLink="/">Accueil</a>
        <a mat-menu-item routerLink="/histoire">Histoire</a>
        <a mat-menu-item routerLink="/metiers">Métiers</a>
        <a mat-menu-item routerLink="/actualites">Actualités</a>
        <a mat-menu-item routerLink="/formations">Formations</a>
        <a mat-menu-item routerLink="/inscription">S'inscrire à un atelier</a>
      </mat-menu>
    </mat-toolbar>
  `,
  styles: [`
    .navbar {
      background: linear-gradient(135deg, #7b1fa2, #4a148c);
      color: white;
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 8px;
      color: white;
      text-decoration: none;
      font-size: 1.3rem;
      font-weight: 700;
    }

    .spacer {
      flex: 1;
    }

    .nav-links a {
      color: rgba(255, 255, 255, 0.85);
      font-weight: 500;

      &.active {
        color: white;
        font-weight: 700;
      }
    }

    .cta-button {
      background-color: #e040fb !important;
      color: white !important;
      margin-left: 8px !important;
    }

    .mobile-menu {
      display: none;
      color: white;
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
      .mobile-menu {
        display: block;
      }
    }
  `]
})
export class NavbarComponent {}
