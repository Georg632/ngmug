import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConfigService } from '@ngmug/ngmug/utils';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { LayoutHelperService } from '../../helpers/layout-helper.service';
import { GhValueDirective } from '@ngmug/shared/gh-utils';

export interface NavbarItem {
  url: string[];
  icon: string;
  translationKey: string;
}

@Component({
  selector: 'gh-sidebar',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule, GhValueDirective],
  templateUrl: './gh-sidebar.component.html',
})
export class GhSidebarComponent {
  sidebarExtended$ = this.layoutHelperService.sidebarExtended$;
  logoUrl: string = AppConfigService.settings.logoUrl;
  navbarItems: NavbarItem[] = [
    {
      icon: 'mdi mdi-home',
      translationKey: 'navigation.homeItem',
      url: ['ngmug'],
    },
    {
      icon: 'mdi mdi-vector-square',
      translationKey: 'navigation.headlessItem',
      url: ['headless-ui'],
    },
    {
      icon: 'mdi mdi-vector-square',
      translationKey: 'navigation.obsvState',
      url: ['observable-state'],
    },
  ];

  constructor(private layoutHelperService: LayoutHelperService) {}

  closeSidebar() {
    this.sidebarExtended$.next(false);
  }
}