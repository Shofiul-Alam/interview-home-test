import {AfterViewInit, Component, OnInit} from '@angular/core';


declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  public showHide: boolean;
  constructor() { }

  ngOnInit() {
    this.showHide = true;
  }

  changeShowStatus() {
      this.showHide = !this.showHide;
  }


  ngAfterViewInit() {
     
  }

}
