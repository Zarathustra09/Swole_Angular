import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExerciseRecord } from '../models/exercise-record.model'; // Update the path as necessary

@Injectable({
  providedIn: 'root'
})
export class ExerciseRecordService {
  private apiUrl = 'https://localhost:7137/api/ExerciseRecords';

  constructor(private http: HttpClient) { }

  private getHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  getAllExerciseRecords(): Observable<ExerciseRecord[]> {
    return this.http.get<ExerciseRecord[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  getExerciseRecordById(id: number): Observable<ExerciseRecord> {
    return this.http.get<ExerciseRecord>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  createExerciseRecord(exerciseRecord: ExerciseRecord): Observable<ExerciseRecord> {
    return this.http.post<ExerciseRecord>(this.apiUrl, exerciseRecord, { headers: this.getHeaders() });
  }

  updateExerciseRecord(id: number, exerciseRecord: ExerciseRecord): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, exerciseRecord, { headers: this.getHeaders() });
  }

  deleteExerciseRecord(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}
