import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from '@ngmug/shared/gh-layout';
import { ROUTING } from '@ngmug/shared/ngmug-utils';
import { REDIRECTION } from '@ngmug/shared/gh-utils';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: ROUTING.getPath((p) => p.ngmug),
        loadChildren: () =>
          import('@ngmug/ngmug/feature-about-ngmug').then(
            (m) => m.FeatureAboutNgmugModule
          ),
      },
      {
        path: ROUTING.getPath((p) => p.headlessui),
        loadChildren: () =>
          import('@ngmug/ngmug/feature-components').then(
            (m) => m.FeatureComponentsModule
          ),
      },
      {
        path: ROUTING.getPath((p) => p.rxjs),
        loadChildren: () =>
          import('@ngmug/ngmug/feature-rxjs-helpers').then(
            (m) => m.FeatureRxjsHelpersModule
          ),
      },
      {
        path: REDIRECTION,
        redirectTo: ROUTING.getPath((p) => p.ngmug),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class FeatureShellNgmugModule {}
