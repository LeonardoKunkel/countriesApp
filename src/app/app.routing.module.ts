import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FindCountryComponent } from './country/pages/find-country/find-country.component';
import { FindContinentComponent } from './country/pages/find-continent/find-continent.component';
import { GetCountryComponent } from "./country/pages/get-country/get-country.component";

// Routes Established
const routes: Routes = [

    // Route to find a country
    {
        path: '',
        component: FindCountryComponent,
        pathMatch: 'full'
    },
    // Route to find per continent
    {
        path: 'continent',
        component: FindContinentComponent
    },
    // Route to access an especific country
    {
        path: 'country/:id',
        component: GetCountryComponent
    },
    // Route to redirect if the route does not exist
    {
        path: '**',
        redirectTo: ''
    }

]

@NgModule({
    imports: [ RouterModule.forRoot( routes ) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
