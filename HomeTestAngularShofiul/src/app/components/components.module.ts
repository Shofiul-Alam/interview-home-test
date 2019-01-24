import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {ComponentsComponent} from './components.component';
import { HeaderComponent } from './global-components/header/header.component';
import { BreadcumbComponent } from './global-components/breadcumb/breadcumb.component';
import { FooterComponent } from './global-components/footer/footer.component';
import {ComponentsRoutingModule} from './components-routing.module';
import {SIDEBAR_TOGGLE_DIRECTIVES} from './global-components/sidebar.directive';
import {NAV_DROPDOWN_DIRECTIVES} from './global-components/nav-dropdown.directive';


@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
  ],
  declarations: [
      ComponentsComponent,
      HeaderComponent,
      BreadcumbComponent,
      FooterComponent,
      SIDEBAR_TOGGLE_DIRECTIVES,
      NAV_DROPDOWN_DIRECTIVES
      ]
})
export class ComponentsModule { }
