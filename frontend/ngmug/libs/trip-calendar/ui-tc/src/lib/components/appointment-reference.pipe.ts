import { Pipe, PipeTransform } from '@angular/core';
import {
  Appointment,
  AppointmentSegment,
} from './calendar-example/calendar-example.component';

@Pipe({
  name: 'appointmentReference',
  standalone: true,
})
export class AppointmentReferencePipe implements PipeTransform {
  transform(
    value: AppointmentSegment,
    ...args: Appointment[][]
  ): Appointment | undefined {
    console.log(value);
    console.log(JSON.stringify(args));

    return args[0].find((a) => a.id == value.id);
  }
}
