import { Component, Input } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DateAndTimeService } from 'src/app/services/date-and-time.service';
import { Appointment } from 'src/app/types/Appointment';
import { Store } from '@ngrx/store';
import {
  CdkDragStart,
  CdkDragMove,
  CdkDragEnd,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { State } from 'src/app/state/state';
import { selectActiveDate, selectAppointments } from 'src/app/state/reducer/reducer';
import { updateAppointment } from 'src/app/state/actions/actions';


@Component({
  selector: 'app-appointments-view',
  templateUrl: './appointments-view.component.html',
  styleUrls: ['./appointments-view.component.css']
})
export class AppointmentsViewComponent {
  @Input() date: Date = new Date();
  appointments: Appointment[];
  hours: string[] = []
  weekDay?: string;
  dayNumber?: number;


  constructor(private appointmentService: AppointmentService,
    private dateTimeService: DateAndTimeService,
    private store: Store<State>

  ) {
    var currentDate = new Date();
    this.store.select(selectActiveDate).subscribe((date: Date) => {
      currentDate = date
      this.dayNumber = date.getDate()
      this.weekDay = dateTimeService.getWeekdayAbbreviation(date.getDay());
      this.hours = this.dateTimeService.getTimesArray();


      this.store.select(selectAppointments).subscribe((app: Appointment[]) => {
        appointmentOfDate = app.filter(item => {
          return item.date?.getDate() == currentDate.getDate() && item.date.getMonth() == currentDate.getMonth() && item.date.getFullYear() == currentDate.getFullYear();
        })
        this.appointments = new Array<Appointment>
        this.hours = this.dateTimeService.getTimesArray();
        console.log(this.hours)
        this.appointments = this.appointmentService.getAllAppointmentOfDate(appointmentOfDate)
      })

    })

    var appointmentOfDate = new Array<Appointment>
    this.appointments = new Array<Appointment>

    this.store.select(selectAppointments).subscribe((app: Appointment[]) => {
      appointmentOfDate = app.filter(item => {
        return item.date?.getDate() == currentDate.getDate() && item.date.getMonth() == currentDate.getMonth() && item.date.getFullYear() == currentDate.getFullYear();
      })
      this.appointments = new Array<Appointment>
      this.hours = this.dateTimeService.getTimesArray();
      this.appointments = this.appointmentService.getAllAppointmentOfDate(appointmentOfDate)
    })


  }



  drop(event: CdkDragDrop<Appointment[]>) {
    console.log(event)
    var appointment = { ...event.item.data };
    var time = this.dateTimeService.convertHourTo12Hour(event.currentIndex);

    time = `${event.currentIndex}:${appointment.time.split(":")[1].substring(0, 2)}`;
    appointment.time = time
    this.store.dispatch(updateAppointment({ appointmentId: appointment.id, appointment: appointment }))
    console.log(time)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  onDragStarted(event: CdkDragStart) {
    console.log('Drag started!');
  }

  onDragMoved(event: CdkDragMove) {
    console.log('Drag Moved!');
  }

  onDragEnded(event: CdkDragEnd) {
    console.log('Drag Ended!')
    console.log(event)
  }

  noReturnPredicate() {
    return false;
  }


}