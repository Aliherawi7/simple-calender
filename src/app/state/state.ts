import { Appointment } from '../types/Appointment';

export interface State {
    activeDate: Date,
    appointments: Appointment[],
}

export const initialState: State = {
    appointments: new Array<Appointment>,
    activeDate: new Date(),
};