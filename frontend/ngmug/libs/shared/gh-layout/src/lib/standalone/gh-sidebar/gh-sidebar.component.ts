import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { LayoutHelperService } from '../../helpers/layout-helper.service';
import { GhValueDirective } from '@ngmug/shared/gh-utils';
import { AppConfigService, ROUTING } from '@ngmug/shared/ngmug-utils';

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
      url: ROUTING.getNavRoute((p) => p.ngmug),
    },
    {
      icon: 'mdi mdi-head-remove-outline',
      translationKey: 'navigation.headlessItem',
      url: ROUTING.getNavRoute((p) => p.headlessui),
    },
    {
      icon: 'mdi mdi-medical-bag',
      translationKey: 'navigation.rxjsHelpers',
      url: ROUTING.getNavRoute((p) => p.rxjs),
    },
    {
      icon: 'mdi mdi-router',
      translationKey: 'navigation.typesafeRouting',
      url: ROUTING.getNavRoute((p) => p.routing),
    },
  ];

  constructor(private layoutHelperService: LayoutHelperService) {}

  closeSidebar() {
    console.log('closeSidebar');
    this.sidebarExtended$.next(false);
  }
}
