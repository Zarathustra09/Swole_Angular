import { Component } from '@angular/core';
import { Exercise } from '../../models/exercise.model'; // Adjust path if necessary
import { ExerciseService } from '../../services/exercise.service'; // Adjust path if necessary
import { Router } from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent {
  exercise: Exercise = {
    exercise_Id: 0,
    exercise_Name: '',
    category_Id: 0
  };

  constructor(private exerciseService: ExerciseService, private router: Router) {}

  createExercise(): void {
    this.exerciseService.createExercise(this.exercise).subscribe(
      (response) => {
        console.log('Exercise created successfully', response);
        this.router.navigate(['/exercises']); // Navigate to exercises list after successful creation
      },
      (error) => {
        console.error('Error creating exercise', error);
        // Handle error (e.g., show error message)
      }
    );
  }
}
