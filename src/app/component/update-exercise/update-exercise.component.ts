import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from '../../models/exercise.model'; // Adjust path if necessary
import { ExerciseService } from '../../services/exercise.service';
import {FormsModule} from "@angular/forms"; // Adjust path if necessary

@Component({
  selector: 'app-update-exercise',
  templateUrl: './update-exercise.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./update-exercise.component.css']
})
export class UpdateExerciseComponent implements OnInit {
  exercise_Id: number = 0;
  exercise: Exercise = {
    exercise_Id: 0,
    exercise_Name: '',
    category_Id: 0
  };

  constructor(
    private route: ActivatedRoute,
    private exerciseService: ExerciseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.exercise_Id = id ? +id : 0; // Default to 0 if id is null
      this.loadExercise(this.exercise_Id);
    });
  }

  loadExercise(id: number): void {
    this.exerciseService.getExerciseById(id).subscribe(
      (data) => {
        this.exercise = data;
      },
      (error) => {
        console.error('Error fetching exercise:', error);
        // Handle error (e.g., show error message)
      }
    );
  }

  updateExercise(): void {
    this.exerciseService.updateExercise(this.exercise_Id, this.exercise).subscribe(
      () => {
        console.log('Exercise updated successfully');
        this.router.navigate(['/exercises']); // Navigate to exercises list after successful update
      },
      (error) => {
        console.error('Error updating exercise', error);
        // Handle error (e.g., show error message)
      }
    );
  }

  deleteExercise(): void {
    if (confirm('Are you sure you want to delete this exercise?')) {
      this.exerciseService.deleteExercise(this.exercise_Id).subscribe(
        () => {
          console.log('Exercise deleted successfully');
          this.router.navigate(['/exercises']); // Navigate to exercises list after successful delete
        },
        (error) => {
          console.error('Error deleting exercise', error);
          // Handle error (e.g., show error message)
        }
      );
    }
  }
}
