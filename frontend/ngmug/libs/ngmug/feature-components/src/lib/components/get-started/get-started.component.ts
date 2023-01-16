import { Component } from '@angular/core';
import { ROUTING } from '@ngmug/shared/ngmug-utils';

@Component({
  selector: 'ngmug-get-started',
  templateUrl: './get-started.component.html',
})
export class GetStartedComponent {
  comboboxRoute = ROUTING.getNavRoute((p) => p.headlessui.combobox);
  dialogRoute = ROUTING.getNavRoute((p) => p.headlessui.dialog);
}
