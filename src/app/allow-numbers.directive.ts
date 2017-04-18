import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[onlyNumber]'
})
export class AllowNumbersDirective {
  regexStr = '^[0-9]*$';
  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event'])
  allowNumbers(ev) {
    let e = <KeyboardEvent>ev;
    // Allow: backspace, delete, tab, escape, enter and .
    if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode == 65 && e.ctrlKey === true) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  }
}
