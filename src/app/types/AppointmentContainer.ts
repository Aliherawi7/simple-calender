import { Appointment } from "./Appointment";

export interface AppointmentContainer {
    hour: string,
    appointment: Appointment | undefined
}