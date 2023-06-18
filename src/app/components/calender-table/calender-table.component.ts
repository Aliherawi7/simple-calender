import { Component, Input } from '@angular/core';
import { Store } from "@ngrx/store"
import { ActiveDate } from 'src/app/types/SelectedDate';
import * as actions from 'src/app/state/actions/actions';
import { State } from '../../state/state';


@Component({
  selector: 'app-calender-table',
  templateUrl: './calender-table.component.html',
  styleUrls: ['./calender-table.component.css']
})

export class CalendarTableComponent {

  // Define variables for weeks, month, year, and selected date
  weeks: any[] = [];
  month: string;
  year: number;
  @Input() activeDate: Date;

  constructor(private state: Store<State>) {
    // Initialize the calendar with the current month and year
    const date = new Date();
    this.month = this.getMonthName(date.getMonth());
    this.year = date.getFullYear();
    this.activeDate = date;
    this.generateCalendar(date);
  }

  onDateSelected(date: Date) {
    this.state.dispatch(actions.setActiveDate({ date }));
  }

  // Go to the previous month
  prev() {
    const date = new Date(this.year, this.activeDate.getMonth() - 1, 1);
    this.month = this.getMonthName(date.getMonth());
    this.year = date.getFullYear();
    this.activeDate = date;
    this.generateCalendar(date);
  }

  // Go to the next month
  next() {
    const date = new Date(this.year, this.activeDate.getMonth() + 1, 1);
    this.month = this.getMonthName(date.getMonth());
    this.year = date.getFullYear();
    this.activeDate = date;
    this.generateCalendar(date);
  }

  // Select a date and regenerate the calendar
  select(day: ActiveDate) {
    console.log(day)
    this.activeDate = day.date;
    this.generateCalendar(day.date);
    this.state.dispatch(actions.setActiveDate({ date: day.date }))
  }

  // Generate the calendar for a given month and year
  generateCalendar(date: Date) {
    // Calculate the first and last days of the month
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    // Calculate the first and last days of the calendar view
    const startOfWeek = new Date(startOfMonth);
    startOfWeek.setDate(startOfMonth.getDate() - startOfMonth.getDay());
    const endOfWeek = new Date(endOfMonth);
    endOfWeek.setDate(endOfMonth.getDate() + (6 - endOfMonth.getDay()));

    // Generate the weeks for the calendar view
    const weeks = [];
    let current = new Date(startOfWeek);
    while (current <= endOfWeek) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        week.push({
          date: new Date(current),
          isCurrentMonth: current.getMonth() === date.getMonth(),
          isSelected: current.toDateString() === this.activeDate.toDateString()
        });
        current.setDate(current.getDate() + 1);
      }
      weeks.push(week);
    }
    this.weeks = weeks;
  }

  // Get the name of the month for a given month number
  getMonthName(month: number) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'];
    return monthNames[month];
  }

}