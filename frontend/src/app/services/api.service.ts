import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoricalFact } from '../models/historical-fact.model';
import { Career } from '../models/career.model';
import { News } from '../models/news.model';
import { WorkshopRegistration } from '../models/workshop-registration.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  // Historical Facts
  getHistoricalFacts(): Observable<HistoricalFact[]> {
    return this.http.get<HistoricalFact[]>(`${this.baseUrl}/historical-facts`);
  }

  getHistoricalFact(id: number): Observable<HistoricalFact> {
    return this.http.get<HistoricalFact>(`${this.baseUrl}/historical-facts/${id}`);
  }

  // Careers
  getCareers(): Observable<Career[]> {
    return this.http.get<Career[]>(`${this.baseUrl}/careers`);
  }

  getCareer(id: number): Observable<Career> {
    return this.http.get<Career>(`${this.baseUrl}/careers/${id}`);
  }

  // News
  getNews(): Observable<News[]> {
    return this.http.get<News[]>(`${this.baseUrl}/news`);
  }

  getNewsItem(id: number): Observable<News> {
    return this.http.get<News>(`${this.baseUrl}/news/${id}`);
  }

  // Workshop Registration
  registerWorkshop(registration: WorkshopRegistration): Observable<WorkshopRegistration> {
    return this.http.post<WorkshopRegistration>(`${this.baseUrl}/registrations`, registration);
  }
}
