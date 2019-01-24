import { MdbTablePaginationComponent, MdbTableService } from 'angular-bootstrap-md';

import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import {Response} from '../../models/ServiceModel/Response';
import { Contact } from 'src/app/models/Contact';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;

  elements: any = [];
  previous: any = [];
  headElements = ['ID', 'Name', 'Address', 'Details', 'Action'];
  firstItemIndex;
  lastItemIndex;


  public contacts:Array<Contact> = new Array<Contact>();

  constructor(
    private tableService: MdbTableService,
    private cdRef: ChangeDetectorRef,
    private _contactService: ContactService) {
  }

  ngOnInit() {
    this.getAllContacts();
  
    
  }

  getAllContacts() {
    this._contactService.getAllContacts().subscribe(
        responseAllContacts => {
            Object.assign(this.contacts, responseAllContacts);
            
            for(const contact of this.contacts) {
      
            this.elements.push({  Id: contact.id, 
                                  Name: contact.name, 
                                  Address: contact.address, 
                                  Details: contact.details });
          }
      
          this.tableService.setDataSource(this.elements);
          this.elements = this.tableService.getDataSource();
          this.previous = this.tableService.getDataSource();
        },
        error => {
            console.log(<any> error);
        }
      );
  }

  deleteContact(id) {
    console.log(id);
    this._contactService.deleteContact(id).subscribe(
      response => {
        this.elements = this.elements.filter( item => item.Id != id);
      }, error => {
        console.log(error);
      }
    )
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);
    this.firstItemIndex = this.mdbTablePagination.firstItemIndex;
    this.lastItemIndex = this.mdbTablePagination.lastItemIndex;

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  onNextPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }

  onPreviousPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }
}