import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectiveDemoDirective } from './custom-directive-demo.directive';
import { ExampleComponentComponent } from './example-component/example-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveDemoDirective,
    ExampleComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
