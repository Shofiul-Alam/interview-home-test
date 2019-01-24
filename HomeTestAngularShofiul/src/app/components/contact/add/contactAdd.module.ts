import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{
  path: '',
  data: {
      title: 'Add Contact',
      urls: [{title: 'Add Contact', url: '/add'}, { title: 'Add Project'}]
  },
  component: AddComponent
}];

@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ContactAddModule { }
