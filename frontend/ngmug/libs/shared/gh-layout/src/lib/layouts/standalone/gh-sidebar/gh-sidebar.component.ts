import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConfigService } from '@ngmug/ngmug/utils';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

export interface NavbarItem {
  url: string[];
  icon: string;
  translationKey: string;
}

@Component({
  selector: 'gh-sidebar',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './gh-sidebar.component.html',
})
export class GhSidebarComponent {
  logoUrl: string = AppConfigService.settings.logoUrl;
  navbarItems: NavbarItem[] = [
    {
      icon: 'mdi mdi-home',
      translationKey: 'layouts.fullLayout.sidebar.homeItem',
      url: ['ngmug'],
    },
    {
      icon: 'mdi mdi-vector-square',
      translationKey: 'layouts.fullLayout.sidebar.componentItem',
      url: ['headless-ui'],
    },
  ];
}
