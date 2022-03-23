import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-get-country',
  templateUrl: './get-country.component.html',
  styles: [`
    .medium-flag {
      width: 150px
    }
  `]
})
export class GetCountryComponent implements OnInit {

  country!: Country;

  // Activated route is necessary to make changes to the url
  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( ({ id }) => {
      console.log( id );

      this.countryService.getCountryById( id ).subscribe( country => {
        console.log(country);
        this.country = country[0];
      });

    })

  }

}
