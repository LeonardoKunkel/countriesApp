import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styles: [
  ]
})
export class AllCountriesComponent implements OnInit {

  countries: Country[] = [];

  constructor( private countryService: CountryService ) { }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe( countries => {
      console.log(countries);
      this.countries = countries
    });
  }

}
