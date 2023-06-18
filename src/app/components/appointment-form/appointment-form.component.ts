import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as actions from '../../state/actions/actions';
import { State } from '../../state/state'
import { Appointment } from 'src/app/types/Appointment';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  // Define an output event emitter for when the form is submitted
  appointmentForm!: FormGroup;
  @Output() submitted = new EventEmitter<any>();
  @Output() close = new EventEmitter();
  title: string = '';
  date: string = '';
  time: string = '';
  description: string = ''


  constructor(private fb: FormBuilder, private store: Store<State>) {

  }

  ngOnInit() {
    this.appointmentForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required)
    });
  }

  // Handle form submission

  submitForm() {
    console.log(this.appointmentForm.valid)
    if (this.appointmentForm.valid) {
      const appointment: Appointment = {
        id: null,
        title: this.appointmentForm.value.title,
        date: new Date(this.appointmentForm.value.date),
        time: this.appointmentForm.value.time,
        description: this.appointmentForm.value.description
      };

      this.store.dispatch(actions.createAppointment({ appointment }));
      this.closeFrom();
    }
  }

  closeFrom(): void {
    this.appointmentForm.reset()
    this.close.emit();
  }

}