import { createAction, props } from '@ngrx/store';
import { Appointment } from '../../types/Appointment';

export const createAppointment = createAction(
    '[Calendar] create Appointment',
    props<{ appointment: Appointment }>()
);

export const deleteAppointment = createAction(
    '[Calendar] delete Appointment',
    props<{ id: number }>()
);

export const updateAppointment = createAction(
    '[Calendar] update Appointment',
    props<{ appointmentId: number, appointment: Appointment }>()
);

export const setActiveDate = createAction('[activeDate] set active date', props<{ date: Date }>());
export const resetActiveDate = createAction('[activeDate] Reset active date',);

