import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseRecord } from '../../models/exercise-record.model'; // Adjust path if necessary
import { ExerciseRecordService } from '../../services/exercise-record.service';
import {FormsModule} from "@angular/forms"; // Adjust path if necessary

@Component({
  selector: 'app-update-record',
  templateUrl: './update-record.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./update-record.component.css']
})
export class UpdateRecordComponent implements OnInit {
  exerciseRecord: ExerciseRecord = {
    record_Id: 0,
    exercise_Id: 0,
    date_Recorded: new Date(),
    sets: 0,
    reps: 0,
    weight: 0,
    duration_Minutes: 0,
    notes: ''
  };

  constructor(
    private exerciseRecordService: ExerciseRecordService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadExerciseRecord();
  }

  loadExerciseRecord(): void {
    const recordId = Number(this.route.snapshot.paramMap.get('id'));
    this.exerciseRecordService.getExerciseRecordById(recordId).subscribe(
      (data) => {
        this.exerciseRecord = data;
      },
      (error) => {
        console.error('Error loading exercise record', error);
        // Handle error (e.g., show error message)
      }
    );
  }

  updateExerciseRecord(): void {
    this.exerciseRecordService.updateExerciseRecord(this.exerciseRecord.record_Id, this.exerciseRecord).subscribe(
      () => {
        console.log('Exercise record updated successfully');
        this.router.navigate(['/exercise-record']); // Redirect to exercise records page after update
      },
      (error) => {
        console.error('Error updating exercise record', error);
        // Handle error (e.g., show error message)
      }
    );
  }

  deleteExerciseRecord(): void {
    if (confirm('Are you sure you want to delete this exercise record?')) {
      this.exerciseRecordService.deleteExerciseRecord(this.exerciseRecord.record_Id).subscribe(
        () => {
          console.log('Exercise record deleted successfully');
          this.router.navigate(['/exercise-record']); // Redirect to exercise records page after deletion
        },
        (error) => {
          console.error('Error deleting exercise record', error);
          // Handle error (e.g., show error message)
        }
      );
    }
  }
}
