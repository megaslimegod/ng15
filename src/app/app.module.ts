import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatDatepickerModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
