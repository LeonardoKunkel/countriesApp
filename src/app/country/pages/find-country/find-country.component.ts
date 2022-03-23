import { Component, OnInit } from '@angular/core';
// Import the country service
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-find-country',
  templateUrl: './find-country.component.html',
  styles: [
  ]
})
export class FindCountryComponent {

  // Generate a changing value
  term: string = '';
  // Generate a boolean
  isError: boolean = false;
  

  constructor( private countryService: CountryService ) { }

  find() {

    // Set the boolean in false if the request is accepted
    this.isError = false;

    // Call the service____________pass the changing value (term)
    this.countryService.findCountry(this.term).subscribe( countries => {
      console.log(countries);
    }, (err) => {
      // Change the value of the boolean to know there was an error
      this.isError = true;
    })

  }

}
