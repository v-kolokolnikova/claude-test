import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-workshop',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  template: `
    <div class="hero-section">
      <h1>Participe à un atelier tech !</h1>
      <p>Inscris-toi pour découvrir la programmation, l'intelligence artificielle et bien plus encore lors de nos ateliers gratuits.</p>
    </div>

    <div class="page-container">
      <div class="form-wrapper">
        <mat-card class="registration-card">
          <mat-card-header>
            <mat-icon mat-card-avatar class="form-avatar">person_add</mat-icon>
            <mat-card-title>Formulaire d'inscription</mat-card-title>
            <mat-card-subtitle>Remplis le formulaire ci-dessous pour réserver ta place</mat-card-subtitle>
          </mat-card-header>

          <mat-card-content>
            <form [formGroup]="form" (ngSubmit)="onSubmit()">
              <div class="form-row">
                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>Prénom</mat-label>
                  <input matInput formControlName="firstName" placeholder="Ton prénom">
                  <mat-icon matPrefix>badge</mat-icon>
                  @if (form.get('firstName')?.hasError('required') && form.get('firstName')?.touched) {
                    <mat-error>Le prénom est requis</mat-error>
                  }
                </mat-form-field>

                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>Nom</mat-label>
                  <input matInput formControlName="lastName" placeholder="Ton nom de famille">
                  <mat-icon matPrefix>person</mat-icon>
                  @if (form.get('lastName')?.hasError('required') && form.get('lastName')?.touched) {
                    <mat-error>Le nom est requis</mat-error>
                  }
                </mat-form-field>
              </div>

              <div class="form-row">
                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>Âge</mat-label>
                  <input matInput type="number" formControlName="age" placeholder="Ton âge">
                  <mat-icon matPrefix>cake</mat-icon>
                  @if (form.get('age')?.hasError('required') && form.get('age')?.touched) {
                    <mat-error>L'âge est requis</mat-error>
                  }
                  @if (form.get('age')?.hasError('min') || form.get('age')?.hasError('max')) {
                    <mat-error>L'âge doit être entre 10 et 25 ans</mat-error>
                  }
                </mat-form-field>

                <mat-form-field appearance="outline" class="full-width">
                  <mat-label>Email</mat-label>
                  <input matInput type="email" formControlName="email" placeholder="ton.email@exemple.com">
                  <mat-icon matPrefix>email</mat-icon>
                  @if (form.get('email')?.hasError('required') && form.get('email')?.touched) {
                    <mat-error>L'email est requis</mat-error>
                  }
                  @if (form.get('email')?.hasError('email')) {
                    <mat-error>L'email n'est pas valide</mat-error>
                  }
                </mat-form-field>
              </div>

              @if (submitting()) {
                <button mat-raised-button type="submit" class="submit-button" disabled>
                  <mat-icon>hourglass_empty</mat-icon>
                  Inscription en cours...
                </button>
              } @else {
                <button mat-raised-button type="submit" class="submit-button" [disabled]="form.invalid">
                  <mat-icon>send</mat-icon>
                  S'inscrire
                </button>
              }
            </form>
          </mat-card-content>
        </mat-card>

        <mat-card class="info-card">
          <mat-card-content>
            <h3>Ce que tu apprendras lors de nos ateliers</h3>
            <ul class="workshop-list">
              <li>
                <mat-icon>code</mat-icon>
                <span>Les bases de la programmation (Python, HTML/CSS)</span>
              </li>
              <li>
                <mat-icon>psychology</mat-icon>
                <span>Introduction à l'intelligence artificielle</span>
              </li>
              <li>
                <mat-icon>palette</mat-icon>
                <span>Création de ton premier site web</span>
              </li>
              <li>
                <mat-icon>smart_toy</mat-icon>
                <span>Initiation à la robotique</span>
              </li>
              <li>
                <mat-icon>groups</mat-icon>
                <span>Rencontre avec des femmes professionnelles de la tech</span>
              </li>
            </ul>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .form-wrapper {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 32px;
      align-items: start;
    }

    @media (max-width: 768px) {
      .form-wrapper {
        grid-template-columns: 1fr;
      }
    }

    .registration-card {
      padding: 16px;
    }

    .form-avatar {
      background: #7b1fa2;
      color: white;
      border-radius: 50%;
      padding: 8px;
      width: 40px !important;
      height: 40px !important;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 8px;

      @media (max-width: 600px) {
        grid-template-columns: 1fr;
      }
    }

    .full-width {
      width: 100%;
    }

    .submit-button {
      background-color: #7b1fa2 !important;
      color: white !important;
      width: 100%;
      padding: 8px !important;
      font-size: 1.1rem;
      margin-top: 8px;

      mat-icon {
        margin-right: 8px;
      }
    }

    .info-card {
      background: #f3e5f5;
      border-left: 4px solid #7b1fa2;

      h3 {
        font-size: 1.2rem;
        font-weight: 700;
        color: #4a148c;
        margin-bottom: 16px;
      }
    }

    .workshop-list {
      list-style: none;
      padding: 0;

      li {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        color: #555;

        mat-icon {
          color: #7b1fa2;
        }

        &:last-child {
          border-bottom: none;
        }
      }
    }
  `]
})
export class WorkshopComponent {
  private api = inject(ApiService);
  private snackBar = inject(MatSnackBar);
  private fb = inject(FormBuilder);

  submitting = signal(false);

  form: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    age: [null, [Validators.required, Validators.min(10), Validators.max(25)]],
    email: ['', [Validators.required, Validators.email]]
  });

  onSubmit() {
    if (this.form.invalid) return;

    this.submitting.set(true);
    this.api.registerWorkshop(this.form.value).subscribe({
      next: () => {
        this.snackBar.open('Inscription réussie ! Tu recevras un email de confirmation.', 'Fermer', {
          duration: 5000,
          panelClass: 'success-snackbar'
        });
        this.form.reset();
        this.submitting.set(false);
      },
      error: () => {
        this.snackBar.open('Erreur lors de l\'inscription. Réessaie plus tard.', 'Fermer', {
          duration: 5000,
          panelClass: 'error-snackbar'
        });
        this.submitting.set(false);
      }
    });
  }
}
