import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { computePosition, flip } from '@floating-ui/dom';
import { ROUTING } from '@ngmug/shared/ngmug-utils';

@Component({
  selector: 'ngmug-get-started',
  templateUrl: './get-started.component.html',
})
export class GetStartedComponent implements OnInit, AfterViewInit {
  @ViewChild('btn') btn!: ElementRef;
  @ViewChild('tooltip') tooltip!: ElementRef;

  rxjsAboutRoute = ROUTING.getNavRoute((p) => p.rxjs.getstarted);

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    computePosition(this.btn.nativeElement, this.tooltip.nativeElement, {
      placement: 'top',
      middleware: [flip()],
    }).then(({ x, y }) => {
      console.log('log');
      Object.assign(this.tooltip.nativeElement.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }
}
