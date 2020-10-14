import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

// import { AppComponent } from './app.component';
import { MyElementComponent } from './my-element/my-element.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    // AppComponent,
    MyElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [MyElementComponent],
})
export class AppModule { 
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(MyElementComponent, { injector: this.injector });
    customElements.define('my-element', el);
  }
}
