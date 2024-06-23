import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseCategory } from '../../models/exercise-category.model'; // Update the path as necessary
import { ExerciseCategoryService } from '../../services/exercise-category.service';
import {FormsModule} from "@angular/forms"; // Update the path as necessary

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
  newCategory: ExerciseCategory = {
    category_Id: 0, // Assuming the server generates the ID
    category_Name: ''
  };

  constructor(private categoryService: ExerciseCategoryService, private router: Router) { }

  createCategory(): void {
    this.categoryService.createExerciseCategory(this.newCategory).subscribe(
      () => {
        console.log('Category created successfully');
        this.router.navigate(['/exercise-category']); // Redirect to category list after creation
      },
      error => {
        console.error('Error creating category', error);
        // Handle create error (e.g., show error message)
      }
    );
  }
}
