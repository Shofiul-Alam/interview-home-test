import { Component, OnInit } from '@angular/core';
import { ContactView } from 'src/app/models/ViewModel/ContactView';
import { Project } from 'src/app/models/Project';
import { MultiSelect } from 'src/app/models/ViewModel/MultiSelect';
import { ContactService } from 'src/app/services/contact.service';
import { ProjectService } from 'src/app/services/project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectUpdate } from 'src/app/models/ViewModel/ProjectUpdate';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public options: Select2Options;
  public contactList: Array<ContactView> = new Array<ContactView>();
  public project: ProjectUpdate = new ProjectUpdate();
  public contacts: Array<MultiSelect>;
  public extra: any = {};
  public selectedContacts: string[];
  public routeId: any;

  constructor(
    private _contactService: ContactService,
    private _projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.routeId = this.route.snapshot.paramMap.get('id');
    this.getProject(this.routeId);
    
    

    this.options = {
      multiple: true,
      placeholder: 'Please Select Contacts'
    }
    

  }

  getProject(id) {
    this._projectService.getProject(id).subscribe(
      responseProject => {
          Object.assign(this.project, responseProject);
          this.project.contactList = this.project.contacts;
          this.getAllContacts();
      },
      error => {
          console.log(<any> error);

          
      }
    );
  }

  addContactToProject(data: {value: string[]}) {
    this.project.contactList = data.value;
    console.log(this.project.contactList);
  }

  getAllContacts(){
      this._contactService.getAllContacts().subscribe(
        responseAllContacts => {
            Object.assign(this.contactList, responseAllContacts);

            this.contacts = this._contactService.CreateContactSelectList(this.contactList);
            var arr = [];
            if(this.project.contactList.length > 0) {
              for(const contact of this.project.contactList){
                arr.push(contact.id.toString());
              }
            }
            this.selectedContacts = arr;
            console.log(this.selectedContacts);
            
            
        },
        error => {
            console.log(<any> error);

            
        }
      );
  }

  updateProject(f){
    this._projectService.updateProject(this.routeId, this.project).subscribe(
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
