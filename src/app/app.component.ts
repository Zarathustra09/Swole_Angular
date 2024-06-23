import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth.service";
import {ExerciseService} from "./services/exercise.service";
import {ExerciseCategoryService} from "./services/exercise-category.service";
import {ExerciseRecordService} from "./services/exercise-record.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AuthService, ExerciseService, ExerciseCategoryService, ExerciseRecordService]
})
export class AppComponent {
  title = 'Swole';
}
