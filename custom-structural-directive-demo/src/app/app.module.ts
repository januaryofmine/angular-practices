import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomLoopDirective } from "./custom-loop.directive";
import { ExampleContainerComponent } from "./example-container/example-container.component";

@NgModule({
  declarations: [AppComponent, CustomLoopDirective, ExampleContainerComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
