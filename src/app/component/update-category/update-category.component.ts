import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseCategory } from '../../models/exercise-category.model'; // Update the path as necessary
import { ExerciseCategoryService } from '../../services/exercise-category.service';
import {FormsModule} from "@angular/forms"; // Update the path as necessary

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  category: ExerciseCategory = {
    category_Id: 0,
    category_Name: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: ExerciseCategoryService
  ) { }

  ngOnInit(): void {
    const categoryId = Number(this.route.snapshot.paramMap.get('id'));
    this.categoryService.getExerciseCategoryById(categoryId).subscribe(
      category => {
        this.category = category;
      },
      error => {
        console.error('Error fetching category', error);
      }
    );
  }

  updateCategory(): void {
    this.categoryService.updateExerciseCategory(this.category.category_Id, this.category).subscribe(
      () => {
        console.log('Category updated successfully');
        this.router.navigate(['/exercise-categories']); // Redirect to category list after update
      },
      error => {
        console.error('Error updating category', error);
        // Handle update error (e.g., show error message)
      }
    );
  }

  deleteCategory(): void {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categoryService.deleteExerciseCategory(this.category.category_Id).subscribe(
        () => {
          console.log('Category deleted successfully');
          this.router.navigate(['/exercise-category']); // Redirect to category list after delete
        },
        error => {
          console.error('Error deleting category', error);
          // Handle delete error (e.g., show error message)
        }
      );
    }
  }
}
