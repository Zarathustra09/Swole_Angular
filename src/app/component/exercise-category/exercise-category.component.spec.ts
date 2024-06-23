import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseCategoryComponent } from './exercise-category.component';

describe('ExerciseCategoryComponent', () => {
  let component: ExerciseCategoryComponent;
  let fixture: ComponentFixture<ExerciseCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
