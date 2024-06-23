import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseRecordsComponent } from './exercise-records.component';

describe('ExerciseRecordsComponent', () => {
  let component: ExerciseRecordsComponent;
  let fixture: ComponentFixture<ExerciseRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseRecordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
