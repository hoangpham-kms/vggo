import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { VgLibModule } from 'vg-lib';

import { AppComponent } from './app.component';
@ NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    VgLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
