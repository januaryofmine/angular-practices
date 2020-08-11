import { Directive, Input, ViewContainerRef, TemplateRef } from "@angular/core";

@Directive({
  selector: "[ngCustomLoop]",
})
export class CustomLoopDirective {
  @Input("ngCustomLoopOf") itemList: Array<any>;
  @Input("ngCustomLoopFindingText") findingText: string;

  constructor(
    private containerRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnChanges() {
    this.containerRef.clear();

    const filterArray = this.itemList.filter((text: string) =>
      text.toLowerCase().startsWith(this.findingText.toLowerCase())
    );

    for (const item of filterArray) {
      this.containerRef.createEmbeddedView(this.template, {
        $implicit: item,
        index: this.itemList.indexOf(item),
      });
    }
  }
}
