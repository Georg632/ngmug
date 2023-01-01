import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ngmug-topbar-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './topbar-layout.component.html',
})
export class TopbarLayoutComponent {}
