import { Component, OnInit } from '@angular/core';
import { ROUTING } from '@ngmug/shared/ngmug-utils';

@Component({
  selector: 'ngmug-get-started',
  templateUrl: './get-started.component.html',
})
export class GetStartedComponent implements OnInit {
  rxjsAboutRoute = ROUTING.getNavRoute((p) => p.rxjs.getstarted);

  ngOnInit(): void {}
}
