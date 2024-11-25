import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    NzBreadCrumbModule, 
    RouterOutlet, 
    NzIconModule, 
    NzLayoutModule,
    NzAvatarModule,
    NzFlexModule,
    NzMenuModule,
    NzDropDownModule,
    NzToolTipModule,
    NzTableModule,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  title = 'app-ngzorro';

  constructor() {}

  
}
