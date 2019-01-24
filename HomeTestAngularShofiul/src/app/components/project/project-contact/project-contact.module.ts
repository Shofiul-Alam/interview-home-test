import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectContactComponent } from './project-contact.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Select2Module } from 'ng2-select2';

const routes: Routes = [{
  path: '',
  data: {
      title: 'Project contacts',
      urls: [{title: 'Project Contacts', url: '/edit'}, { title: 'Project contacts'}]
  },
  component: ProjectContactComponent
}];

@NgModule({
  declarations: [ProjectContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    Select2Module

  ]
})
export class ProjectContactModule { }
