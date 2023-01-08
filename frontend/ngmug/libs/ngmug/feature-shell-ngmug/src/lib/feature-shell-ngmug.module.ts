import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes } from '@angular/router';
import { ROUTING } from '@ngmug/shared/ngmug-utils';

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
