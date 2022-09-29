import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'User-Agent': 'ngApp',
    'Authorization': 'Basic ' + btoa('charbel:whatever')
  })
};


@Injectable({providedIn: 'root'})
export class ODataBackendService {
  
  private baseUrl = 'https://9148-51-175-74-6.eu.ngrok.io';
  private prUrl = this.baseUrl + '/ws_restful_data_controller/purchase_requisitions';


  constructor(private http: HttpClient) { }


  query() {


  }

  getPRs() {
    return this.http.get(this.prUrl, httpOptions);
  }

  getPR(id : number) {
    return this.http.get(this.prUrl + '(' + id + ')', httpOptions);
  }


}
