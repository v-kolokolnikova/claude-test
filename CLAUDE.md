# CLAUDE.md

This file provides guidance for AI assistants working with this repository.

## Repository Overview

**Project:** Women In Tech - Site éducatif pour promouvoir la technologie auprès des collégiennes et lycéennes.
**Stack:** Angular 21 (frontend) + Java Spring Boot 3.4 (backend) + PostgreSQL (database)
**Language:** French (content and UI)

## Repository Structure

```
claude-test/
├── CLAUDE.md
├── frontend/                          # Angular 21 application
│   ├── angular.json
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       ├── index.html
│       ├── main.ts
│       ├── styles.scss                # Global styles + Angular Material violet theme
│       └── app/
│           ├── app.ts                 # Root component (navbar + router-outlet + footer)
│           ├── app.config.ts          # App config (router, HttpClient, animations)
│           ├── app.routes.ts          # Route definitions (lazy-loaded pages)
│           ├── models/                # TypeScript interfaces
│           │   ├── career.model.ts
│           │   ├── historical-fact.model.ts
│           │   ├── news.model.ts
│           │   └── workshop-registration.model.ts
│           ├── services/
│           │   └── api.service.ts     # HTTP service calling backend REST API
│           ├── components/
│           │   ├── navbar/            # Sticky top navigation bar
│           │   └── footer/            # Site footer
│           └── pages/
│               ├── home/              # Homepage - Women's impact on tech
│               ├── history/           # Timeline of historical facts
│               ├── careers/           # Tech career descriptions
│               ├── workshop/          # Workshop registration form
│               ├── news/              # Tech news about women
│               └── training/          # Education paths and programs
│
└── backend/                           # Spring Boot 3.4 REST API
    ├── pom.xml
    └── src/main/
        ├── resources/
        │   └── application.properties
        └── java/com/womenintech/
            ├── WomenInTechApplication.java
            ├── config/
            │   ├── CorsConfig.java         # CORS config for localhost:4200
            │   └── DataInitializer.java     # Seed data on first startup
            ├── model/
            │   ├── HistoricalFact.java
            │   ├── Career.java
            │   ├── News.java
            │   └── WorkshopRegistration.java
            ├── repository/                  # Spring Data JPA repositories
            ├── service/                     # Business logic layer
            └── controller/                  # REST controllers (/api/*)
```

## Development Setup

### Prerequisites
- **Node.js** >= 22.x
- **Java** 21 (OpenJDK)
- **Maven** >= 3.9
- **PostgreSQL** 16

### Database Setup
```bash
# Create the database
psql -U postgres -c "CREATE DATABASE womenintechdb;"
```

Database connection is configured in `backend/src/main/resources/application.properties`:
- URL: `jdbc:postgresql://localhost:5432/womenintechdb`
- User: `postgres` / Password: `postgres`
- DDL: `spring.jpa.hibernate.ddl-auto=update` (auto-creates tables)
- Seed data is loaded automatically by `DataInitializer.java` on first startup

### Frontend Setup
```bash
cd frontend
npm install
```

### Backend Setup
```bash
cd backend
mvn clean install
```

## Common Commands

### Frontend (Angular)
- **Dev server:** `cd frontend && npx ng serve` (runs on http://localhost:4200)
- **Build:** `cd frontend && npx ng build`

### Backend (Spring Boot)
- **Run:** `cd backend && mvn spring-boot:run` (runs on http://localhost:8080)
- **Build:** `cd backend && mvn clean package`
- **Compile:** `cd backend && mvn compile`

## API Endpoints

| Method | Endpoint                     | Description                   |
|--------|------------------------------|-------------------------------|
| GET    | `/api/historical-facts`      | List all historical facts     |
| GET    | `/api/historical-facts/{id}` | Get one historical fact       |
| GET    | `/api/careers`               | List all tech careers         |
| GET    | `/api/careers/{id}`          | Get one career                |
| GET    | `/api/news`                  | List all news articles        |
| GET    | `/api/news/{id}`             | Get one news article          |
| POST   | `/api/registrations`         | Register for a workshop       |
| GET    | `/api/registrations`         | List all registrations        |

## Code Conventions

### Frontend (TypeScript/Angular)
- **Standalone components** with inline templates and styles
- **Angular Signals** for reactive state (`signal()`)
- **Lazy-loaded routes** via `loadComponent()`
- **Angular Material** components for UI
- **Models** in `src/app/models/` as TypeScript interfaces
- **Services** in `src/app/services/` with `inject()` pattern
- Pages include **fallback data** for when the backend is unavailable

### Backend (Java/Spring Boot)
- Standard **Controller -> Service -> Repository** layering
- **Jakarta Validation** annotations on entities (`@NotBlank`, `@Email`, `@Min`, `@Max`)
- No Lombok - manual getters/setters/constructors
- `@Column(columnDefinition = "TEXT")` for long text fields
- Seed data via `CommandLineRunner` in `DataInitializer`

## Theme

The site uses a **violet/purple** Angular Material theme:
- Primary: `#7b1fa2` (deep purple)
- Dark: `#4a148c`
- Accent: `#e040fb` (pink-purple)
- Background: `#faf5ff` (light lavender)

## Git Workflow

- **Primary remote:** origin
- **Branch naming:** Follow the repository's branch conventions
- Commit messages should be clear and descriptive
