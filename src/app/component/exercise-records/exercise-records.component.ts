import { Component, OnInit } from '@angular/core';
import { ExerciseRecord } from '../../models/exercise-record.model'; // Adjust path if necessary
import { ExerciseRecordService } from '../../services/exercise-record.service'; // Adjust path if necessary
import {Router, RouterLink} from '@angular/router';
import {DatePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-exercise-records',
  templateUrl: './exercise-records.component.html',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    RouterLink
  ],
  styleUrls: ['./exercise-records.component.css']
})
export class ExerciseRecordsComponent implements OnInit {
  exerciseRecords: ExerciseRecord[] = [];

  constructor(private exerciseRecordService: ExerciseRecordService, private router: Router) {}

  ngOnInit(): void {
    this.loadExerciseRecords();
  }

  loadExerciseRecords(): void {
    this.exerciseRecordService.getAllExerciseRecords().subscribe(
      (data) => {
        this.exerciseRecords = data;
      },
      (error) => {
        console.error('Error fetching exercise records:', error);
        // Handle error (e.g., show error message)
      }
    );
  }

  editExerciseRecord(recordId: number): void {
    this.router.navigate(['/update-record', recordId]); // Navigate to update record component with recordId parameter
  }


  deleteExerciseRecord(recordId: number): void {
    if (confirm('Are you sure you want to delete this exercise record?')) {
      this.exerciseRecordService.deleteExerciseRecord(recordId).subscribe(
        () => {
          console.log('Exercise record deleted successfully');
          this.loadExerciseRecords(); // Refresh the list after delete
        },
        (error) => {
          console.error('Error deleting exercise record', error);
          // Handle error (e.g., show error message)
        }
      );
    }
  }
}
