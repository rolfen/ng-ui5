import { Component, OnInit } from '@angular/core';
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableRow.js";
import "@ui5/webcomponents/dist/TableCell.js";
import "@ui5/webcomponents/dist/TableColumn.js";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/Select.js";
import "@ui5/webcomponents/dist/DatePicker.js";


import "@ui5/webcomponents/dist/TabContainer.js";
import "@ui5/webcomponents/dist/TabSeparator.js";
import "@ui5/webcomponents/dist/Tab.js";

import { ODataBackendService } from '../o-data-backend.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products = [] as Array<any>;

  constructor(private oDataBackendService : ODataBackendService) { 

  }

  ngOnInit(): void {

    this.oDataBackendService.getProducts().subscribe((d : any) => {
      this.products = d.d.results;
    });

  }

}
