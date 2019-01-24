import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

const routes: Routes = [{
  path: '',
  data: {
    title: "Contacts",
    urls: [{ title: 'Contacts', url: '/contacts'}, {title: 'Contacts'}]
  },
  component: ContactComponent
}]

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
