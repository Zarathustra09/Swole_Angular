export interface ExerciseRecord {
  record_Id: number;
  exercise_Id: number;
  date_Recorded: Date;
  sets: number;
  reps: number;
  weight?: number;
  duration_Minutes?: number;
  notes?: string;
}
