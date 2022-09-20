import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListComponent } from './list/list.component';
import { ObjectComponent } from './object/object.component';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { ODataModule } from 'angular-odata';
import { ODataBackendService } from './o-data-backend.service';


const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'item/:id', component: ObjectComponent },
];

const oDataSettings = {
  serviceRootUrl: 'https://services.odata.org/V4/(S(4m0tuxtnhcfctl4gzem3gr10))/TripPinServiceRW/'
};

@NgModule({
  declarations: [
    ListComponent,
    ObjectComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    ODataModule.forRoot(oDataSettings)
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [ODataBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
