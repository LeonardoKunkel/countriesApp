import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-get-country',
  templateUrl: './get-country.component.html',
  styles: [
  ]
})
export class GetCountryComponent implements OnInit {

  // Activated route is necessary to make changes to the url
  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( ({ id }) => {
      console.log( id );

      this.countryService.getCountryById( id ).subscribe( country => {
        console.log(country);
      });

    })

  }

}
