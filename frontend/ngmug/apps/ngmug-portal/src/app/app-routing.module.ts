import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FullLayoutComponent } from '@ngmug/shared/gh-layout';
import { ROUTING } from '@ngmug/shared/ngmug-utils';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: ROUTING.Ngmug,
        loadChildren: () =>
          import('@ngmug/ngmug/feature-shell-ngmug').then(
            (m) => m.FeatureShellNgmugModule
          ),
      },
      {
        path: ROUTING.HeadlessUi,
        loadChildren: () =>
          import('@ngmug/ngmug/feature-shell-ngmug').then(
            (m) => m.FeatureShellNgmugModule
          ),
      },
      {
        path: ROUTING.Redirection,
        redirectTo: ROUTING.Ngmug,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes), FullLayoutComponent],
  exports: [RouterModule],
})
export class AppRoutingModule {}
