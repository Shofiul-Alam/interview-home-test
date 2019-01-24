import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComponentsComponent} from './components.component';



const routes: Routes = [
  {
    path: '', component: ComponentsComponent,
    children: [

        /************************************* Child Routes *****************************************************/
        /**************************************************-*****************************************************/
        { path: '', loadChildren: './home/home.module#HomeModule'},


        /************************************* Project Routes *****************************************************/
        /**************************************************-*****************************************************/
        { path: 'projects', loadChildren: './project/project.module#ProjectModule'},
        { path: 'projects/add', loadChildren: './project/add/add.module#AddModule'},
        { path: 'projects/edit/:id', loadChildren: './project/edit/edit.module#EditModule'},
        { path: 'projects/add-contact', loadChildren: './project/project-contact/project-contact.module#ProjectContactModule'},

        /************************************* Contacts Routes *****************************************************/
        /**************************************************-*****************************************************/
        { path: 'contacts', loadChildren: './contact/contact.module#ContactModule'},
        { path: 'contacts/add', loadChildren: './contact/add/contactAdd.module#ContactAddModule'},
        { path: 'contacts/edit/:id', loadChildren: './contact/edit/contactEdit.module#ContactEditModule'},

    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule { }
