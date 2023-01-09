import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ROUTING } from '@ngmug/shared/ngmug-utils';
import { GetStartedComponent } from './components/get-started/get-started.component';

const routes: Routes = [
  {
    path: ROUTING.RxGetStarted,
    component: GetStartedComponent,
  },
  {
    path: ROUTING.Redirection,
    redirectTo: ROUTING.RxGetStarted,
  },
];

@NgModule({
  declarations: [GetStartedComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FeatureRxjsHelpersModule {}
