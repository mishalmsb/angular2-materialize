import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';

// components
import { Autocomplete2Component,
          } from './components';

//services
import { CountriesService } from './services';

@NgModule({
    declarations: [
        AppComponent,
        Autocomplete2Component
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
