import { Injectable } from '@angular/core';
import { ODataClient, ODataServiceFactory } from "angular-odata";
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class ODataBackendService {
  constructor(private factory: ODataServiceFactory) { }
  query() {
    // Use OData Service Factory
    let dataService = this.factory.entitySet(
      "Products"
      // ,"Microsoft.OData.SampleService.Models.TripPin.Airport"
    );
    let data = dataService.entities();
    data.fetch().subscribe(({ entities }) => { 
      console.log(entities); 
    });
  }

}
