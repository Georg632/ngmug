import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTcModule } from '@ngmug/trip-calendar/ui-tc';
import { RouterModule, Routes } from '@angular/router';
import { CalendarViewerComponent } from './components/calendar-viewer/calendar-viewer.component';

const routes: Routes = [
  {
    path: 'viewer',
    component: CalendarViewerComponent,
  },
  { path: '**', redirectTo: 'viewer' },
];

@NgModule({
  declarations: [CalendarViewerComponent],
  imports: [CommonModule, UiTcModule, RouterModule.forChild(routes)],
})
export class FeatureCalendarModule {}
