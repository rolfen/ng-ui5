import { Component } from '@angular/core';
import { ODataBackendService } from './o-data-backend.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(oDataBackendService : ODataBackendService) { 
    console.dir(oDataBackendService);
    oDataBackendService.query().subscribe((data) => {
      console.log(data);
    });
  }
  title = 'ngwc';
}