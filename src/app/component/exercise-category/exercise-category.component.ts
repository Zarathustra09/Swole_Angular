import { Component, OnInit } from '@angular/core';
import { ExerciseCategoryService } from '../../services/exercise-category.service'; // Update the path as necessary
import { ExerciseCategory } from '../../models/exercise-category.model';
import {NgForOf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RouterLink} from "@angular/router"; // Update the path as necessary

@Component({
  selector: 'app-exercise-category',
  templateUrl: './exercise-category.component.html',
  standalone: true,
  imports: [
    NgForOf, HttpClientModule, RouterLink
  ],
  styleUrls: ['./exercise-category.component.css']
})
export class ExerciseCategoryComponent implements OnInit {
  exerciseCategories: ExerciseCategory[] = [];

  constructor(private exerciseCategoryService: ExerciseCategoryService) { }

  ngOnInit(): void {
    this.loadExerciseCategories();
  }

  loadExerciseCategories(): void {
    this.exerciseCategoryService.getAllExerciseCategories().subscribe(
      data => {
        this.exerciseCategories = data;
      },
      error => {
        console.error('Error fetching exercise categories', error);
      }
    );
  }

  editCategory(category: ExerciseCategory): void {
    // Implement your edit logic here
    console.log('Edit category:', category);
  }


}
