import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExerciseCategory } from '../models/exercise-category.model'; // Update the path as necessary

@Injectable({
  providedIn: 'root'
})
export class ExerciseCategoryService {
  private apiUrl = 'https://localhost:7137/api/ExerciseCategories';

  constructor(private http: HttpClient) { }

  private getHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  getAllExerciseCategories(): Observable<ExerciseCategory[]> {
    return this.http.get<ExerciseCategory[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  getExerciseCategoryById(id: number): Observable<ExerciseCategory> {
    return this.http.get<ExerciseCategory>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  createExerciseCategory(exerciseCategory: ExerciseCategory): Observable<ExerciseCategory> {
    return this.http.post<ExerciseCategory>(this.apiUrl, exerciseCategory, { headers: this.getHeaders() });
  }

  updateExerciseCategory(id: number, exerciseCategory: ExerciseCategory): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, exerciseCategory, { headers: this.getHeaders() });
  }

  deleteExerciseCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}
