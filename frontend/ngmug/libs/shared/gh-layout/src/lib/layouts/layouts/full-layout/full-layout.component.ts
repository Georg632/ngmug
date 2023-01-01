import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GhTopbarComponent } from '../../standalone/gh-topbar/gh-topbar.component';
import { GhSidebarComponent } from '../../standalone/gh-sidebar/gh-sidebar.component';
import { GhFooterComponent } from '../../standalone/gh-footer/gh-footer.component';

@Component({
  selector: 'full-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    GhTopbarComponent,
    GhSidebarComponent,
    GhFooterComponent,
  ],
  templateUrl: './full-layout.component.html',
})
export class FullLayoutComponent {}
