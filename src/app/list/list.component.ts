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

  constructor(oDataBackendService : ODataBackendService) { 
    oDataBackendService.getProducts().subscribe((d) => {
      console.dir(d);
    });
  }

  ngOnInit(): void {
  }

}
