import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TcLayoutComponent } from './layout/tc-layout/tc-layout.component';

const routes: Routes = [
  {
    path: '',
    component: TcLayoutComponent,
    children: [
      {
        path: 'calendar',
        loadChildren: () =>
          import('@ngmug/trip-calendar/feature-calendar').then(
            (m) => m.FeatureCalendarModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [TcLayoutComponent],
})
export class FeatureShellTcModule {}
