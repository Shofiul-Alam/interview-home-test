import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  constructor(
      private _router: Router,
  ) { }

  ngOnInit() {

  }

    redirectUrl() {
        
    }

}
