import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../models/exercise.model'; // Adjust path if necessary
import { ExerciseService } from '../../services/exercise.service'; // Adjust path if necessary
import { ExerciseCategoryService } from '../../services/exercise-category.service'; // Adjust path if necessary
import { Router } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { ExerciseCategory } from '../../models/exercise-category.model';
import {NgForOf} from "@angular/common"; // Adjust path if necessary

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent implements OnInit {
  exercise: Exercise = {
    exercise_Id: 0,
    exercise_Name: '',
    category_Id: 0
  };
  categories: ExerciseCategory[] = [];

  constructor(
    private exerciseService: ExerciseService,
    private exerciseCategoryService: ExerciseCategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.exerciseCategoryService.getAllExerciseCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

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
