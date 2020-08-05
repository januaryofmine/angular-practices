import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  ComponentRef,
  ComponentFactoryResolver,
  OnDestroy,
} from "@angular/core";
import { AlertContentComponent } from "../alert-content/alert-content.component";
import { AlertService } from "../alert.service";

@Component({
  selector: "app-alert-container",
  templateUrl: "./alert-container.component.html",
  styleUrls: ["./alert-container.component.scss"],
})
export class AlertContainerComponent
  implements OnInit, AfterViewInit, OnDestroy {
  componentRef: ComponentRef<AlertContentComponent>;
  data: string;

  constructor(
    private container: ViewContainerRef,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.alertService.close$.subscribe(() => {
      this.container.clear();

      if (this.componentRef) {
        this.componentRef.destroy();
      }
    });
  }

  ngAfterViewInit() {
    this.renderComponent();
  }

  renderComponent() {
    // const container = this.container;
    this.container.clear();
    const injector = this.container.injector;

    const cfr: ComponentFactoryResolver = injector.get(
      ComponentFactoryResolver
    );

    const componentFactory = cfr.resolveComponentFactory(AlertContentComponent);

    const componentRef = this.container.createComponent(
      componentFactory,
      0,
      injector
    );
    componentRef.instance.data = "DATA INPUT";
    componentRef.changeDetectorRef.detectChanges();
    this.componentRef = componentRef;
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
