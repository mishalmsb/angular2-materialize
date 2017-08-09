import { Injectable } from '@angular/core';
import { Country, countries } from "./";

@Injectable()
export class CountriesService {

    getCountries() : Country[] {
        return countries;
    }
}