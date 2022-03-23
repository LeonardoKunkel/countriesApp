import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [`
  .small-flag {
    width: 50px;
  }
`]
})
export class TableComponent implements OnInit {

  // Stablish an input to send data to the father (find-country)
  @Input()countries: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
