import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactView } from 'src/app/models/ViewModel/ContactView';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public contact: ContactView = new ContactView();
  public extra: any;

  constructor(
    private _contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit() {

     
   

  }



  addContact(f){
    this._contactService.createContact(this.contact).subscribe(
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
