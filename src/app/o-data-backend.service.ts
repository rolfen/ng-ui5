import { Injectable } from '@angular/core';
import { ODataClient, ODataServiceFactory } from "angular-odata";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ODataBackendService {
  constructor(private factory: ODataServiceFactory) { }
  query() : Observable<any> {

    // Use OData Service Factory
    let airportsService = this.factory.entitySet(
      "Airports",
      "Microsoft.OData.SampleService.Models.TripPin.Airport"
    );
    let airports = airportsService.entities();
    return airports.fetch();
  }

}
