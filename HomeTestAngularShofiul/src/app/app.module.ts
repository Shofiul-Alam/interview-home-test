import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { AppService } from './services/base/app.service';
import { ProjectService } from './services/project.service';
import { ContactService } from './services/contact.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UtilityService } from './services/utility.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    AppService,
    ProjectService,
    ContactService,
    UtilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
