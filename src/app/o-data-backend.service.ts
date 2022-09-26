import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'




@Injectable({providedIn: 'root'})
export class ODataBackendService {
  
  private productsUrl = 'https://services.odata.org/V2/(S(cnqkn3twkxnupuslkhmbwq1h))/OData/OData.svc/Products';


  constructor(private http: HttpClient) { }


  query() {

    // return this.http.get(this.url);

    // const data1 = await o('https://services.odata.org/V2/(S(cnqkn3twkxnupuslkhmbwq1h))/OData/OData.svc/Products')

  }

  getProducts() {
    return this.http.get(this.productsUrl);
  }

  getProduct(id : number) {

  }


}
