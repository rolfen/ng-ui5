import { Component, OnInit } from '@angular/core';
import "@ui5/webcomponents/dist/TabContainer.js";
import "@ui5/webcomponents/dist/TabSeparator.js";
import "@ui5/webcomponents/dist/Tab.js";
import "@ui5/webcomponents/dist/Title.js";



import { ODataBackendService } from '../o-data-backend.service';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})

export class ObjectComponent implements OnInit {

  product : any;


  constructor(
    private oDataBackendService : ODataBackendService,
    private activatedRoute: ActivatedRoute
  ) {

  }


  ngOnInit(): void {
      // Route parameters
      this.activatedRoute.params.subscribe( params => {
        // this.routeParams = params;
        // console.dir(params['id']);
        this.oDataBackendService.getProduct(parseInt(params['id'])).subscribe((d : any) => {
          console.dir(d)
          this.product = d.d;
        });
      });
    // this.route.params.subscribe(params => { this.flight_id = params['flight_id']; });
  }

}
