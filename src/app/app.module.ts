
import { AppComponent } from './app.component';
import { NgbdDatepickerRange } from './datepicker/datepicker.component';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NgbdDatepickerRange
  ],
  imports: [
   BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, NgbModule.forRoot()
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
