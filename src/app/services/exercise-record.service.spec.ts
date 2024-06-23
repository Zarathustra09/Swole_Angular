import { TestBed } from '@angular/core/testing';

import { ExerciseRecordService } from './exercise-record.service';

describe('ExerciseRecordService', () => {
  let service: ExerciseRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
