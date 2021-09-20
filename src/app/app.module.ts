import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { EventClickComponent } from './event-click/event-click.component';
import { UpperLowerButtonComponent } from './upper-lower-button/upper-lower-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SecondCompComponent,
    StringInterpolationComponent,
    EventClickComponent,
    UpperLowerButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
