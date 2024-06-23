import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../models/exercise.model'; // Adjust path if necessary
import { ExerciseService } from '../../services/exercise.service';
import {NgForOf} from "@angular/common"; // Adjust path if necessary

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  exercises: Exercise[] = [];

  constructor(private exerciseService: ExerciseService) { }

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

  editExercise(exercise: Exercise): void {
    // Implement edit functionality
  }

  deleteExercise(exerciseId: number): void {
    if (confirm('Are you sure you want to delete this exercise?')) {
      this.exerciseService.deleteExercise(exerciseId).subscribe(
        () => {
          // Update exercises list after deletion
          this.exercises = this.exercises.filter(e => e.exercise_Id !== exerciseId);
        },
        (error) => {
          console.error('Error deleting exercise:', error);
        }
      );
    }
  }
}
