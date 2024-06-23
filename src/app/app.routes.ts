import { Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {ExerciseCategoryComponent} from "./component/exercise-category/exercise-category.component";
import {UpdateCategoryComponent} from "./component/update-category/update-category.component";
import {CreateCategoryComponent} from "./component/create-category/create-category.component";
import {ExerciseComponent} from "./component/exercise/exercise.component";
import {CreateExerciseComponent} from "./component/create-exercise/create-exercise.component";
import {UpdateExerciseComponent} from "./component/update-exercise/update-exercise.component";
import {ExerciseRecordsComponent} from "./component/exercise-records/exercise-records.component";
import {CreateRecordComponent} from "./component/create-record/create-record.component";
import {UpdateRecordComponent} from "./component/update-record/update-record.component";
import {CalendarComponent} from "./component/calendar/calendar.component";

export const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'exercise-category', component: ExerciseCategoryComponent},
  { path: 'update-category/:id', component: UpdateCategoryComponent },
  { path: 'create-category', component: CreateCategoryComponent },
  {path: 'exercises', component: ExerciseComponent},
  {path: 'create-exercise', component: CreateExerciseComponent},
  {path: 'update-exercise/:id', component: UpdateExerciseComponent},
  {path: 'exercise-record', component: ExerciseRecordsComponent},
  {path: 'create-record', component: CreateRecordComponent},
  {path: 'update-record/:id', component: UpdateRecordComponent},
  {path: 'calendar', component: CalendarComponent},


];
