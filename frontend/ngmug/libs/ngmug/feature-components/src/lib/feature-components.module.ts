import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { ROUTING } from '@ngmug/shared/ngmug-utils';
import { REDIRECTION } from '@ngmug/shared/gh-utils';
import { ComboboxExampleComponent } from './components/combobox-example/combobox-example.component';
import { DialogExampleComponent } from './components/dialog-example/dialog-example.component';

const routes: Routes = [
  {
    path: ROUTING.getPath((p) => p.headlessui.getstarted),
    component: GetStartedComponent,
  },
  {
    path: ROUTING.getPath((p) => p.headlessui.combobox),
    component: ComboboxExampleComponent,
  },
  {
    path: ROUTING.getPath((p) => p.headlessui.dialog),
    component: DialogExampleComponent,
  },
  {
    path: REDIRECTION,
    redirectTo: ROUTING.getPath((p) => p.headlessui.getstarted),
  },
];

@NgModule({
  declarations: [
    GetStartedComponent,
    ComboboxExampleComponent,
    DialogExampleComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FeatureComponentsModule {}
