import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ROUTING } from '@ngmug/shared/ngmug-utils';
import { GetStartedComponent } from './components/get-started/get-started.component';

const routes: Routes = [
  {
    path: ROUTING.AbGetStarted,
    component: GetStartedComponent,
  },
  {
    path: ROUTING.Redirection,
    redirectTo: ROUTING.AbGetStarted,
  },
];

@NgModule({
  declarations: [GetStartedComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FeatureAboutNgmugModule {}
