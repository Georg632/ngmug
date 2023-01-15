import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { ROUTING } from '@ngmug/shared/ngmug-utils';
import { REDIRECTION } from '@ngmug/shared/gh-utils';

const routes: Routes = [
  {
    path: ROUTING.getPath((p) => p.rxjs.about),
    component: GetStartedComponent,
  },
  {
    path: ROUTING.getPath((p) => p.rxjs.about),
    redirectTo: REDIRECTION,
  },
];

@NgModule({
  declarations: [GetStartedComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FeatureRxjsHelpersModule {}
