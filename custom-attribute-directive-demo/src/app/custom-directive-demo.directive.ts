import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
} from "@angular/core";

@Directive({
  selector: "[appCustomDirective]",
})
export class CustomDirectiveDemoDirective {
  @Input() hoverColor: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.customContent("DEMO TEXT", "blue");
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.customContent("ON MOUSE ENTER", this.hoverColor);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.customContent("DEMO TEXT", "blue");
  }

  private customContent(text: string, color: string) {
    this.renderer.setProperty(this.el.nativeElement, "innerText", text);
    this.renderer.setStyle(this.el.nativeElement, "color", color);
  }
}
