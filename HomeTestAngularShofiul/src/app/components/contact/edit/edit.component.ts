import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactView } from 'src/app/models/ViewModel/ContactView';
import { ProjectUpdate } from 'src/app/models/ViewModel/ProjectUpdate';
import { MultiSelect } from 'src/app/models/ViewModel/MultiSelect';
import { ContactService } from 'src/app/services/contact.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public options: Select2Options;
  public contact: ContactView = new ContactView();
  public routeId: any;
  public extra: any;

  constructor(
    private _contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.routeId = this.route.snapshot.paramMap.get('id');
    this.getContact(this.routeId);
    
    

    this.options = {
      multiple: true,
      placeholder: 'Please Select Contacts'
    }
    

  }

  getContact(id) {
    this._contactService.getContact(id).subscribe(
      responseContact => {
          Object.assign(this.contact, responseContact);
      },
      error => {
          console.log(<any> error);

          
      }
    );
  }


  updateContact(f){
    this._contactService.updateContact(this.routeId, this.contact).subscribe(
      response => {
          this.router.navigate(['/contacts']);
        },
        error => {
          console.log(<any> error);

          
          this.extra = error;
        }
    );
  }

}
