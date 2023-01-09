import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { LayoutHelperService } from '../../helpers/layout-helper.service';
import { GhValueDirective } from '@ngmug/shared/gh-utils';
import { AppConfigService } from '@ngmug/shared/ngmug-utils';

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
      icon: 'mdi mdi-head-remove-outline',
      translationKey: 'navigation.headlessItem',
      url: ['headless-ui'],
    },
    {
      icon: 'mdi mdi-medical-bag',
      translationKey: 'navigation.rxjsHelpers',
      url: ['observable-state'],
    },
  ];

  constructor(private layoutHelperService: LayoutHelperService) {}

  closeSidebar() {
    console.log('closeSidebar');
    this.sidebarExtended$.next(false);
  }
}
