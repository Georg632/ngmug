import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarExampleComponent } from './components/calendar-example/calendar-example.component';
import { AppointmentReferencePipe } from './components/appointment-reference.pipe';
import { GhValueDirective } from '@ngmug/shared/gh-utils';

@NgModule({
  imports: [CommonModule, AppointmentReferencePipe, GhValueDirective],
  exports: [CalendarExampleComponent],
  declarations: [CalendarExampleComponent],
})
export class UiTcModule {}
