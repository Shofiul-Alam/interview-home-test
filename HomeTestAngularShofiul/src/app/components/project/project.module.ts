import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

const routes: Routes = [{
  path: '',
  data: {
    title: "Projects",
    urls: [{ title: 'Projects', url: '/projects'}, {title: 'Projects'}]
  },
  component: ProjectComponent
}]

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MDBBootstrapModule

  ]
})
export class ProjectModule { }
