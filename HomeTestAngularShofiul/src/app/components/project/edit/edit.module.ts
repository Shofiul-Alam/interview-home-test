import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { Routes, RouterModule } from '@angular/router';
import { Select2Module } from 'ng2-select2';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{
  path: '',
  data: {
      title: 'Edit Project',
      urls: [{title: 'Edit Project', url: '/edit'}, { title: 'Edit Project'}]
  },
  component: EditComponent
}];

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Select2Module,
    FormsModule
  ]
})
export class EditModule { }
