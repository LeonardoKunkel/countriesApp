import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Import the interface
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  // Stablish a variable with the link to the API
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  findCountry( term: string ) {
    // Stablished the type of data we are getting (Country)
    return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`);
  }

}
