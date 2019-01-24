import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { Routes, RouterModule } from '@angular/router';
import { Select2Module } from 'ng2-select2';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{
  path: '',
  data: {
      title: 'Add Project',
      urls: [{title: 'Add Project', url: '/add'}, { title: 'Add Project'}]
  },
  component: AddComponent
}];

@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Select2Module,
    FormsModule
  ]
})
export class AddModule { }
