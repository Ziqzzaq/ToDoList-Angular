import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      AsyncLocalStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
