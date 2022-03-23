import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FindCountryComponent } from './pages/find-country/find-country.component';
import { GetCountryComponent } from './pages/get-country/get-country.component';
import { FindContinentComponent } from './pages/find-continent/find-continent.component';



@NgModule({
  declarations: [
    FindCountryComponent,
    GetCountryComponent,
    FindContinentComponent
  ],
  exports: [
    FindCountryComponent,
    GetCountryComponent,
    FindContinentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountryModule { }
