import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTING } from '@ngmug/ngmug/utils';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ROUTING.NgmugOverview,
  },
  {
    path: '**',
    redirectTo: ROUTING.NgmugOverview,
  },
];

@NgModule({
  imports: [CommonModule],
})
export class FeatureShellNgmugModule {}
