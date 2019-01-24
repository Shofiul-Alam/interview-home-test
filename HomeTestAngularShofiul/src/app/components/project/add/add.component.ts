import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';
import { ContactView } from 'src/app/models/ViewModel/ContactView';
import { Project } from 'src/app/models/Project';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';
import { MultiSelect } from 'src/app/models/ViewModel/MultiSelect';
import { ProjectService } from 'src/app/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public options: Select2Options;
  public contactList: Array<ContactView> = new Array<ContactView>();
  public project: Project = new Project();
  public contacts: Array<MultiSelect>;
  public extra: any = {};

  constructor(
    private _contactService: ContactService,
    private _projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit() {
    this.options = {
      multiple: true,
      placeholder: 'Please Select Contacts'
    }
    this.getAllContacts();

  }

  addContactToProject(data: {value: string[]}) {
    this.project.contactList = data.value;
  }

  getAllContacts(){
      this._contactService.getAllContacts().subscribe(
        responseAllContacts => {
            Object.assign(this.contactList, responseAllContacts);
            this.contacts = this._contactService.CreateContactSelectList(this.contactList);
        },
        error => {
            console.log(<any> error);
        }
      );
  }

  addProject(f){
    this._projectService.createProject(this.project).subscribe(
      response => {
          this.router.navigate(['/projects']);
        },
        error => {
          console.log(<any> error);
          this.extra = error;
        }
    );
  }

}
