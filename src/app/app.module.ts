import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListComponent } from './list/list.component';
import { ObjectComponent } from './object/object.component';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { ODataBackendService } from './o-data-backend.service';

import { HttpClientModule } from  '@angular/common/http';

const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'item/:id', component: ObjectComponent },
];

 //  serviceRootUrl: 'https://services.odata.org/V2/(S(cnqkn3twkxnupuslkhmbwq1h))/OData/OData.svc/',
 // version: '2.0'

@NgModule({
  declarations: [
    ListComponent,
    ObjectComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [ODataBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
