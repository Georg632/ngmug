import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHelperService } from '../../helpers/layout-helper.service';

@Component({
  selector: 'gh-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gh-topbar.component.html',
})
export class GhTopbarComponent {
  sidebarExtended$ = this.layoutHelperService.sidebarExtended$;

  constructor(private layoutHelperService: LayoutHelperService) {}

  extendSidebar() {
    this.sidebarExtended$.next(true);
  }
}
