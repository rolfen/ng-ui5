import { Component, OnInit } from '@angular/core';
import "@ui5/webcomponents/dist/TabContainer.js";
import "@ui5/webcomponents/dist/TabSeparator.js";
import "@ui5/webcomponents/dist/Tab.js";


import { ODataBackendService } from '../o-data-backend.service';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})

export class ObjectComponent implements OnInit {

  product : any;

  constructor(private oDataBackendService : ODataBackendService) {

  }


  ngOnInit(): void {
  }

}
