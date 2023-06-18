import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../state/state';
import { selectActiveDate } from 'src/app/state/reducer/reducer';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showAppointmentForm: boolean = false;

  constructor(private store: Store<State>) {
  }


  showAppointment() {
    this.showAppointmentForm = !this.showAppointmentForm
    this.store.select(selectActiveDate)

  }




}
