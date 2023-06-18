import { createReducer, createSelector, on } from '@ngrx/store';
import * as actions from '../actions/actions';
import { Action } from '@ngrx/store/src/models';
import { initialState, State } from '../state';


let nextId = 1;


export const appReducer = createReducer(
    initialState,
    on(actions.setActiveDate, (state, { date }) => {
        return { ...state, activeDate: date }
    }),
    on(actions.resetActiveDate, (state,) => ({ ...state, selectedDate: new Date() })),
    on(actions.createAppointment, (state, { appointment }) => {
        appointment = { ...appointment, id: nextId++ }
        return {
            ...state,
            appointments: [...state.appointments, appointment],
        }
    }),
    on(actions.deleteAppointment, (state, { id }) => ({
        ...state,
        appointments: state.appointments.filter((appointment) => appointment.id !== id),
    })),
    on(actions.updateAppointment, (state, { appointmentId, appointment }) => {
        var updatedAppointments = state.appointments.filter(item => item.id != appointmentId)
        updatedAppointments.push(appointment)
        return {
            ...state,
            appointments: updatedAppointments
        }
    }),
    on(actions.deleteAppointment, (state, { id }) => {
        var target = state.appointments.findIndex(item => {
            item.id == id
        })
        state.appointments.splice(target, 1);
        return {
            ...state,
            appointments: state.appointments
        }
    }),
);

export function _appReducer(state: State, action: Action) {
    return appReducer(state, action);
}



export const selectActiveDate = (state: State) => {
    return (Object.values(state)[0].activeDate);
}
export const selectAppointments = (state: State) => {
    return (Object.values(state)[0].appointments);
}







