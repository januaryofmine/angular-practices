import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appCustomDirective]",
})
export class CustomDirectiveDemoDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.innerText = "DEMO TEXT";
    this.el.nativeElement.style.color = "blue";
  }
}
