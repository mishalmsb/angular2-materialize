import { Component } from '@angular/core';
import { Country, CountriesService } from './services/countries';

declare var $;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    countries: Country[];
    autocompleteData: any;
    countryName: string;
    countryCode: string;
    isSettingAutocomplete: boolean = true;

    constructor(private _countriesService : CountriesService) {
        this.setAutocomplete();
    }

    ngOnInit() {
        this.getCountries();
    }

    setAutocomplete() {
        let self = this;
        $(document).ready(function() {
            $('input.autocomplete').autocompleteCustomizableData({
                data: self.countries,
                displayData: 'name',
                ngModelValue: 'code',
                limit: 20,
                onAutocomplete: function(val) {
                    console.log(val);
                    self.countryCode = val;
                },
                minLength: 1,
            });
        });
    }

    getCountries() {
        let self = this;
        this.countries = this._countriesService.getCountries();
        this.isSettingAutocomplete = false;
    }
}
