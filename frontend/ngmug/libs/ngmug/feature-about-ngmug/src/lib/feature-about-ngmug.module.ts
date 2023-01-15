import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { REDIRECTION } from '@ngmug/shared/gh-utils';
import { ROUTING } from '@ngmug/shared/ngmug-utils';

const routes: Routes = [
  {
    path: ROUTING.getPath((p) => p.ngmug.about),
    component: GetStartedComponent,
  },
  {
    path: ROUTING.getPath((p) => p.ngmug.about),
    redirectTo: REDIRECTION,
  },
];

@NgModule({
  declarations: [GetStartedComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FeatureAboutNgmugModule {}
