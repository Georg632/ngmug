import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FooterLink {
  iconUrl: string;
  url: string;
}

@Component({
  selector: 'gh-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gh-footer.component.html',
})
export class GhFooterComponent {
  footer: FooterLink[] = [
    {
      iconUrl: './assets/images/logo/georghoellerdev.png',
      url: 'https://georghoeller.dev/',
    },
  ];
}
