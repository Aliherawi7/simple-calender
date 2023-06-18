import { Injectable } from '@angular/core';
import { Appointment } from '../types/Appointment';
import { Store } from '@ngrx/store';
import { State } from '../state/state';
import { DateAndTimeService } from './date-and-time.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private store: Store<State>, private dateTimeService: DateAndTimeService) { }

  getAllAppointmentOfDate(appointmentOfDate: Appointment[]): Appointment[] {
    var appointments = new Array<Appointment>
    for (let i = 0; i < 24; i++) {
      var spec = appointmentOfDate?.find(item => {
        if (item.time) {
          return Number.parseInt(item.time.split(":")[0]) == i;
        }
        else return false
      })

      if (!spec) {
        spec = {
          id: null,
          date: null,
          description: "",
          time: null,
          title: null
        }
      }
      appointments.push(spec)
    }
    return appointments
  }



}