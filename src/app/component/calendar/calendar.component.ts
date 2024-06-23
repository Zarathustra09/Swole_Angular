import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { DateClickArg, EventDragStopArg } from '@fullcalendar/interaction';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { ExerciseRecord } from "../../models/exercise-record.model";
import { ExerciseRecordService } from "../../services/exercise-record.service";
import { Router } from "@angular/router";
import { DatePipe, NgIf } from "@angular/common";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  standalone: true,
  imports: [
    FullCalendarModule,
    DatePipe,
    NgIf
  ],
  providers: [DatePipe],
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarOptions?: CalendarOptions;
  @ViewChild('fullcalendar') fullcalendar?: FullCalendarComponent;

  constructor(
    private exerciseRecordService: ExerciseRecordService,
    private router: Router,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      editable: true,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [],
      dateClick: this.handleDateClick.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventDragStop: this.handleEventDragStop.bind(this),
      eventContent: (arg) => {
        return { html: `<b>${arg.event.title}</b><br><span>${arg.event.extendedProps['notes']}</span>` };
      }
    };

    this.fetchExerciseRecords();
  }

  fetchExerciseRecords() {
    this.exerciseRecordService.getAllExerciseRecords().subscribe((exerciseRecords: ExerciseRecord[]) => {
      this.calendarOptions!.events = exerciseRecords.map(record => ({
        id: record.record_Id.toString(), // Ensure each record has an id
        title: `Exercise ${record.exercise_Id}`, // Adjust title as needed
        start: this.datePipe.transform(record.date_Recorded, 'yyyy-MM-dd')!, // Format date as required
        backgroundColor: '#3788d8', // Optional: set a default background color
        borderColor: '#3788d8', // Optional: set a default border color
        textColor: '#ffffff', // Optional: set a default text color
        extendedProps: {
          notes: record.notes
        }
      }));
      if (this.fullcalendar) {
        this.fullcalendar.getApi().removeAllEvents();
        this.fullcalendar.getApi().addEventSource(this.calendarOptions!.events);
      }
    });
  }

  handleDateClick(arg: DateClickArg) {
    console.log(arg);
  }

  handleEventClick(arg: EventClickArg) {
    // Navigate to the update-record page with the clicked record's id
    this.router.navigate(['/update-record', arg.event.id]);
  }

  handleEventDragStop(arg: EventDragStopArg) {
    console.log(arg);
  }

  updateHeader() {
    this.calendarOptions!.headerToolbar = {
      left: 'prev,next myCustomButton',
      center: 'title',
      right: ''
    };
  }
}
