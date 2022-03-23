import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FindCountryComponent } from './pages/find-country/find-country.component';
import { GetCountryComponent } from './pages/get-country/get-country.component';
import { TableComponent } from './components/table/table.component';
import { AllCountriesComponent } from './pages/all-countries/all-countries.component';



@NgModule({
  declarations: [
    FindCountryComponent,
    GetCountryComponent,
    TableComponent,
    AllCountriesComponent
  ],
  exports: [
    FindCountryComponent,
    GetCountryComponent,
    AllCountriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountryModule { }
