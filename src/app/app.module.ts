import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListComponent } from './list/list.component';
import { ObjectComponent } from './object/object.component';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'item/:id', component: ObjectComponent },
];

@NgModule({
  declarations: [
    ListComponent,
    ObjectComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
