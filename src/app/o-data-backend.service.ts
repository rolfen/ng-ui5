import { Injectable } from '@angular/core';
import { ODataClient, ODataServiceFactory } from "angular-odata";


@Injectable({
  providedIn: 'root'
})
export class ODataBackendService {
  constructor(private factory: ODataServiceFactory) { }
  query() {

    // Use OData Service Factory
    let airportsService = this.factory.entitySet(
      "Airports",
      "Microsoft.OData.SampleService.Models.TripPin.Airport"
    );
    let airports = airportsService.entities();

    // Fetch airports
    airports.fetch().subscribe(({ entities }) => {
      console.log("Airports: ", entities);
    });

  }

}
