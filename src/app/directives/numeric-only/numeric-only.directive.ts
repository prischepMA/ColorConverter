import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {text} from '@angular/core/src/render3';

@Directive({
  selector: '[appNumericOnly]'
})
export class NumericOnlyDirective {

  inputElement: HTMLElement;
  max = 0;

  constructor(private elementRef: ElementRef) {
    this.inputElement = elementRef.nativeElement;
  }

  @Input() set appNumericOnly(st: String) {
    this.max = +st;
  }

  @HostListener('input', ['$event']) onchange(event: any) {
    const oldValue = (<any>this.inputElement).value;
    let value = (<any>this.inputElement).value;
    const lastChar = value.substr(value.length - 1);

    let bool = lastChar.match(/[0-9]/);
    if (bool) {
      bool = parseInt(value) >= 0 && parseInt(value) <= this.max;
    }
    if (!bool) {
      value = value.substr(0, value.length - 1);
      (<any>this.inputElement).value = value;

      const event = new Event('input', {bubbles: true});
      if (lastChar.charCode >= 48 || lastChar.charCode <= 57 || oldValue > this.max) {
        this.inputElement.dispatchEvent(event);
      }

    }

  }

  @HostListener('keypress', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const char = String.fromCharCode(event.charCode);
    if (/\D/.test(char)) {
      event.preventDefault();
    }
  }

}
