import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';

// components

//services
import { CountriesService } from './services';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        MaterializeModule
    ],
    providers: [
        CountriesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
