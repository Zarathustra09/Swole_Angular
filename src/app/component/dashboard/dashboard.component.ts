import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {CalendarComponent} from "../calendar/calendar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CalendarComponent, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
