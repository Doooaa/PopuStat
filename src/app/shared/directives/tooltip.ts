import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import tippy, { Instance, Props } from 'tippy.js';
import 'tippy.js/dist/tippy.css';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnInit, OnDestroy {
  @Input('appTooltip') content: string | null = null;
  @Input() tooltipPlacement: Props['placement'] | undefined = undefined;
  @Input() tooltipTrigger: Props['trigger'] | undefined = undefined;
  @Input() tooltipDelay: Props['delay'] | undefined = undefined;

  private instance: Instance | null = null;

  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.instance = tippy(this.host.nativeElement, {
      content: this.content ?? '',
      placement: this.tooltipPlacement ?? 'top',
      trigger: this.tooltipTrigger ?? 'mouseenter focus',
      delay: this.tooltipDelay ?? 0,
      allowHTML: true,
      arrow: true
    });
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.instance.destroy();
      this.instance = null;
    }
  }
}
