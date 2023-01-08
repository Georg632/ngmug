import { Component } from '@angular/core';
import { LayoutHelperService } from '@ngmug/shared/gh-layout';
import { TwBreakpoints } from '@ngmug/shared/gh-utils';

@Component({
  selector: 'ngmug-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ngmug-portal';

  constructor(private layoutHelperService: LayoutHelperService) {}

  twBreakpointChange(twBreakpoint: TwBreakpoints) {
    switch (twBreakpoint) {
      case TwBreakpoints.xxl:
      case TwBreakpoints.xl:
      case TwBreakpoints.lg:
      case TwBreakpoints.md:
        this.layoutHelperService.sidebarExtended$.next(true);
        break;
      case TwBreakpoints.sm:
        this.layoutHelperService.sidebarExtended$.next(false);
        break;
    }
  }
}
