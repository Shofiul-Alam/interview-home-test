import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact';
import { AppService } from './base/app.service';
import { MultiSelect } from '../models/ViewModel/MultiSelect';
import { ContactView } from '../models/ViewModel/ContactView';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public url: string;
  public contact: Contact = new Contact();

  constructor(
    private _appService: AppService
  ) { 
    this.url = _appService.serverURL;
  }

  public getAllContacts() {
    const endpoint = '/contacts';
    return this._appService.get<Response>(endpoint);
  }

  public createContact(contact: ContactView){
    const endpoint = '/contacts/add';
    return this._appService.post(endpoint, contact);
  }

  public getContact(id) {
    const endpoint = '/contacts/'+id;
    return this._appService.get(endpoint);
  }

  public updateContact(id, contact: ContactView) {
    const endpoint = '/contacts/update/'+id;
    return this._appService.put(endpoint, contact);
  }

  public deleteContact(id) {
    const endpoint = '/contacts/'+id;
    console.log(endpoint);
    return this._appService.delete(endpoint);
  }

  public CreateContactSelectList(params:Array<ContactView>) {
    var selectList:Array<MultiSelect> = new Array<MultiSelect>();

      for(const contact of params) {
          var item:MultiSelect = new MultiSelect();
          item.id = contact.id;
          item.text = contact.name;
          var obj = new ContactView(contact.id, contact.name, contact.details, contact.address);
          item.object = obj;
          selectList.push(item);
      }
      return selectList;
  }
}
