import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ROUTING } from '@ngmug/shared/ngmug-utils';
import { FullLayoutComponent } from '@ngmug/shared/gh-layout';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: ROUTING.AboutNgmug,
        loadChildren: () =>
          import('@ngmug/ngmug/feature-about-ngmug').then(
            (m) => m.FeatureAboutNgmugModule
          ),
      },
      {
        path: ROUTING.HeadlessUi,
        loadChildren: () =>
          import('@ngmug/ngmug/feature-components').then(
            (m) => m.FeatureComponentsModule
          ),
      },
      {
        path: ROUTING.RxjsHelper,
        loadChildren: () =>
          import('@ngmug/ngmug/feature-rxjs-helpers').then(
            (m) => m.FeatureRxjsHelpersModule
          ),
      },
      {
        path: ROUTING.Redirection,
        redirectTo: ROUTING.AboutNgmug,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class FeatureShellNgmugModule {}
