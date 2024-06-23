import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseRecord } from '../../models/exercise-record.model';
import { ExerciseRecordService } from '../../services/exercise-record.service';
import { ExerciseService } from '../../services/exercise.service';
import { FormsModule } from "@angular/forms";
import { Exercise } from '../../models/exercise.model';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  styleUrls: ['./create-record.component.css']
})
export class CreateRecordComponent implements OnInit {
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
  exercises: Exercise[] = [];

  constructor(
    private exerciseRecordService: ExerciseRecordService,
    private exerciseService: ExerciseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadExercises();
  }

  loadExercises(): void {
    this.exerciseService.getAllExercises().subscribe(
      (data) => {
        this.exercises = data;
      },
      (error) => {
        console.error('Error fetching exercises:', error);
      }
    );
  }

  createExerciseRecord(): void {
    this.exerciseRecordService.createExerciseRecord(this.exerciseRecord).subscribe(
      (data) => {
        console.log('Exercise record created successfully', data);
        this.router.navigate(['/exercise-record']);
      },
      (error) => {
        console.error('Error creating exercise record', error);
      }
    );
  }
}
