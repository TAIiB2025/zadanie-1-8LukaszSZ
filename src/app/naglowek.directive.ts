import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNaglowek]'
})
export class NaglowekDirective {
  @HostBinding('textContent') tekst = 'Sklep TAIiB';

  @HostListener('mouseenter') onMouseEnter() {
    this.tekst = 'Sklep TAIiB :)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.tekst = 'Sklep TAIiB';
  }
}
