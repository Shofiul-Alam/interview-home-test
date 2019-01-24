import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ContactAdd } from 'src/app/models/ViewModel/ContactAdd';
import { ContactService } from 'src/app/services/contact.service';
import { ContactView } from 'src/app/models/ViewModel/ContactView';
import { MultiSelect } from 'src/app/models/ViewModel/MultiSelect';
import { ProjectUpdate } from 'src/app/models/ViewModel/ProjectUpdate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-contact',
  templateUrl: './project-contact.component.html',
  styleUrls: ['./project-contact.component.scss']
})
export class ProjectContactComponent implements OnInit {
  
  public projects:Array<Project> = new Array<Project>();
  public contact: ContactAdd = new ContactAdd();
  public project: Project = new Project();
  public projectUpdate: ProjectUpdate = new ProjectUpdate();
  contactForm: FormGroup;
  public options: Select2Options;
  public contactList: Array<ContactView> = new Array<ContactView>();
  public contacts: Array<MultiSelect>;
  public selectedContacts: string[];
  public showMeModal: boolean = false;
  

  constructor(
    private _projectService: ProjectService,
    private _contactService: ContactService,
    private router: Router) {
  }

  ngOnInit() {
    this.getAllProjects();
    this.getAllContacts();
    this.contactForm = this.createFormGroup();

    this.options = {
      multiple: true,
      placeholder: 'Please Select Contacts'
    }
  }

  createFormGroup() {
    return new FormGroup({
        name: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        details: new FormControl()
    });
  }

  getAllProjects() {
    this._projectService.getAllProjects().subscribe(
        responseAllProjects => {
            Object.assign(this.projects, responseAllProjects);
        },
        error => {
            console.log(<any> error);
        }
    );
  }

  getAllContacts(){
    this._contactService.getAllContacts().subscribe(
      responseAllContacts => {
          Object.assign(this.contactList, responseAllContacts);

          this.contacts = this._contactService.CreateContactSelectList(this.contactList); 
          console.log(this.contacts);         
      },
      error => {
          console.log(<any> error);

          
      }
    );
}


  editContact($event, project: Project) {
    this.showMeModal = true;
    $event.preventDefault();
    this.project = project;
    this.prepareSelectedContacts();
  }

  addContactToProject(){
    const result: ContactAdd = Object.assign({}, this.contactForm.value);
    
    this._projectService.addContactToProject(this.project.id, result).subscribe(
      response => {
        Object.assign(this.projects, response);
        this.clearContacts();
        
      }, error => {
        console.log(error);
      }
    )};

    deleteContact($event, id, projectId) {
      console.log(id);
      this._contactService.deleteContact(id).subscribe(
        response => {
          this.projects.map(item => {
              if(item.id == projectId) {
                return item.contacts = item.contacts.filter(contact => contact.id != id);
              }
          });
        }, error => {
          console.log(error);
        }
      )
    }

  prepareSelectedContacts() {
      var arr = [];
      if(this.project.contacts.length > 0) {
        for(const contact of this.project.contacts){
          arr.push(contact.id.toString());
        }
      }
      this.selectedContacts = arr;
    }

    clearContacts(){
      this.showMeModal = false;
      this.selectedContacts = [];
      this.project = new Project();
    }

   reInit(data: {value: string[]}) {
    Object.assign(this.projectUpdate, this.project);
    this.projectUpdate.contactList = data.value;
    console.log(this.project.contactList);
  }

  addExistingContact(){
    this._projectService.updateProject(this.projectUpdate.id, this.projectUpdate).subscribe(
      response => {
          window.location.reload();
        },
        error => {
          console.log(<any> error);
        }
    );
  }
}
